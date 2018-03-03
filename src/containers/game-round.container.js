// @flow

import { connect } from 'react-redux';

import type { State, Scores, Players } from '../types';
import type { Connector } from 'react-redux';

import { getPlayers, getScores } from '../redux/reducers';
import { roundOver } from '../redux/actions';

import GameRoundScreen from '../components/screens/game-round.screen';

type ConnectedState = {
    players: Players,
    scores: Scores,
}

type ConnectedDispatch = {
    roundOver: () => void
}

export type Props = ConnectedState & ConnectedDispatch;

const mapStateToProps = (state: State) => ({
    scores: getScores(state),
    players: getPlayers(state)
});

const mapDispatchToProps = {
    roundOver
};

const GameRoundContainer: Connector<ConnectedState, ConnectedDispatch> = connect(
    mapStateToProps,
    mapDispatchToProps
)(GameRoundScreen);

export default GameRoundContainer;
