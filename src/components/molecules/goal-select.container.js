// @flow

import { connect } from 'react-redux';

import type { Action, State } from '@lib/types';

import { setGoal } from '@redux/actions';

import GoalSelect from './goal-select';

type ConnectedState = {
    goal: number,
}

type ConnectedDispatch = {
    setGoal: (value: number) => Action
}

export type Props = ConnectedState & ConnectedDispatch;

const mapStateToProps = ({ goal }: State): ConnectedState => ({
    goal
});

const mapDispatchToProps: ConnectedDispatch = {
    setGoal
};

const GoalSelectContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(GoalSelect);

export default GoalSelectContainer;
