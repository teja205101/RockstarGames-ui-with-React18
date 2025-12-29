import { Input } from '@chakra-ui/react'
import { InputGroup } from './ui/input-group'
import { BsSearch } from 'react-icons/bs'

function SearchInput() {
  const Icon = BsSearch as any
  return (
    <InputGroup width="100%" startElement={<Icon />}>
      <Input
        borderRadius="20px"
        placeholder="Search Games..."
        variant="subtle"
        onChange={(e) => console.log(e.target.value)}
      />
    </InputGroup>
  )
}

export default SearchInput
