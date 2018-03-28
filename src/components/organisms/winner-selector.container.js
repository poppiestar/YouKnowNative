// @flow

import { connect } from 'react-redux';

import type { Connector } from 'react-redux';
import type { Action, State, Player, Players } from '@lib/types';

import { getPlayers, getWinner } from '@redux/reducers';
import { setWinner } from '@redux/actions';

import WinnerSelector from './winner-selector';

type ConnectedState = {
    players: Players,
    winner: Player
}

type ConnectedDispatch = {
    setWinner: (value: number) => Action
}

export type Props = ConnectedState & ConnectedDispatch;

const mapStateToProps = (state: State): ConnectedState => ({
    players: getPlayers(state),
    winner: getWinner(state)
});

const mapDispatchToProps: ConnectedDispatch = {
    setWinner
};

const WinnerSelectorContainer: Connector<{}, Props> = connect(
    mapStateToProps,
    mapDispatchToProps
)(WinnerSelector);


export default WinnerSelectorContainer;
