// @flow

import * as React from 'react';
import { View, Text, Picker } from 'react-native';

import type { Players } from '@lib/types';
import type { Props } from './winner-selector.container';

const playersList = (players: Players): React.Node[] =>
    Object.keys(players).reduce((list, playerId) => {
        const player = players[parseInt(playerId, 10)];

        list[parseInt(playerId, 10)] = <Picker.Item key={player.id} label={player.name} value={player.id} />;

        return list;
    }, []);

const WinnerSelector = ({ players, winner, setWinner }: Props) =>
    <Picker
        selectedValue={winner}
        onValueChange={(itemValue: string) => setWinner(parseInt(itemValue, 10))}
    >
        <Picker.Item label="Who won?" value="" />
        {
            playersList(players)
        }
    </Picker>;

export default WinnerSelector;
