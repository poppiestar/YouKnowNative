// @flow

import React from 'react';

import type { Players, Scores } from './types';

import { reduceScores } from './helpers';

import ScoreInput from './EnterScore/ScoreInput';

export type Props = {
    players: Players,
    winner: number,
    scores: Scores,
    nextRound: () => void,
    addScore: (value: number) => void,
    subtractScore: (value: number) => void
};

type Card = {
  value: number,
  name: string
};

const CARDS = [
    { value: 1, name: "1" },
    { value: 2, name: "2" },
    { value: 3, name: "3" },
    { value: 4, name: "4" },
    { value: 5, name: "5" },
    { value: 6, name: "6" },
    { value: 7, name: "7" },
    { value: 8, name: "8" },
    { value: 9, name: "9" },
    { value: 20, name: "Action" },
    { value: 50, name: "Wild" }
];

const EnterScore = ({ winner, players, scores, nextRound, addScore, subtractScore }: Props) => {
    const roundWinner = players[winner];
    
    return (
        <div>
            <h1>Enter Score</h1>
            <p>Winner: { roundWinner.name }</p>
            <p>Value: { reduceScores(scores[winner]) }</p>
            {
                CARDS.map((card: Card, i: number) =>
                    <ScoreInput key={i} increment={addScore} decrement={subtractScore} value={card.value} name={card.name} />
                )
            }
            <button onClick={nextRound}>Next Round</button>
        </div>
    );
};

export default EnterScore;
