// @flow

import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import type { Player } from './types';

import { reduceScores } from './helpers';

export type Props = {
  players: Array<Player>,
  scores: { [id: number]: Array<number> },
  winner: number,
  restartGame: () => void,
  resetGame: () => void
};

const Winner = ({ winner, players, scores, restartGame, resetGame }: Props) => {
    const { name } = players[winner];

    return (
        <View>
            <Text>Winner!</Text>
            <Text>Congratulations!</Text>
            <Text>{name}</Text>
            <Text>has won the game with { reduceScores(scores[winner]) } points!</Text>
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

export default Winner;
