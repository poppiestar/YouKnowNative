// @flow

import Stage from '@lib/constants/stages';

import type { Action, GameState } from '@lib/types';

const initialState: GameState = {
    stage: Stage["SPLASH"]
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
    stage: Stage["GAME_ROUND"]
});

const resetGame = (): GameState => ({
    stage: Stage["GAME_SETUP"]
});

export default game;

export const getStage = (state: GameState): number => state.stage;
