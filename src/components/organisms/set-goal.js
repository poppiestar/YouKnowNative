// @flow

import React from 'react';
import { View } from 'react-native';
import { H2 } from 'native-base';

import GoalSelectContainer from '../../containers/goal-select.container';

const SetGoal = () =>
    <View>
        <H2>Set Goal</H2>
        <GoalSelectContainer />
    </View>;

export default SetGoal;
