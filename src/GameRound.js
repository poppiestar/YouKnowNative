// @flow

import React from 'react';
import { Container, Header, Title, Body, Content, Button, Text } from 'native-base';

import type { Scores, Players } from './types';

import PlayerScores from './GameRound/PlayerScores';
import VisibleWinnerSelector from './GameRound/VisibleWinnerSelector';

export type Props = {
  players: Players,
  scores: Scores,
  roundOver: () => void
};

const GameRound = ({ players, scores, roundOver }: Props) =>
    <Container>
        <Header>
            <Body>
                <Title>Game Round</Title>
            </Body>
        </Header>
        <Content padder>
            <PlayerScores players={players} scores={scores} />
            <VisibleWinnerSelector />
            <Button
                block
                onPress={roundOver}>
                <Text>Enter Score</Text>
            </Button>
        </Content>
    </Container>;

export default GameRound;
