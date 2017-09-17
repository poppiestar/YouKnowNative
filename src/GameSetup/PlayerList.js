// @flow

import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import type { Players } from '../types';

export type Props = {
  players: Players,
  removePlayer: (id: number) => void
};

const renderPlayer = (player, removePlayer) =>
    <View key={player.id}>
        <Text>{player.name}</Text>
        <TouchableHighlight
            onPress={() => removePlayer(player.id)}>
            <Text>Remove</Text>
        </TouchableHighlight>
    </View>;

const PlayerList = ({ players, removePlayer }: Props) =>
    <View>
        <Text>Players: {Object.keys(players).length}</Text>
        {
            Object.keys(players).reduce((list, playerId) => {
                const player = players[playerId];

                list[playerId] = renderPlayer(player, removePlayer);

                return list;
            }, [])
        }
    </View>;

export default PlayerList;
