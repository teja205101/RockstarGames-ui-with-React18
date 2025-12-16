import { Game } from "@/hooks/useGames";
import { Card, Image, Heading, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import SuggestionScore from "./SuggestionScore";

interface GameCardProps {
    game: Game
}

function GameCard({game}: GameCardProps) {


    return (
        <Card.Root borderRadius={10} overflow="hidden" h="400px" cursor="pointer" width="fit-content">
            <Image src={game.background_image} alt={game.name} h="200px" objectFit="cover"/>
            <Card.Body>
                <Heading size="xl">{game.name}</Heading>
            </Card.Body>
            <Card.Footer justifyContent="space-between">
                <PlatformIconList platforms={game.platforms} />
                <SuggestionScore score={game.suggestions_count}/>
            </Card.Footer>
        </Card.Root>
    )
}

export default GameCard;
