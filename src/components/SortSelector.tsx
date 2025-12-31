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
          Sort
        </Button>
      </MenuTrigger>
      <MenuPositioner>
        <MenuContent>
          {sortOptions.map((option) => (
            <MenuItem
              key={option.value}
              value={option.value}
              onClick={() => onSelectSort(option.value)}
            >
              <MenuItemText>{option.label}</MenuItemText>
            </MenuItem>
          ))}
        </MenuContent>
      </MenuPositioner>
    </Menu.Root>
  )
}

export default SortSelector
