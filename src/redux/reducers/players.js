// @flow

import { combineReducers } from 'redux';
import omit from 'lodash.omit';
import type { AllPlayerIdsState, PlayersByIdState, Action, PlayersState, Players } from '../../types';

const initialState = [];

// TODO add missing Action, but it throws an error now for some reason!

const allIds = (state: AllPlayerIdsState = initialState, action): AllPlayerIdsState => {
    switch (action.type) {
        case 'PLAYERS:ADD':
            return [...state, action.id];

        case 'PLAYERS:REMOVE':
            return state.filter((item) => item !== action.id);

        case 'GAME:RESET':
            return [];

        default:
            return state;
    }
};

const byId = (state: PlayersByIdState = {}, action: Action): PlayersByIdState => {
    switch (action.type) {
        case 'GAME:RESET':
            return {};

        case 'PLAYERS:ADD':
            return {
                ...state,
                [action.id]: {
                    id: action.id,
                    name: action.name
                }
            };

        case 'PLAYERS:REMOVE':
            return omit(state, action.id);

        default:
            return state;
    }
};

export const getPlayers = (state: PlayersState): PlayersByIdState => state.byId;

const players = combineReducers({
    allIds,
    byId
});

export default players;
