// @flow

import React from 'react';
import { Container, Header, Body, Title, Content, Button, Text } from 'native-base';

import type { Props } from '@containers/game-setup.container';

import SetGoal from '@components/organisms/set-goal';
import EnterPlayers from '@components/organisms/enter-players';

const GameSetupScreen = ({ startGame }: Props) =>
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

export default GameSetupScreen;
