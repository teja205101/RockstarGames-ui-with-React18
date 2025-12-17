// import { Button, ButtonGroup } from "@chakra-ui/react"
import { Grid, GridItem, Box } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenereList from './components/GenereList'
// import { Show } from '@chakra-ui/react'

function App() {
  return (
    <>

    <Grid templateAreas={{
      base: `"nav aside main"`, 
      lg: `"nav nav" "aside main"`
      }}>
      {/* <GridItem area="nav" bg="coral">Nav</GridItem> */}
      <GridItem area="nav"><NavBar /></GridItem>
      <GridItem area="aside" hideBelow="lg"><GenereList /></GridItem> 
      <GridItem area="main" ><GameGrid /></GridItem>
    </Grid>
    </>
  )
}

export default App
