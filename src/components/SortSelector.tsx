import { Menu, Button } from '@chakra-ui/react'

function SortSelector() {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          Sort
        </Button>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          <Menu.Item>Sort by Date</Menu.Item>
          <Menu.Item>Sort by Popularity</Menu.Item>
          <Menu.Item>Sort by Rating</Menu.Item>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  )
}

export default SortSelector
