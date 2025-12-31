import { Button, Menu } from '@chakra-ui/react'
import usePlatform from '../hooks/usePlatform'

interface platformSelectorProps {
  setPlatform: (platform: string) => void | null
}

function PlatformSelector({ setPlatform }: platformSelectorProps) {
  const { platforms } = usePlatform()

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          Platform
        </Button>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          {platforms.map((platform, index) => (
            <Menu.Item
              key={index}
              value={platform}
              onClick={() => setPlatform(platform)}
            >
              <Menu.ItemText>{platform}</Menu.ItemText>
            </Menu.Item>
          ))}
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  )
}

export default PlatformSelector
