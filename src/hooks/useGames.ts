import { useEffect, useState } from "react";
import apiClient from "../services/api-clients";
import { CanceledError } from "axios";

export interface Platform {
    id: string;
    name: string;
}

export interface Game {
    id: string;
    name: string;
    released: string;
    background_image: string;
    suggestions_count: number;
    platforms: Platform[];
}

interface FetchGamesResponse {
    data: Game[];
}

function useGames() {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');
    
    useEffect(()=>{
            const controller = new AbortController();
            apiClient.get<FetchGamesResponse>('/games/infinite-scroll', {
                signal: controller.signal
            })
                .then((response)=>{
                    setGames(response.data.data);
                }).catch((error)=>{
                    if( error instanceof CanceledError) return;
                    setError(error.message);
                })

                return ()=> controller.abort();
        }, []);

        return {games, error};
}   

export default useGames;