// @flow

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Content } from 'native-base';

import VisibleSplash from './VisibleSplash';
import VisibleGameSetup from './VisibleGameSetup';
import VisibleGameRound from './VisibleGameRound';
import VisibleEnterScore from './VisibleEnterScore';
import VisibleWinner from './VisibleWinner';

import ErrorMessage from './ErrorMessage';

import Stage from './constants/stages';

type Game = {
  stage: number
};

export type Props = {
  game: Game
};

const showGame = (stage) => {
    switch (stage) {
        case Stage["SPLASH"]:
            return <VisibleSplash />;
        
        case Stage["GAME_SETUP"]:
            return <VisibleGameSetup />;
        
        case Stage["GAME_ROUND"]:
            return <VisibleGameRound />;
        
        case Stage["ENTER_SCORE"]:
            return <VisibleEnterScore />;
        
        case Stage["WINNER"]:
            return <VisibleWinner />;

        default:
            return <VisibleSplash />;
    };
}

const YouKnow = ({ stage, error }: Props) =>
    <Container>
        { !!error && <ErrorMessage>{error}</ErrorMessage> }
        {
            showGame(stage)
        }
    </Container>;

export default YouKnow;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 100
    }
});
