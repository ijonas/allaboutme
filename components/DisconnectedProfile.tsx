import { useViewerRecord, Provider, RequestClient, useViewerConnection } from '@self.id/framework'
import { Flex, Text, Button, Input, Avatar } from '@chakra-ui/react'
import { shorten } from '../lib/helpers'
import ProfilePic from './ProfilePic';


const ProfileField = ({ label, value, verified }: any) => {
  const color = verified ? "orange.400" : "gray.500";

  return (
    <Flex direction="column" paddingTop={3}>
      <Text>{label}</Text>
      <Text fontSize="xl" color={color}>{value}</Text>
    </Flex>
  )
}

const DisconnectedProfile = ({ profile }: any) => {
  return (
    <Flex direction="row">
      <Flex direction="column" paddingTop={5} paddingBottom={5} width="70%">
        <Text marginBottom={5}>Your basic profile is always visible to the rest of the world. You can use the other tabs to set the visibility and permissions around those specific topics.</Text>
        <ProfilePic url={profile.avatarURL} />
        <ProfileField label="Full Name" value={profile.name} />
        <ProfileField label="DID" value={shorten(profile.did)} verified={true} />
        <ProfileField label="Email" value={profile.email} verified={true} />
        <ProfileField label="Phone" value={profile.phone} />
        <ProfileField label="Twitter" value={profile.twitter} verified={true} />
        <ProfileField label="Github" value={profile.github} />
        <ProfileField label="Instagram" value={profile.instagram} />
      </Flex>
      <Flex paddingTop={5} paddingBottom={5} paddingLeft={5} width="30%">
        <Flex direction="column">
          <Text marginBottom={5}>Orange properties have been verified.</Text>
          <Text marginBottom={5}>Grey properties are still to be verified.</Text>
          <Button width={140} marginBottom={5}>Edit Profile</Button>
          <Text marginBottom={5}>You can share your profile clicking the button below.</Text>
          <Button width={140}>Share Profile</Button>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default DisconnectedProfile