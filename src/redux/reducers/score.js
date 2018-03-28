// @flow

import type { Action, ScoreList } from "@lib/types";

const initialState: ScoreList = [];

const score = (state: ScoreList = [0], action: Action) => {
    switch (action.type) {
        case 'PLAYERS:ADD':
        case 'GAME:RESTART':
            return [0];

        case 'PLAYERS:ADD_PLAYER_SCORE':
            return [...state, action.score];

        default:
            return state;
    }
};

export default score;
