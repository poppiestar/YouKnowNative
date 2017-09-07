// @flow

import { combineReducers } from 'redux';

import type { State } from '../types';

import players, * as fromPlayers from './players';
import goal, * as fromGoal from './goal';
import game, * as fromGame from './game';
import round, * as fromRound from './round';
import scores, * as fromScores from './scores';
import error, * as fromError from './error';

const youKnowApp = combineReducers({
    goal,
    game,
    players,
    round,
    scores,
    error
});

export default youKnowApp;

export const getPlayers = (state: State) => fromPlayers.getPlayers(state.players);
export const getWinner = (state: State) => fromRound.getWinner(state.round);
export const getRoundScore = (state: State) => fromRound.getRoundScore(state.round);
export const getGoal = (state: State) => fromGoal.getGoal(state.goal);
export const getStage = (state: State) => fromGame.getStage(state.game);
export const getScores = (state: State) => fromScores.getScores(state.scores);
export const getError = (state: State) => fromError.getError(state.error);
