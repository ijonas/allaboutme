import { Flex, Text, Button, Input, Heading, Wrap, WrapItem, Box } from '@chakra-ui/react'
import Wallet from './Wallet'


const FinancialTab = ({ }: any) => {
  return (
    <Flex direction="column" paddingTop={5} paddingBottom={5}>

      <Heading>Wallets</Heading>
      <Text>Below is a list of all wallets associated with your profile.</Text>

      <Wrap spacing={5} marginTop={5}>
        <Wallet type="Bitcoin" name="Ledger Nano S" address="0x08f98ds89dd8s9d" balance="1 BTC ($19,1984.33)" />
        <Wallet type="Ethereum" name="Metamask" address="0x089fdf89fd98f8f" balance="5.2 ETH ($39399)" />
      </Wrap>

      <Heading marginTop={10}>Loans</Heading>
      <Text>Below is a list of all loans you've taken out.</Text>

      <Wrap spacing={5} marginTop={5}>
        <Wallet type="Aave" name="" address="Liquidated" balance="0.5 WBTC ($9,1984.33)" />
        <Wallet type="Compound" name="" address="Unhealthy" balance="10 ETH ($17399)" />
      </Wrap>


    </Flex>

  )
}

export default FinancialTab