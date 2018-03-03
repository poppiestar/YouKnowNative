import { connect } from 'react-redux';

import type { State } from '@lib/types';
import type { Connector } from 'react-redux';

import { setGoal } from '@redux/actions';

import GoalSelect from '@components/molecules/goal-select';

type ConnectedState = {
    goal: number,
}

type ConnectedDispatch = {
    setGoal: (value: number) => void
}

export type Props = ConnectedState & ConnectedDispatch;

const mapStateToProps = ({ goal }: State) => ({
    goal
});

const mapDispatchToProps = {
    setGoal
};

const GoalSelectContainer: Connector<{}, Props> = connect(
    mapStateToProps,
    mapDispatchToProps
)(GoalSelect);

export default GoalSelectContainer;
