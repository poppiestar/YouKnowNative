// @flow

import type { Action, RoundState } from '@lib/types';

const initialState: RoundState = {
    score: 0,
    winner: -1
};

const game = (state: RoundState = initialState, action: Action): RoundState => {
    switch (action.type) {
        case 'ROUND:SET_WINNER':
            return Object.assign({}, initialState, { winner: action.id });

        case 'ROUND:ADD_SCORE':
            return Object.assign({}, state, { score: state.score + action.value });

        case 'ROUND:SUBTRACT_SCORE':
            return Object.assign({}, state, { score: state.score - action.value });
        
        case 'GAME:RESTART':
        case 'GAME:RESET':
            return initialState;
            
        default:
            return state;
    }
};

export const getWinner = (state: RoundState): number => state.winner;
export const getRoundScore = (state: RoundState): number => state.score;

export default game;
