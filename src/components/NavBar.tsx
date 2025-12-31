import { Button, HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'
import { GameQuery } from '../App'

interface NavBarProps {
  gameQuery: GameQuery
  setGameQuery: (gameQuery: GameQuery) => void
}

function NavBar({ setGameQuery, gameQuery }: NavBarProps) {
  return (
    <HStack display={'flex'}>
      <Image src={logo} alt="logo" boxSize={'60px'} />
      <Text fontSize={'2xl'} fontWeight={'bold'}>
        GameHub
      </Text>
      <SearchInput
        setSearch={(search) => setGameQuery({ ...gameQuery, search })}
      />
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
