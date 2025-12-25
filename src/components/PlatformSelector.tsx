import { Button, Menu } from '@chakra-ui/react'
import usePlatform from '../hooks/usePlatform'

interface platformSelectorProps {
  setPlatform: (platform: string) => void | null
}

function PlatformSelector({ setPlatform }: platformSelectorProps) {
  const { platforms, error, loading } = usePlatform()
  if (error) return <div>{error}</div>
  if (loading) return <div>Loading...</div>

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          Platform
        </Button>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          {platforms.map((platform: any, index: number) => (
            <Menu.Item key={index} onClick={() => setPlatform(platform)}>
              {platform}
            </Menu.Item>
          ))}
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  )
}

export default PlatformSelector
