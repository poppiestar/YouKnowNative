// @flow

import { connect } from 'react-redux';

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

const GameSetupContainer = connect(
    null,
    mapDispatchToProps
)(GameSetupScreen);

export default GameSetupContainer;
