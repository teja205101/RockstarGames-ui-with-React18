import { Input } from '@chakra-ui/react'
import { InputGroup } from './ui/input-group'
import { BsSearch } from 'react-icons/bs'

interface SearchInputProps {
  setSearch: (search: string) => void
}
function SearchInput({ setSearch }: SearchInputProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Icon = BsSearch as any
  return (
    <InputGroup width="100%" startElement={<Icon />}>
      <Input
        borderRadius="20px"
        placeholder="Search Games..."
        variant="subtle"
        onChange={(e) => setSearch(e.target.value)}
      />
    </InputGroup>
  )
}

export default SearchInput
