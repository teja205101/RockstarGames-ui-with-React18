import { Badge } from "@chakra-ui/react";

interface SuggestionScoreProps {
    score: number;
}
function SuggestionScore({score}:SuggestionScoreProps) {

    const color = score > 400 ? 'green' : score > 200 ? 'yellow' : 'red';
    return (
        <Badge fontSize="sm" paddingX={2} paddingY={1} colorScheme={color}>
               SuggestionScore : {score}
        </Badge>
    )
}

export default SuggestionScore;