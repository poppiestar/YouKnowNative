// @flow

import { connect } from 'react-redux';

import type { State, Player, Players } from '@lib/types';
import type { Connector } from 'react-redux';

import { getPlayers, getWinner } from '@redux/reducers';
import { setWinner } from '@redux/actions';

import WinnerSelector from '@components/organisms/winner-selector';

type ConnectedState = {
    players: Players,
    winner: Player
}

type ConnectedDispatch = {
    setWinner: (value: number) => void
}

export type Props = ConnectedState & ConnectedDispatch;

const mapStateToProps = (state: State) => ({
    players: getPlayers(state),
    winner: getWinner(state)
});

const mapDispatchToProps = {
    setWinner
};

const WinnerSelectorContainer: Connector<ConnectedState, ConnectedDispatch> = connect(
    mapStateToProps,
    mapDispatchToProps
)(WinnerSelector);


export default WinnerSelectorContainer;
