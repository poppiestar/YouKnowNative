// @flow

import { call, takeEvery, put, select } from "redux-saga/effects";
import Stage from '@lib/constants/stages';
import { setStage, errorMessage } from "@redux/actions";
import { getPlayers } from "@redux/reducers";

import type { Saga } from "redux-saga";

export function* startGameSaga(): Saga<void> {
    const players = yield select(getPlayers);

    if (players.length >=2) {
        yield put(setStage(Stage["GAME_ROUND"]));
    } else {
        yield put(errorMessage("Two or more players are required to play"));
    }
};

export default [
    takeEvery("GAME:START", startGameSaga)
];
