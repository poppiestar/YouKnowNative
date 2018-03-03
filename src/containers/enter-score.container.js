import { connect } from 'react-redux';

import type { State, Players, Scores } from '@lib/types';
import type { Connector } from 'react-redux';

import { addScore, subtractScore, nextRound } from '@redux/actions';
import { getWinner, getPlayers, getScores } from '@redux/reducers';

import EnterScoreScreen from '@components/screens/enter-score.screen';

type ConnectedState = {
    players: Players,
    scores: Scores,
    winner: number,
}

type ConnectedDispatch = {
    addScore: (value: number) => void,
    nextRound: () => void,
    subtractScore: (value: number) => void
}

export type Props = ConnectedState & ConnectedDispatch;

const mapStateToProps = (state: State) => ({
    winner: getWinner(state),
    players: getPlayers(state),
    scores: getScores(state)
});

const mapDispatchToProps = {
    addScore,
    subtractScore,
    nextRound
};
const EnterScoreContainer: Connector<{}, Props> = connect(
    mapStateToProps,
    mapDispatchToProps
)(EnterScoreScreen);

export default EnterScoreContainer;
