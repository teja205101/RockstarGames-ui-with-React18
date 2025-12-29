import { Input } from '@chakra-ui/react'

function SearchInput() {
  return (
    <div>
      <Input
        borderRadius="20px"
        size="lg"
        placeholder="Search Games..."
        variant="outline"
      />
    </div>
  )
}

export default SearchInput
