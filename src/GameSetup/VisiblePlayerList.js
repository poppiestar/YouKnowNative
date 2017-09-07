// @flow

import { connect } from 'react-redux';

import type { State } from '../types';
import type { Connector } from 'react-redux';
import type { Props } from './PlayerList';

import { getPlayers } from '../reducers';
import { removePlayer } from '../actions';
import PlayerList from './PlayerList';

const mapStateToProps = (state: State) => ({
    players: getPlayers(state)
});

const VisiblePlayerList: Connector<{}, Props> = connect(
    mapStateToProps,
    { removePlayer }
)(PlayerList);

export default VisiblePlayerList;
