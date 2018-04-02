// @flow

import { connect } from 'react-redux';

import type { Action } from '@lib/types';

import { startGame } from '@redux/actions';

import GameSetupScreen from './game-setup.screen';

type ConnectedDispatch = {
    startGame: () => Action
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
