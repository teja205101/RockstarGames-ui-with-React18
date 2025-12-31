import { HStack } from '@chakra-ui/react'
import { useColorMode } from './ui/color-mode'
import { Switch } from './ui/switch'

function ColorModeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode()
  return (
    <HStack>
      {/* <Button variant="outline" onClick={toggleColorMode}>
         Toggle Mode
         </Button> */}
      <Switch
        checked={colorMode === 'dark'}
        onCheckedChange={toggleColorMode}
      />
    </HStack>
  )
}

export default ColorModeSwitch
