import { Block } from "baseui/block";
import { Heading, HeadingLevel } from 'baseui/heading';
import { Button } from "baseui/button";
import { createNewSession } from "../services/firebase";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export const Home = () => {

    const [isGameLoading, setIsGameLoading] = useState(false);
    const navigate = useNavigate();

    const handleStartNewGame = () => {
        setIsGameLoading(true);

        createNewSession().then((session) => {
            setIsGameLoading(false);
            navigate(`/session/${session.id}`)
        });
    }

    return (
        <Block>
            <HeadingLevel>
                <Heading>
                    Tic Tac Toe
                </Heading>
            </HeadingLevel>
            <Button isLoading={isGameLoading} onClick={handleStartNewGame}>Start New Game</Button>
        </Block>
    )
}