// @flow

import React from 'react';

import type { Scores, Players } from './types';

import PlayerScores from './GameRound/PlayerScores';
import VisibleWinnerSelector from './GameRound/VisibleWinnerSelector';

export type Props = {
  players: Players,
  scores: Scores,
  roundOver: () => void
};

const GameRound = ({ players, scores, roundOver }: Props) =>
    <div>
        <PlayerScores players={players} scores={scores} />
        <VisibleWinnerSelector />
        <button onClick={roundOver}>Enter Score</button>
    </div>;

export default GameRound;
