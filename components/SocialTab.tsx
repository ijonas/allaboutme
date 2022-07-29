import { Flex, Text, Button, Input, Avatar, Wrap, WrapItem, FormControl, FormLabel, Select } from '@chakra-ui/react'
import ProfilePic from './ProfilePic'


const SocialTab = ({ profiles }: any) => {
  return (
    <Flex direction="row">
      <Flex direction="column" paddingTop={5} paddingBottom={5} width="75%">
        <Text>Below is a list of all the social connections you've established across Lens Protocol and Twitter.</Text>
        <Flex paddingTop={5} paddingBottom={5}>
          <Wrap>
            {profiles.map((profile: any, index: number) => (<WrapItem key={index}><ProfilePic name={profile.name} url={profile.avatarURL} displayName={true} /></WrapItem>))}
          </Wrap>
        </Flex>
      </Flex>
      <Flex paddingTop={5} paddingBottom={5} paddingLeft={5} width="25%">
        <Flex direction="column">
          <FormLabel>Filter by Network</FormLabel>
          <Select placeholder='Select network' marginBottom={5}>
            <option>All</option>
            <option>Lenster</option>
            <option>Twitter</option>
          </Select>
          <FormLabel>Filter by Name</FormLabel>
          <Input placeholder='e.g. Jane' />
        </Flex>
      </Flex>


    </Flex>

  )
}

export default SocialTab