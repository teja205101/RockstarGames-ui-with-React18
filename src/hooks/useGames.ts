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

export interface FetchGamesResponse {
    data: Game[];
}

function useGames() {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    
    useEffect(()=>{
            setLoading(true);
            const controller = new AbortController();
            apiClient.get<FetchGamesResponse>('/games/infinite-scroll', {
                signal: controller.signal
            })
                .then((response)=>{
                    setGames(response.data.data);
                    setLoading(false);
                }).catch((error)=>{
                    if( error instanceof CanceledError) return;
                    setError(error.message);
                    setLoading(false);
                })

                return ()=> controller.abort();
        }, []);

        return {games, error, loading};
}   

export default useGames;