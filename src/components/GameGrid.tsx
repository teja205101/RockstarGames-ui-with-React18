import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import { Genre } from '../hooks/useGeners';
import PlatformSelector from './PlatformSelector';

interface GameGridProps {
    selectedGenere : Genre | null;
}
function GameGrid({selectedGenere}: GameGridProps) {
    const {games, error, loading} = useGames();
    const skeletons = [1,2,3,4,5,6];

    const filteredGames = games.filter((game)=>{
        if(selectedGenere === null) return game;
        return game?.genres?.filter((genre)=> genre.name === selectedGenere?.name).length > 0;
    })


    return (
        <>
        {error && <Text>{error}</Text>}
        <SimpleGrid columns={{sm:1,md: 2, lg: 3, xl: 5}} gap={10} padding={10}>
            <PlatformSelector/>
            {loading && skeletons.map((skeleton)=>(
                <GameCardSkeleton key={skeleton}/>
            ))}
            {filteredGames.map(game => (
                <GameCard game={game} key={game.id}/>
            ))}
        </SimpleGrid>
        </>
    )
}

export default GameGrid;