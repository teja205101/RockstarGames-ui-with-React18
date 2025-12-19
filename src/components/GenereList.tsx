import { Button, HStack, Spinner } from "@chakra-ui/react";
import useGeners from "../hooks/useGeners";
import { Genre } from "../hooks/useGeners";

interface GenereListProps {
    onSelectGenre : (genre : Genre) => void;
    selectedGenre : Genre | null;
}

function GenereList({onSelectGenre, selectedGenre}: GenereListProps) {
    const {genres, error, loading} = useGeners();

    if (loading) return <Spinner />;
    
    if (error) return null;
    
    return (
        <>
        {genres.map((genre) => (
            <HStack key={genre.id}><Button onClick={()=>{onSelectGenre(genre)}} color={selectedGenre?.id === genre.id ? "blue.500" : "gray.500"} width="100%">{genre.name}</Button></HStack>
        ))}
        </>
    )
}

export default GenereList;