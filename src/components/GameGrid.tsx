import { SimpleGrid, Text, HStack } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'
import PlatformSelector from './PlatformSelector'
import { GameQuery } from '../App'
import SortSelector from './SortSelector'

interface GameGridProps {
  gameQuery: GameQuery | undefined
  onSelectPlatform: (platform: string) => void
  onSelectSort: (sort: string) => void
  search: string | undefined
}
function GameGrid({
  gameQuery,
  onSelectPlatform,
  onSelectSort,
}: GameGridProps) {
  const { games, error, loading } = useGames()
  const skeletons = [1, 2, 3, 4, 5, 6]

  const filteredGames = games.filter((game) => {
    const genreMatch = gameQuery?.genre
      ? game?.genres?.some((genre) => genre.name === gameQuery?.genre?.name)
      : true

    const platformMatch = gameQuery?.platform
      ? game?.platforms?.some(
          (platform) => platform.name === gameQuery.platform,
        )
      : true

    return genreMatch && platformMatch
  })

  const sortedGames = [...filteredGames].sort((a, b) => {
    if (gameQuery?.sort === 'name') {
      return a.name.localeCompare(b.name)
    } else if (gameQuery?.sort === 'suggestions_count') {
      return b.suggestions_count - a.suggestions_count
    } else if (gameQuery?.sort === 'rating') {
      return b?.rating - a?.rating
    } else if (gameQuery?.sort === 'released') {
      return new Date(b.released).getTime() - new Date(a.released).getTime()
    }
    return 0
  })

  const finalGames = sortedGames.filter((game) => {
    if (!gameQuery?.search) return game
    return game.name.toLowerCase().includes(gameQuery?.search?.toLowerCase())
  })

  return (
    <>
      {error && <Text>{error}</Text>}
      <HStack gap={2} align="center" padding={5}>
        <PlatformSelector
          setPlatform={(platform) => onSelectPlatform(platform)}
        />
        <SortSelector onSelectSort={(sort: string) => onSelectSort(sort)} />
      </HStack>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        gap={10}
        padding={10}
      >
        {loading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {finalGames?.map((game, id) => (
          <GameCard game={game} key={id} />
        ))}
      </SimpleGrid>
    </>
  )
}

export default GameGrid
