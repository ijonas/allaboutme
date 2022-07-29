import { Avatar, Flex, Text } from '@chakra-ui/react'

const ProfilePic = ({ name, url, displayName }: any) => {

  const withoutName = (<Flex><Avatar name={name} src={url} size="xl" /></Flex>)
  const withName = (<Flex direction="column" align="center" width={40}>
    <Avatar name={name} src={url} size="xl" />
    <Text>{name}</Text>
  </Flex>)

  const avatar = displayName ? withName : withoutName

  return (avatar)
}

export default ProfilePic