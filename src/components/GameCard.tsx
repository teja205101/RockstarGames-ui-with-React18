import { Game } from "@/hooks/useGames";
import { Card, Image, Heading, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

interface GameCardProps {
    game: Game
}

function GameCard({game}: GameCardProps) {


    return (
        
        <Card.Root borderRadius={10} overflow="hidden" h="400px">
            <Image src={game.background_image} alt={game.name} h="200px" objectFit="cover"/>
            <Card.Body>
                <Heading size="xl">{game.name}</Heading>
            </Card.Body>
            <Card.Footer>
                <PlatformIconList platforms={game.platforms} />
            </Card.Footer>
        </Card.Root>
    )
}

export default GameCard;
