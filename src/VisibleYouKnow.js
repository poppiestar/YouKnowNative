// @flow

import { connect } from 'react-redux';

import type { State } from './types';
import type { Connector } from 'react-redux';
import type { Props } from './YouKnow';

import { getGoal, getGame, getPlayers } from './reducers';
import YouKnow from './YouKnow';

const mapStateToProps = (state: State) => ({
    goal: getGoal(state),
    game: getGame(state),
    players: getPlayers(state)
});

const VisibleYouKnow: Connector<Props> = connect(
    mapStateToProps
)(YouKnow);

export default VisibleYouKnow;
