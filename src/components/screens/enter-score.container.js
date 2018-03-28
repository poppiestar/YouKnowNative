// @flow

import { connect } from 'react-redux';

import type { State, Players, Scores } from '@lib/types';
import type { Action, ThunkAction } from '@lib/types';

import { addScore, subtractScore, nextRound } from '@redux/actions';
import { getWinner, getPlayers, getScores } from '@redux/reducers';

import EnterScoreScreen from './enter-score.screen';

type ConnectedState = {
    players: Players,
    scores: Scores,
    winner: number,
}

type ConnectedDispatch = {
    addScore: (value: number) => Action,
    nextRound: () => ThunkAction,
    subtractScore: (value: number) => Action
}

export type Props = ConnectedState & ConnectedDispatch;

const mapStateToProps = (state: State): ConnectedState => ({
    winner: getWinner(state),
    players: getPlayers(state),
    scores: getScores(state)
});

const mapDispatchToProps: ConnectedDispatch = {
    addScore,
    subtractScore,
    nextRound
};
const EnterScoreContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EnterScoreScreen);

export default EnterScoreContainer;
