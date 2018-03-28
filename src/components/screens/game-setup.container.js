// @flow

import { connect } from 'react-redux';

import type { Connector } from 'react-redux';
import type { ThunkAction } from '@lib/types';

import { startGame } from '@redux/actions';

import GameSetupScreen from './game-setup.screen';

type ConnectedDispatch = {
    startGame: () => ThunkAction
};

export type Props = ConnectedDispatch;

const mapDispatchToProps: ConnectedDispatch = {
    startGame
};

const GameSetupContainer: Connector<{}, Props> = connect(
    null,
    mapDispatchToProps
)(GameSetupScreen);

export default GameSetupContainer;
