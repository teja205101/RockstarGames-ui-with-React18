import { Input } from '@chakra-ui/react'

function SearchInput() {
  return (
    <div>
      <Input
        borderRadius="20px"
        placeholder="Search Games..."
        variant="outline"
        onChange={(e) => console.log(e.target.value)}
      />
    </div>
  )
}

export default SearchInput
