// @flow

import { connect } from 'react-redux';

import type { State } from './types';
import type { Connector } from 'react-redux';
import type { Props } from './Winner';

import { getWinner, getPlayers, getScores } from './reducers';
import { restartGame, resetGame } from './actions';
import Winner from './Winner';

const mapStateToProps = (state: State) => ({
    players: getPlayers(state),
    scores: getScores(state),
    winner: getWinner(state)
});

const VisibleWinner: Connector<Props, {}> = connect(
    mapStateToProps,
    { restartGame, resetGame }
)(Winner);

export default VisibleWinner;
