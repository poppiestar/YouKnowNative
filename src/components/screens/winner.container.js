// @flow

import { connect } from 'react-redux';

import type { Action, Scores, State, Player, PlayersByIdState } from '@lib/types';

import { getWinner, getPlayers, getScores } from '@redux/reducers';
import { restartGame, resetGame } from '@redux/actions';

import WinnerScreen from './winner.screen';

type ConnectedState = {
    players: PlayersByIdState,
    scores: Scores,
    winner: number,
}

type ConnectedDispatch = {
    restartGame: () => Action,
    resetGame: () => Action
}

export type Props = ConnectedState & ConnectedDispatch;

const mapStateToProps = (state: State): ConnectedState => ({
    players: getPlayers(state),
    scores: getScores(state),
    winner: getWinner(state)
});

const mapDispatchToProps: ConnectedDispatch = {
    restartGame,
    resetGame
};

const WinnerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(WinnerScreen);

export default WinnerContainer;
