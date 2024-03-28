import { Block } from "baseui/block";
import { Heading, HeadingLevel } from 'baseui/heading';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getSession } from "../services/firebase";

export const Game = () => {
    const { sessionId } = useParams();
    const [session, setSession] = useState<any>({});

    useEffect(() => {
        getSession(sessionId as string).then((session) => {
            setSession(session);
        })
    }, []);

    return (
        <Block>
            <HeadingLevel>
                <Heading>
                    Tic Tac Toe - {sessionId}
                </Heading>
            </HeadingLevel>
            <Block>
                Player Count - {session.player_count}
            </Block>
        </Block>
    )
}