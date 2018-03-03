// @flow

import { connect } from 'react-redux';

import type { Dispatch } from 'redux';
import type { Connector } from 'react-redux';

import { setupGame } from '../redux/actions';

import Stage from '../redux/constants/stages';

import SplashScreen from '../components/screens/splash.screen';

type ConnectedDispatch = {
    setupGame: () => void
};

export type Props = ConnectedDispatch;

const mapDispatchToProps = {
    setupGame
};

const SplashContainer: Connector<{}, ConnectedDispatch> = connect(
    null,
    mapDispatchToProps
)(SplashScreen);

export default SplashContainer;
