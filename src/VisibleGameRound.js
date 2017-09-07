// @flow

import { connect } from 'react-redux';

import type { State } from './types';
import type { Connector } from 'react-redux';
import type { Props } from './GameRound';

import { getPlayers, getScores } from './reducers';
import { roundOver } from './actions';
import GameRound from './GameRound';

const mapStateToProps = (state: State) => ({
    scores: getScores(state),
    players: getPlayers(state)
});

const VisibleGameRound: Connector<Props, {}> = connect(
    mapStateToProps,
    { roundOver }
)(GameRound);

export default VisibleGameRound;
