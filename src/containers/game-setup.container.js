// @flow

import { connect } from 'react-redux';

import type { Connector } from 'react-redux';

import { startGame } from '../redux/actions';

import GameSetupScreen from '../components/screens/game-setup.screen';

type ConnectedDispatch = {
    startGame: () => void
};

export type Props = ConnectedDispatch;

const mapDispatchToProps = {
    startGame
};

const GameSetupContainer: Connector<{}, ConnectedDispatch> = connect(
    null,
    mapDispatchToProps
)(GameSetupScreen);

export default GameSetupContainer;
