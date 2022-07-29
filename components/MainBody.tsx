import React, { useEffect, useState } from "react";
import { Flex, Text, Heading, Tabs, Tab, TabPanels, TabPanel, TabList, Spinner, Center } from '@chakra-ui/react'
import { useViewerRecord, Provider, RequestClient, useViewerConnection, BasicProfile, ViewerRecord } from '@self.id/framework'
import { useFormik } from "formik";

import Profile from "./Profile";
import EditProfile from "./EditProfile";
import DisconnectedProfile from "./DisconnectedProfile";
import { random100Friends, randomUser, randomUserURL } from "../lib/helpers";
import { SettingsIcon } from "@chakra-ui/icons";
import SocialTab from "./SocialTab";
import FinancialTab from "./FinancialTab";

export const getServerSideProps = async (ctx: any) => {
  const client = new RequestClient({ ceramic: 'testnet-clay', cookie: ctx.req.headers.cookie, })
  if (client.viewerID != null) {
    await client.prefetch('basicProfile', client.viewerID)
  }
  return { props: { state: client.getState() } }
}

const MainBody = ({ state }: any) => {
  const [initialised, setInitialised] = useState(false)
  const [loading, setLoading] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const record = useViewerRecord('basicProfile')
  const [connection, connect, disconnect] = useViewerConnection()

  const [avatarURL, setAvatarURL] = useState('')
  const [userProfile, setUserProfile] = useState({ _loaded: false })
  const [socialProfiles, setSocialProfiles] = useState([])

  useEffect(() => {
    if (!initialised) {
      setInitialised(true);
      setLoading(true)
      random100Friends().then(friends => {
        setLoading(false);
        const user = friends.splice(0, 1);
        setUserProfile(user[0]);
        setSocialProfiles(friends);
      })
    }
  })

  const formik = useFormik({
    initialValues: {
      name: record && record.content ? record.content.name : "",
      email: record && record.content ? record.content.email : "",
    },
    onSubmit: async (values) => {
      console.log("Submitted--->", values);
      if (record !== undefined) {
        const payload = { name: values.name, email: values.email }
        console.log("Setting record", payload)
        if (record !== undefined) {
          const rec = record as ViewerRecord<BasicProfile>
          if (rec.merge) {
            await rec.merge(payload)
          }
        }
        setEditMode(false)
      } else {
        console.log("No record")
      }
    },
  })

  let profile = DisconnectedProfile({
    profile: userProfile,
  })
  if (connection.status === 'connected') {
    profile = editMode ? EditProfile({ state, formik, record }) : Profile({ state, setEditMode, connection })
  }

  const tabs = (
    <Tabs>
      <TabList>
        <Tab>Profile</Tab>
        <Tab>Social</Tab>
        <Tab>Financial</Tab>
        <Tab>Education</Tab>
        <Tab>Professional</Tab>
        <Tab>Insurances</Tab>
        <Tab><SettingsIcon /></Tab>
      </TabList>

      <TabPanels>
        <TabPanel>{profile}</TabPanel>
        <TabPanel><SocialTab profiles={socialProfiles} /></TabPanel>
        <TabPanel><FinancialTab /></TabPanel>
        <TabPanel>
          <Heading>Higher Education</Heading>
          <Text>Below is a list of all your college- and university level certifactions.</Text>

          <Heading marginTop={10}>Accreditations</Heading>
          <Text>Below is a list of all your professional accreditations.</Text>

        </TabPanel>
        <TabPanel>
          <Heading>Work History</Heading>
          <Text>Below is a list of your certified work history.</Text>

        </TabPanel>
        <TabPanel>six
          <Heading>Work History</Heading>
          <Text>Below is a list of your certified work history.</Text>

        </TabPanel>
      </TabPanels>

    </Tabs>
  )

  const spinner = (<Center><Spinner
    thickness='4px'
    speed='0.65s'
    emptyColor='gray.200'
    color='blue.500'
    size='xl'
  /></Center>)


  return (



    <Flex direction="column" width="100%">
      {loading ? spinner : tabs}
    </Flex>

  )
}

export default MainBody