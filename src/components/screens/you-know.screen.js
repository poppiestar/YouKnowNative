// @flow

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Content } from 'native-base';

import type { Props } from '../../containers/you-know.container';

import SplashContainer from '../../containers/splash.container';
import GameSetupContainer from '../../containers/game-setup.container';
import GameRoundContainer from '../../containers/game-round.container';
import EnterScoreContainer from '../../containers/enter-score.container';
import WinnerContainer from '../../containers/winner.container';

import Stage from '../../redux/constants/stages';

const showGame = (stage) => {
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
