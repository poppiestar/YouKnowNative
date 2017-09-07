// @flow

import React from 'react';

import VisibleSplash from './VisibleSplash';
import VisibleGameSetup from './VisibleGameSetup';
import VisibleGameRound from './VisibleGameRound';
import VisibleEnterScore from './VisibleEnterScore';
import VisibleWinner from './VisibleWinner';

import Stage from './constants/stages';

type Game = {
  stage: number
};

export type Props = {
  game: Game
};

const YouKnow = ({ game }: Props) => {
    switch (game.stage) {
        case Stage.SPLASH:
            return <VisibleSplash />;
        
        case Stage.GAME_SETUP:
            return <VisibleGameSetup />;
        
        case Stage.GAME_ROUND:
            return <VisibleGameRound />;
        
        case Stage.ENTER_SCORE:
            return <VisibleEnterScore />;
        
        case Stage.WINNER:
            return <VisibleWinner />;

        default:
            return <VisibleSplash />;
    }
};

export default YouKnow;
