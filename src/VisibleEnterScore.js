// @flow

import { connect } from 'react-redux';

import type { State } from './types';
import type { Connector } from 'react-redux';
import type { Props } from './EnterScore';

import { addScore, subtractScore, nextRound } from './actions';
import { getWinner, getPlayers, getScores } from './reducers';
import EnterScore from './EnterScore';

const mapStateToProps = (state: State) => ({
    winner: getWinner(state),
    players: getPlayers(state),
    scores: getScores(state)
});

const VisibleEnterScore: Connector<Props, {}> = connect(
    mapStateToProps,
    { addScore, subtractScore, nextRound }
)(EnterScore);

export default VisibleEnterScore;
