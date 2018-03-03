// @flow

import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import type { Props } from '@containers/winner.container';

import { reduceScores } from '@lib/helpers';

const WinnerScreen = ({ winner, players, scores, restartGame, resetGame }: Props) => {
    const { name } = players[winner];

    return (
        <View>
            <Text>Winner!</Text>
            <Text>Congratulations!</Text>
            <Text>{name}</Text>
            <Text>has won the game with {reduceScores(scores[winner])} points!</Text>
            <TouchableHighlight
                onPress={restartGame}>
                <Text>Play Again</Text>
            </TouchableHighlight>
            <TouchableHighlight
                onPress={resetGame}>
                <Text>New Players</Text>
            </TouchableHighlight>
        </View>
    );
};

export default WinnerScreen;
