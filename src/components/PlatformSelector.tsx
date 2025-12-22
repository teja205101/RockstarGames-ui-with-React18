import { Button, Menu } from "@chakra-ui/react"
import usePlatform from "../hooks/usePlatform";

function PlatformSelector({onPlatformSelect}: {onPlatformSelect: (platformId: string) => void}) {
    const {platforms, error, loading} = usePlatform();
    if (error) return <div>{error}</div>
    if (loading) return <div>Loading...</div>

    return (
      <Menu.Root>
        {/* @ts-expect-error - Chakra UI v3 type definition missing children prop for Menu.Trigger */}
        <Menu.Trigger asChild>
          <Button variant="outline" size="sm">Platform</Button>
        </Menu.Trigger>
        {/* @ts-expect-error - Chakra UI v3 type definition missing children prop for Menu.Trigger */}
        <Menu.Positioner>
          {/* @ts-expect-error - Chakra UI v3 type definition missing children prop for Menu.Trigger */}
          <Menu.Content>
            {platforms.map((platform) => (
              <Menu.Item key={platform} value={platform}>{platform}</Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Menu.Root>
    )
}

export default PlatformSelector;


