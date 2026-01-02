import { Button, HStack, Spinner } from '@chakra-ui/react'
import useGenres from '../hooks/useGenres'
import { Genre } from '../hooks/useGenres'

interface GenreListProps {
  onSelectGenre: (genre: Genre) => void
  selectedGenre: Genre | null
  width?: string
}

function GenreList({ onSelectGenre, selectedGenre, width }: GenreListProps) {
  const { genres, error, loading } = useGenres()

  if (loading) return <Spinner size="sm" />

  if (error) return null

  return (
    <>
      {genres.map((genre) => (
        <HStack key={genre.id}>
          <Button
            onClick={() => {
              onSelectGenre(genre)
            }}
            color={selectedGenre?.id === genre.id ? 'blue.500' : 'gray.500'}
            width="100%"
          >
            {genre.name}
          </Button>
        </HStack>
      ))}
    </>
  )
}

export default GenreList
