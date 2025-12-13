// import { Button, ButtonGroup } from "@chakra-ui/react"
import { Grid, GridItem } from '@chakra-ui/react'
import NavBar from './components/NavBar'

function App() {
  return (
    <>
      {/* <ButtonGroup attached variant="solid">
         <Button colorPalette="blue">Button 1</Button>
         <Button colorPalette="red">Button 2</Button>
         <Button colorPalette="green">Button 3</Button>
     </ButtonGroup> */}

      <Grid
        templateAreas={{
          base: `"nav main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav" bg="white">
          <NavBar />
        </GridItem>
        <GridItem area="aside" bg="green" hideBelow="lg">
          Aside
        </GridItem>
        <GridItem area="main" bg="gold">
          Main
        </GridItem>
      </Grid>
    </>
  )
}

export default App
