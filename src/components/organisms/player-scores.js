// @flow

import React from 'react';
import { View } from 'react-native';
import { H1, Text, List, ListItem } from 'native-base';

import type { Player, Players, Scores } from '@lib/types';

import { reduceScores } from '@lib/helpers';

type PlayerScorePropTypes = {
    players: Players,
    scores: Scores
};

const playersList = (players: Players, scores: Scores): any[] =>
    Object.keys(players).reduce((list, playerId) => {
        const player = players[parseInt(playerId, 10)];

        list[parseInt(playerId, 10)] = (
            <ListItem key={player.id} style={{ flex: 1 }}>
                <Text style={{ flex: 2 }}>{player.name}</Text>
                <Text style={{ flex: 1, justifyContent: 'flex-end' }}>{reduceScores(scores[player.id])}</Text>
            </ListItem>

        );

        return list;
    }, [])

const PlayerScores = ({ players, scores }: PlayerScorePropTypes) =>
    <View>
        <H1>Player Scores</H1>
        <List>
            {
                playersList(players, scores)
            }
        </List>
    </View>;

export default PlayerScores;
