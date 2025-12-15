import { Game } from "@/hooks/useGames";
import { Card, Image, Button, Heading } from "@chakra-ui/react";

interface GameCardProps {
    game: Game
}

function GameCard({game}: GameCardProps) {


    return (
        
        <Card.Root borderRadius={10}>
            <Image src={game.background_image} alt={game.name} />
            <Card.Body>
                <Heading>{game.name}</Heading>
            </Card.Body>
            <Card.Footer>
                <Button>Play</Button>
            </Card.Footer>
        </Card.Root>
    )
}

export default GameCard;
