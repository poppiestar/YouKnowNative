// @flow

import React from 'react';

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
        <div>
            <h1>Winner!</h1>
            <p>Congratulations!</p>
            <p><strong>{name}</strong></p>
            <p>has won the game with { reduceScores(scores[winner]) } points!</p>
            <button onClick={restartGame}>Play Again</button>
            <button onClick={resetGame}>New Players</button>
        </div>
    );
};

export default Winner;
