import { Button, Menu } from '@chakra-ui/react'
import usePlatform from '../hooks/usePlatform'

interface platformSelectorProps {
  setPlatform: (platform: string) => void | null
}

function PlatformSelector({ setPlatform }: platformSelectorProps) {
  const { platforms } = usePlatform()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const MenuTrigger = Menu.Trigger as any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const MenuPositioner = Menu.Positioner as any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const MenuContent = Menu.Content as any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const MenuItem = Menu.Item as any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const MenuItemText = Menu.ItemText as any

  return (
    <Menu.Root>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          Platform
        </Button>
      </MenuTrigger>
      <MenuPositioner>
        <MenuContent>
          {platforms.map((platform, index) => (
            <MenuItem
              key={index}
              value={platform}
              onClick={() => setPlatform(platform)}
            >
              <MenuItemText>{platform}</MenuItemText>
            </MenuItem>
          ))}
        </MenuContent>
      </MenuPositioner>
    </Menu.Root>
  )
}

export default PlatformSelector
