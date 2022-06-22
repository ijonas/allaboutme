import { Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Header from '../components/Header'
import MainBody from '../components/MainBody'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <Flex align="start" justify="start" height="100vh" direction="column">
      <Flex bg="gray.200" w="100%" padding={5}>
        <Header />
      </Flex>
      <Flex bg="gray.300" w="100%" flexGrow={1} padding={5}>
        <MainBody />
      </Flex>
      <Flex bg="gray.400" w="100%" padding={5}>
        <Footer />
      </Flex>
    </Flex>
  )
}

export default Home
