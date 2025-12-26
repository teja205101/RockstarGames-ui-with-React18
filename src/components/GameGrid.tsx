import { SimpleGrid, Text, HStack } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'
import PlatformSelector from './PlatformSelector'
import { GameQuery } from '../App'
import SortSelector from './SortSelector'

interface GameGridProps {
  gameQuery: GameQuery
  onSelectPlatform: (platform: string) => void
}
function GameGrid({ gameQuery, onSelectPlatform }: GameGridProps) {
  const { games, error, loading } = useGames()
  const skeletons = [1, 2, 3, 4, 5, 6]

  const filteredGames = games.filter((game) => {
    const genreMatch = gameQuery.genre
      ? game?.genres?.some((genre) => genre.name === gameQuery?.genre?.name)
      : true

    const platformMatch = gameQuery.platform
      ? game?.platforms?.some(
          (platform) => platform.name === gameQuery.platform,
        )
      : true

    // const sortMatch = gameQuery.sort ? game

    return genreMatch && platformMatch
  })

  return (
    <>
      {error && <Text>{error}</Text>}
      <HStack gap={2} align="center" padding={5}>
        <PlatformSelector
          setPlatform={(platform) => onSelectPlatform(platform)}
        />
        <SortSelector />
      </HStack>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        gap={10}
        padding={10}
      >
        {loading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {filteredGames.map((game) => (
          <GameCard game={game} key={game.id} />
        ))}
      </SimpleGrid>
    </>
  )
}

export default GameGrid
