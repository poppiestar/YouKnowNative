// @flow

import React from 'react';

import type { Player, Players, Scores } from '../types';

import { reduceScores } from '../helpers';

type PlayerScorePropTypes = {
  players: Players,
  scores: Scores
};

const playersList = (players: { [id: number]: Player }, scores: { [id: number]: Array<number> }): Array<any> =>
    Object.keys(players).reduce((list, playerId: number) => {
        const player = players[playerId];

        list[playerId] = <li key={player.id}>
            <p>{player.name}: {reduceScores(scores[player.id])}</p>
        </li>;

        return list;
    }, []);

const PlayerScores = ({ players, scores }: PlayerScorePropTypes) =>
    <div>
        <h2>Player Scores</h2>
        <ul>
            { playersList(players, scores) }
        </ul>
    </div>;

export default PlayerScores;
