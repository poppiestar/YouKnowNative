// @flow

import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'native-base';

import type { Props } from './goal-select.container';

const GOALS: number[] = [300, 500, 750, 1000];

const goalsList = (goals, goal, setGoal): any[] =>
    goals.map((value, i) =>
        <Button
            style={{ paddingLeft: 20, paddingRight: 20 }}
            key={i}
            disabled={goal === value}
            onPress={() => setGoal(parseInt(value, 10))}>
            <Text>{value}</Text>
        </Button>
    );

const GoalSelect = ({ goal, setGoal }: Props) =>
    <View>
        <Text>Current goal: {goal}</Text>
        <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
            {
                goalsList(GOALS, goal, setGoal)
            }
        </View>
    </View>;

export default GoalSelect;
