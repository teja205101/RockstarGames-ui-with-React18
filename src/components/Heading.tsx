import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'

interface HeadingProps {
  gameQuery: GameQuery | undefined
}
function Header({ gameQuery }: HeadingProps) {
  const title =
    `${gameQuery?.genre?.name || ''} ${gameQuery?.platform || ''} ${gameQuery?.sort || ''}` ||
    ''
  return (
    <Heading size="2xl" fontWeight="bold" padding={5}>
      {title.length > 2 ? title : 'All Games'}
    </Heading>
  )
}

export default Header
