// @flow

import React from 'react';
import { Container, Header, Title, Body, Content, Button, Text } from 'native-base';

import type { Props } from '@containers/game-round.container';

import PlayerScores from '@components/organisms/player-scores';
import WinnerSelectorContainer from '@containers/winner-selector.container';

const GameRoundScreen = ({ players, scores, roundOver }: Props) =>
    <Container>
        <Header>
            <Body>
                <Title>Game Round</Title>
            </Body>
        </Header>
        <Content padder>
            <PlayerScores players={players} scores={scores} />
            <WinnerSelectorContainer />
            <Button
                block
                onPress={roundOver}>
                <Text>Enter Score</Text>
            </Button>
        </Content>
    </Container>;

export default GameRoundScreen;
