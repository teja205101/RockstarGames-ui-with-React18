import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'

function NavBar() {
  return (
    <HStack>
      <Image src={logo} alt="logo" boxSize={'60px'} />
      <Text fontSize={'2xl'} fontWeight={'bold'}>
        GameHub
      </Text>
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar
