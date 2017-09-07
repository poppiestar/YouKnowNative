// @flow

import { connect } from 'react-redux';

import type { State } from '../types';
import type { Connector } from 'react-redux';
import type { Props } from './GoalSelect';

import { setGoal } from '../actions';
import GoalSelect from './GoalSelect';

const mapStateToProps = ({ goal }: State) => ({
    goal
});

const VisibleGoalSelect: Connector<{}, Props> = connect(
    mapStateToProps,
    { setGoal }
)(GoalSelect);

export default VisibleGoalSelect;
