import { all } from "redux-saga/effects";

import type { Saga } from "redux-saga";

import helloSagas from "./hello.sagas";

const allSagas = function* allSagas() {
    yield all([
        ...helloSagas,
    ]);
};

export default allSagas;
