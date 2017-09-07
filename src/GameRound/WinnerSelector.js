// @flow

import React from 'react';
import { View, Text, Picker } from 'react-native';

import type { Players, Player } from '../types';

export type Props = {
  players: Players,
  setWinner: (value: number) => void
};

const playersList = (players: { [id: number]: Player }): Array<any> =>
    Object.keys(players).reduce((list, playerId: number) => {
        const player = players[playerId];

        list[playerId] = <Picker.Item key={player.id} label={player.name} value={player.id} />;

        return list;
    }, []);

const WinnerSelector = ({ players, winner, setWinner }: Props) =>
    <Picker
        selectedValue={winner}
        onValueChange={(itemValue) => setWinner(itemValue)}>
        <Picker.Item label="Who won?" value="" />
        { playersList(players) }
    </Picker>;

export default WinnerSelector;
