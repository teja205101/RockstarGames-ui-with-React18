import { Grid, GridItem } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenereList from './components/GenereList'
import { useState } from 'react'
import { Genre } from './hooks/useGeners'
import { Button } from '@chakra-ui/react'

export interface GameQuery {
  genre: Genre | null
  platform: string | null
  sort: string | null
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
        <GridItem area="nav" display="flex" justifyContent="space-between">
          <NavBar />{' '}
          <Button
            onClick={() => {
              setGameQuery({ ...gameQuery, genre: null })
            }}
          >
            Clear Filters
          </Button>
        </GridItem>
        <GridItem area="aside" hideBelow="lg">
          <GenereList
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
          />
        </GridItem>
      </Grid>
    </>
  )
}

export default App
