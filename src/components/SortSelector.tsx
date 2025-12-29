import { Menu, Button } from '@chakra-ui/react'

interface SortSelectorProps {
  onSelectSort: (sort: string) => void
}
function SortSelector({ onSelectSort }: SortSelectorProps) {
  const sortOptions = [
    { value: 'name', label: 'Name' },
    { value: 'suggestions_count', label: 'popularity' },
    { value: 'rating', label: 'Rating' },
    { value: 'released', label: 'Released' },
  ]
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          Sort
        </Button>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          {sortOptions.map((option) => (
            <Menu.Item
              key={option.value}
              value={option.value}
              onClick={() => onSelectSort(option.value)}
            >
              {option.label}
            </Menu.Item>
          ))}
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  )
}

export default SortSelector
