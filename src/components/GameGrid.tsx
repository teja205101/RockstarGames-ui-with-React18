import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';

function GameGrid() {
    const {games, error} = useGames();
    

    return (
        <>
        {error && <Text>{error}</Text>}
        <SimpleGrid columns={3} >
            {games.map(game => (
                <GameCard game={game} key={game.id} />
            ))}
        </SimpleGrid>
        </>
    )
}

export default GameGrid;