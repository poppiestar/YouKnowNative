/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import VisibleYouKnow from './src/VisibleYouKnow';
import YouKnowStore from './src/reducers';

let store = createStore(
    YouKnowStore,
    applyMiddleware(thunk)
);

const YouKnowNative = () =>
    <Provider store={store}>
        <VisibleYouKnow />
    </Provider>;

AppRegistry.registerComponent('YouKnowNative', () => YouKnowNative);
