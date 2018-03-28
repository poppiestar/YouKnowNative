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

import YouKnowContainer from './src/components/screens/you-know.container';
import YouKnowStore from './src/redux/reducers';

let store = createStore(
    YouKnowStore,
    applyMiddleware(thunk)
);

const YouKnowNative = () =>
    <Provider store={store}>
        <YouKnowContainer />
    </Provider>;

AppRegistry.registerComponent('YouKnowNative', () => YouKnowNative);
