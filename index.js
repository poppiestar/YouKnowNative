/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import createSagaMiddleware from "redux-saga";
import sagas from "./src/redux/sagas";
import YouKnowContainer from './src/components/screens/you-know.container';
import YouKnowStore from './src/redux/reducers';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    YouKnowStore,
    composeWithDevTools(
        applyMiddleware(
            thunk,
            sagaMiddleware
        )
    )
);

sagaMiddleware.run(sagas);
store.dispatch({type: "INIT"});

const YouKnowNative = () =>
    <Provider store={store}>
        <YouKnowContainer />
    </Provider>;

AppRegistry.registerComponent('YouKnowNative', () => YouKnowNative);
