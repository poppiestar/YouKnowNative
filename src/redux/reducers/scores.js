// @flow

import score from './score';
import omit from 'lodash.omit';

import type { Action, PlayerScoresState } from '@lib/types';

const initialState = {};

const scores = (state: PlayerScoresState = initialState, action: Action) => {
    switch (action.type) {
        case 'PLAYERS:ADD':
        case 'PLAYERS:ADD_PLAYER_SCORE':
            return {
                ...state,
                [action.id]: score(state[action.id], action)
            };

        case 'PLAYERS:REMOVE':
            return omit(state, action.id);

        case 'GAME:RESTART':
            return Object.keys(state).reduce((newState: PlayerScoresState, id: string) => {
                newState[parseInt(id, 10)] = score(undefined, action);
                return newState;
            }, {});
            
        case 'GAME:RESET':
            return {};

        default:
            return state;
    }
};

export default scores;

export const getScores = (state: PlayerScoresState): PlayerScoresState => state;
