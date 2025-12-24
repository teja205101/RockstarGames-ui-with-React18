import { Grid, GridItem } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenereList from './components/GenereList'
import { useState } from 'react'
import { Genre } from './hooks/useGeners'
import { Button } from '@chakra-ui/react'

function App() {
  const [selectedGenere, setSelctedGenere] = useState<Genre | null>(null)

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
              setSelctedGenere(null)
            }}
          >
            Clear Filters
          </Button>
        </GridItem>
        <GridItem area="aside" hideBelow="lg">
          <GenereList
            selectedGenre={selectedGenere}
            onSelectGenre={(genre) => setSelctedGenere(genre)}
          />
        </GridItem>
        <GridItem area="main">
          <GameGrid selectedGenere={selectedGenere} />
        </GridItem>
      </Grid>
    </>
  )
}

export default App
