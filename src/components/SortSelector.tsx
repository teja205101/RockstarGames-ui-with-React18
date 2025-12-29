import {
  Menu,
  Button,
  MenuTrigger,
  MenuPositioner,
  MenuContent,
  MenuItem,
} from '@chakra-ui/react'

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
      <MenuTrigger>
        <Button variant="outline" size="sm">
          Sort
        </Button>
      </MenuTrigger>
      <MenuPositioner>
        <MenuContent>
          {sortOptions.map((option) => (
            <MenuItem
              key={option.value}
              onClick={() => onSelectSort(option.value)}
            >
              {option.label}
            </MenuItem>
          ))}
        </MenuContent>
      </MenuPositioner>
    </Menu.Root>
  )
}

export default SortSelector
