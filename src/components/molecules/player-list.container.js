// @flow

import { connect } from 'react-redux';

import type { Action, State, Players } from '@lib/types';

import { getPlayers } from '@redux/reducers';
import { removePlayer } from '@redux/actions';

import PlayerList from './player-list';

type ConnectedState = {
    players: Players,
};

type ConnectedDispatch = {
    removePlayer: (id: number) => Action
};

export type Props = ConnectedState & ConnectedDispatch;

const mapStateToProps = (state: State): ConnectedState => ({
    players: getPlayers(state)
});

const mapDispatchToProps: ConnectedDispatch = {
    removePlayer
};

const PlayerListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PlayerList);

export default PlayerListContainer;
