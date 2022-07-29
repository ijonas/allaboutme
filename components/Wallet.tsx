import { Box, Flex, Text } from '@chakra-ui/react'

const Wallet = ({ type, name, address, balance }: any) =>

  <Box bg='tomato' w='200' height="150" color='white'>
    <Flex direction="column" p={5}>
      <Text fontSize="xl">{type}</Text>
      <Text>{name}</Text>
      <Text>{address}</Text>
      <Text>{balance}</Text>
    </Flex>
  </Box>


export default Wallet