// @flow

import Stage from '../constants/stages';

import type { Action, GameState } from '../types';

const initialState = {
    stage: Stage.GAME_SETUP
};

const game = (state: GameState = initialState, action: Action): GameState => {
    switch (action.type) {
        case 'GAME:SET_STAGE':
            return Object.assign({}, state, { stage: action.stage });

        case 'GAME:RESTART':
            return restartGame();

        case 'GAME:RESET':
            return resetGame();

        default:
            return state;
    }
};

const restartGame = (): GameState => ({
    stage: Stage.GAME_ROUND
});

const resetGame = (): GameState => ({
    stage: Stage.GAME_SETUP
});

export default game;

export const getGame = (state: GameState) => state;
