import { Flex, Center } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Header from '../components/Header'
import MainBody from '../components/MainBody'
import Footer from '../components/Footer'


const Home: NextPage = () => {
  return (
    <Center>
      <Flex align="start" justify="start" height="100vh" direction="column" width="960px">
        <Flex bg="white" w="100%" padding={5}>
          <Header />
        </Flex>
        <Flex bg="white" w="100%" flexGrow={1} padding={5}>
          <MainBody />
        </Flex>
        <Flex bg="white" w="100%" padding={5}>
          <Footer />
        </Flex>
      </Flex>

    </Center>
  )
}

export default Home
