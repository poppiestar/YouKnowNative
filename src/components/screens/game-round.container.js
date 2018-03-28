// @flow

import { connect } from 'react-redux';

import type { State, Scores, Players } from '@lib/types';
import type { ThunkAction } from '@lib/types';

import { getPlayers, getScores } from '@redux/reducers';
import { roundOver } from '@redux/actions';

import GameRoundScreen from './game-round.screen';

type ConnectedState = {
    players: Players,
    scores: Scores,
}

type ConnectedDispatch = {
    roundOver: () => ThunkAction
}

export type Props = ConnectedState & ConnectedDispatch;

const mapStateToProps = (state: State): ConnectedState => ({
    scores: getScores(state),
    players: getPlayers(state)
});

const mapDispatchToProps: ConnectedDispatch = {
    roundOver
};

const GameRoundContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(GameRoundScreen);

export default GameRoundContainer;
