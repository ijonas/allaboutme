import { Heading, Spacer, Text, Box, Flex, Button } from '@chakra-ui/react'
import React, { useEffect, useState } from "react";

import { useViewerConnection } from '@self.id/framework'
import { EthereumAuthProvider } from '@3id/connect'
import { shorten } from '../lib/helpers';



function ConnectButton(window: { ethereum: any }) {
  const [connection, connect, disconnect] = useViewerConnection()

  return connection.status === 'connected' ? (
    <Button
      title={connection.selfID.id}
      onClick={() => {
        disconnect()
      }}>
      Disconnect ({shorten(connection.selfID.id)})
    </Button>
  ) : 'ethereum' in window ? (
    <Button
      disabled={connection.status === 'connecting'}
      onClick={async () => {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        })
        await connect(new EthereumAuthProvider(window.ethereum, accounts[0]))
      }}>
      Connect
    </Button>
  ) : (
    <p>
      An injected Ethereum provider such as{' '}
      <a href="https://metamask.io/">MetaMask</a> is needed to authenticate.
    </p>
  )
}


const Header = () => {
  const [ethereum, setEthereum] = useState(undefined);
  useEffect(function onFirstMount() {

    setEthereum(window.ethereum);
  }, []); // empty dependencies array means "run this once on first mount"


  return (
    <Flex width="100%">
      <Heading>All About Me</Heading>
      <Spacer />
      <ConnectButton ethereum={ethereum} />
    </Flex>

  )
}

export default Header