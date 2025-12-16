import { Game } from "@/hooks/useGames";
import { Card, Image, Heading, Text } from "@chakra-ui/react";

interface GameCardProps {
    game: Game
}

function GameCard({game}: GameCardProps) {


    return (
        
        <Card.Root borderRadius={10} overflow="hidden" h="400px">
            <Image src={game.background_image} alt={game.name} h="200px" objectFit="cover"/>
            <Card.Body>
                <Heading size="2xl">{game.name}</Heading>
            </Card.Body>
            <Card.Footer>
                <Text>{game.platforms.map(({name}) => name).join(', ')}</Text>
            </Card.Footer>
        </Card.Root>
    )
}

export default GameCard;
