import { Grid, GridItem } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenres'
// import SearchInput from './components/SearchInput' (removed unused)

export interface GameQuery {
  genre: Genre | null
  platform: string | null
  sort: string | null
  search: string | null
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "aside" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        {/* <GridItem area="nav" bg="coral">Nav</GridItem> */}
        <GridItem area="nav">
          <NavBar gameQuery={gameQuery} setGameQuery={setGameQuery} />
        </GridItem>
        <GridItem area="aside" hideBelow="lg">
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
        <GridItem area="main">
          <GameGrid
            gameQuery={gameQuery}
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
            onSelectSort={(sort: string) =>
              setGameQuery({ ...gameQuery, sort })
            }
          />
        </GridItem>
      </Grid>
    </>
  )
}

export default App
