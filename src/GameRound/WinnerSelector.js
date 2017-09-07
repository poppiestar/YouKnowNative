// @flow

import React from 'react';

import type { Players, Player } from '../types';

export type Props = {
  players: Players,
  setWinner: (value: number) => void
};

const playersList = (players: { [id: number]: Player }): Array<any> =>
    Object.keys(players).reduce((list, playerId: number) => {
        const player = players[playerId];

        list[playerId] = <option key={player.id} value={player.id}>{player.name}</option>;

        return list;
    }, []);

const WinnerSelector = ({ players, setWinner }: Props) =>
    <select onChange={(e: Event & { currentTarget: HTMLSelectElement }) => setWinner(parseInt(e.currentTarget.value, 10))}>
        <option value="">Who won?</option>
        { playersList(players) }
    </select>;

export default WinnerSelector;
