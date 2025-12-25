import { SimpleGrid, Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'
import PlatformSelector from './PlatformSelector'
import { GameQuery } from '../App'

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

    return genreMatch && platformMatch
  })

  return (
    <>
      {error && <Text>{error}</Text>}
      <PlatformSelector
        setPlatform={(platform) => onSelectPlatform(platform)}
      />
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
