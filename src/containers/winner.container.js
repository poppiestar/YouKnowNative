import { connect } from 'react-redux';

import type { Scores, State, Player } from '@lib/types';
import type { Connector } from 'react-redux';

import { getWinner, getPlayers, getScores } from '@redux/reducers';
import { restartGame, resetGame } from '@redux/actions';

import WinnerScreen from '@components/screens/winner.screen';

type ConnectedState = {
    players: Array<Player>,
    scores: Scores,
    winner: number,
}

type ConnectedDispatch = {
    restartGame: () => void,
    resetGame: () => void
}

export type Props = ConnectedState & ConnectedDispatch;

const mapStateToProps = (state: State) => ({
    players: getPlayers(state),
    scores: getScores(state),
    winner: getWinner(state)
});

const mapDispatchToProps = {
    restartGame,
    resetGame
};

const WinnerContainer: Connector<{}, Props> = connect(
    mapStateToProps,
    mapDispatchToProps
)(WinnerScreen);

export default WinnerContainer;
