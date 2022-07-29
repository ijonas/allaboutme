import { useViewerRecord, Provider, RequestClient, useViewerConnection } from '@self.id/framework'
import { Flex, Text, Button, Input } from '@chakra-ui/react'

function ShowViewerName() {
  const record = useViewerRecord('basicProfile')
  console.log({ record })
  const text = record.isLoading
    ? 'Loading...'
    : record.content
      ? `Hello ${record.content.name || 'stranger'}`
      : 'No profile to load'
  return <Text suppressHydrationWarning>{text}</Text>
}

const Profile = ({ state, setEditMode, connection }: any) => {
  const did = connection?.selfID?.id
  return (
    <Provider state={state}>
      <ShowViewerName />
      <Text>DID: {did}</Text>
      <Button onClick={() => setEditMode(true)}>Edit Profile</Button>
    </Provider>
  )
}

export default Profile