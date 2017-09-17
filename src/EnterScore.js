// @flow

import React from 'react';
import { Container, Header, Body, Title, Content, Text, Button } from 'native-base';

import type { Players, Scores } from './types';

import { reduceScores } from './helpers';

import ScoreInput from './EnterScore/ScoreInput';

export type Props = {
    players: Players,
    winner: number,
    scores: Scores,
    nextRound: () => void,
    addScore: (value: number) => void,
    subtractScore: (value: number) => void
};

type Card = {
  value: number,
  name: string
};

const CARDS = [
    { value: 1, name: "1" },
    { value: 2, name: "2" },
    { value: 3, name: "3" },
    { value: 4, name: "4" },
    { value: 5, name: "5" },
    { value: 6, name: "6" },
    { value: 7, name: "7" },
    { value: 8, name: "8" },
    { value: 9, name: "9" },
    { value: 20, name: "Action" },
    { value: 50, name: "Wild" }
];

const EnterScore = ({ winner, players, scores, nextRound, addScore, subtractScore }: Props) => {
    const roundWinner = players[winner];
    
    return (
        <Container>
            <Header>
                <Body>
                    <Title>Enter Score</Title>
                </Body>
            </Header>
            <Content padder>
                <Text>Winner: { roundWinner.name }</Text>
                <Button
                    block
                    onPress={nextRound}>
                    <Text>Next Round</Text>
                </Button>
                <Text>Value: { reduceScores(scores[winner]) }</Text>
                {
                    CARDS.map((card: Card, i: number) =>
                        <ScoreInput key={i} increment={addScore} decrement={subtractScore} value={card.value} name={card.name} />
                    )
                }
            </Content>
        </Container>
    );
};

export default EnterScore;
