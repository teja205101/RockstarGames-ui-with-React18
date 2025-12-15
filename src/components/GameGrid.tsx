import React, { useEffect, useState } from 'react';
import apiClient from '../services/api-clients';
import { Text } from '@chakra-ui/react';

interface Game {
    id: string;
    name: string;
    released: string;
    background_image: string;
}

interface FetchGamesResponse {
    data: Game[];
}

function GameGrid() {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');

    useEffect(()=>{
        apiClient.get<FetchGamesResponse>('/games/infinite-scroll')
            .then((response)=>{
                console.log(response.data.data);
                setGames(response.data.data);
            }).catch((error)=>{
                setError(error.message);
            })
    }, []);

    return (
        <>
        {error && <Text>{error}</Text>}
        <ul>
            {games.map(game => (
                <li key={game.id}>
                    {game.name} {game.released && ` - ${game.released}`}
                </li>
            ))}
        </ul>
        </>
    )
}

export default GameGrid;