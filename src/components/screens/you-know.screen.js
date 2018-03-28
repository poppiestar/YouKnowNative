// @flow

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Content } from 'native-base';

import type { Props } from '@components/screens/you-know.container';

import SplashContainer from '@components/screens/splash.container';
import GameSetupContainer from '@components/screens/game-setup.container';
import GameRoundContainer from '@components/screens/game-round.container';
import EnterScoreContainer from '@components/screens/enter-score.container';
import WinnerContainer from '@components/screens/winner.container';

import Stage from '@lib/constants/stages';

const showGame = (stage: number) => {
    switch (stage) {
        case Stage["SPLASH"]:
            return <SplashContainer />;

        case Stage["GAME_SETUP"]:
            return <GameSetupContainer />;

        case Stage["GAME_ROUND"]:
            return <GameRoundContainer />;

        case Stage["ENTER_SCORE"]:
            return <EnterScoreContainer />;

        case Stage["WINNER"]:
            return <WinnerContainer />;

        default:
            return <SplashContainer />;
    };
}

const YouKnowScreen = ({ stage }: Props) =>
    <Container>
        {
            showGame(stage)
        }
    </Container>;

export default YouKnowScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 100
    }
});
