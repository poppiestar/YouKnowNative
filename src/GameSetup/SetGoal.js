// @flow

import React from 'react';
import { View } from 'react-native';
import { H2 } from 'native-base';

import VisibleGoalSelect from './VisibleGoalSelect';

const SetGoal = () =>
    <View>
        <H2>Set Goal</H2>
        <VisibleGoalSelect />
    </View>;

export default SetGoal;
