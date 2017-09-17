// @flow

import React from 'react';
import { Container, Header, Body, Title, Content, Button, Text } from 'native-base';

import SetGoal from './GameSetup/SetGoal';
import EnterPlayers from './GameSetup/EnterPlayers';

export type Props = {
  startGame: () => void
};

const GameSetup = ({ startGame }: Props) =>
    <Container>
        <Header>
            <Body>
                <Title>Game Setup</Title>
            </Body>
        </Header>
        <Content padder>
            <SetGoal />
            <EnterPlayers />
            <Button
                block
                onPress={startGame}>
                <Text>Start Game</Text>
            </Button>
        </Content>
    </Container>;

export default GameSetup;
