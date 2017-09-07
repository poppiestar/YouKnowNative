// @flow

import React from 'react';
import { View, Text } from 'react-native';

import type { Player, Players, Scores } from '../types';

import { reduceScores } from '../helpers';

type PlayerScorePropTypes = {
  players: Players,
  scores: Scores
};

const playersList = (players: { [id: number]: Player }, scores: { [id: number]: Array<number> }): Array<any> =>
    Object.keys(players).reduce((list, playerId: number) => {
        const player = players[playerId];

        list[playerId] = <View key={player.id}>
            <Text>{player.name}: {reduceScores(scores[player.id])}</Text>
        </View>;

        return list;
    }, []);

const PlayerScores = ({ players, scores }: PlayerScorePropTypes) =>
    <View>
        <Text>Player Scores</Text>
        <View>
            { playersList(players, scores) }
        </View>
    </View>;

export default PlayerScores;
