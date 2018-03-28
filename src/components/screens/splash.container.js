// @flow

import { connect } from 'react-redux';

import type { Dispatch } from 'redux';
import type { ThunkAction } from '@lib/types';

import { setupGame } from '@redux/actions';

import Stage from '@lib/constants/stages';

import SplashScreen from './splash.screen';

type ConnectedDispatch = {
    setupGame: () => ThunkAction
};

export type Props = ConnectedDispatch;

const mapDispatchToProps: ConnectedDispatch = {
    setupGame
};

const SplashContainer = connect(
    null,
    mapDispatchToProps
)(SplashScreen);

export default SplashContainer;
