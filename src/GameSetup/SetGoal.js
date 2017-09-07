// @flow

import React from 'react';
import { View, Text } from 'react-native';
import VisibleGoalSelect from './VisibleGoalSelect';

const SetGoal = () =>
    <View>
        <Text>Set Goal:</Text>
        <VisibleGoalSelect />
    </View>;

export default SetGoal;
