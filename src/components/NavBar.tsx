import { Button, HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'
import { GameQuery } from '../App'

interface NavBarProps {
  setGameQuery: (gameQuery: GameQuery) => void
  gameQuery: GameQuery
}

function NavBar({ setGameQuery, gameQuery }: NavBarProps) {
  return (
    <HStack
      // justifyContent={'space-around'}
      // alignItems={'center'}
      display={'flex'}
    >
      <Image src={logo} alt="logo" boxSize={'60px'} />
      <Text fontSize={'2xl'} fontWeight={'bold'}>
        GameHub
      </Text>
      <SearchInput />
      <ColorModeSwitch />
      <Button
        onClick={() => {
          setGameQuery({ ...gameQuery, genre: null })
        }}
      >
        Clear Filters
      </Button>
    </HStack>
  )
}

export default NavBar
