import { HStack, Spinner } from "@chakra-ui/react";
import useGeners from "../hooks/useGeners";

function GenereList() {
    const {genres, error, loading} = useGeners();

    if (loading) return <Spinner />;
    
    if (error) return null;
    
    return (
        <>
        {genres.map((genre) => (
            <HStack key={genre.id}>{genre.name}</HStack>
        ))}
        </>
    )
}

export default GenereList;