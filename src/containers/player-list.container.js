import { connect } from 'react-redux';

import type { State, Players } from '@lib/types';
import type { Connector } from 'react-redux';

import { getPlayers } from '@redux/reducers';
import { removePlayer } from '@redux/actions';

import PlayerList from '@components/molecules/player-list';

type ConnectedState = {
    players: Players,
};

type ConnectedDispatch = {
    removePlayer: (id: number) => void
};

export type Props = ConnectedState & ConnectedDispatch;

const mapStateToProps = (state: State) => ({
    players: getPlayers(state)
});

const mapDispatchToProps = {
    removePlayer
};

const PlayerListContainer: Connector<{}, Props> = connect(
    mapStateToProps,
    mapDispatchToProps
)(PlayerList);

export default PlayerListContainer;
