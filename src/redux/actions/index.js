// @flow

import Stage from '../constants/stages';
import { reduceScores } from '../helpers';

import type { Action, Dispatch, GetState, ThunkAction } from '../../types';

let playerId = 1;

export const setGoal = (goal: number): Action => ({
    type: 'GOAL:SET',
    goal
});

export const addPlayer = (name: string): Action => ({
    type: 'PLAYERS:ADD',
    id: playerId++,
    name
});

export const removePlayer = (id: number): Action => ({
    type: 'PLAYERS:REMOVE',
    id
});

export const setupGame = (): ThunkAction =>
    (dispatch: Dispatch): void => {
        dispatch(setStage(Stage["GAME_SETUP"]));
    };

export const startGame = (): ThunkAction =>
    (dispatch: Dispatch, getState: GetState): void => {
        const { players } = getState();

        if (players.allIds.length >= 2) {
            dispatch(setStage(Stage["GAME_ROUND"]));
        }
    };

export const setStage = (stage: number): Action => ({
    type: 'GAME:SET_STAGE',
    stage
});

export const setWinner = (id: number): Action => ({
    type: 'ROUND:SET_WINNER',
    id
});

export const roundOver = (): ThunkAction =>
    (dispatch: Dispatch, getState: GetState): void => {
        const { players, round } = getState();

        if (round.winner >= 0 && players.byId[round.winner]) {
            dispatch(setStage(Stage["ENTER_SCORE"]));
        }
    };

export const nextRound = (): ThunkAction =>
    (dispatch: Dispatch, getState: GetState): void => {
        const { round, goal } = getState();
        dispatch(addPlayerScore(round.winner, round.score));

        const { scores } = getState();

        const winnerScore = reduceScores(scores[round.winner]);

        if (winnerScore >= goal) {
            dispatch(setStage(Stage["WINNER"]));
        } else {
            dispatch(setStage(Stage["GAME_ROUND"]));
        }
    };

export const addPlayerScore = (id: number, score: number): Action => ({
    type: 'PLAYERS:ADD_PLAYER_SCORE',
    id,
    score
});

export const addScore = (value: number): Action => ({
    type: 'ROUND:ADD_SCORE',
    value
});

export const subtractScore = (value: number): Action => ({
    type: 'ROUND:SUBTRACT_SCORE',
    value
});

export const restartGame = (): Action => ({
    type: 'GAME:RESTART'
});

export const resetGame = (): Action => ({
    type: 'GAME:RESET'
});
