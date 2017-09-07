// @flow

import React from 'react';
import { View, Text, Picker } from 'react-native';

const GOALS: Array<number> = [300, 500, 750, 1000];

export type Props = {
  goal: number,
  setGoal: (value: string) => void
};

const goalsList = (goals): Array<any> =>
    goals.map((item, i) =>
        <Picker.Item key={i} label={item.toString()} value={item} />
    );

const GoalSelect = ({ goal, setGoal }: Props) =>
    <View>
        <Text>Current goal: {goal}</Text>
        <Picker selectedValue={goal} onValueChange={(itemValue) => setGoal(itemValue)}>
            { goalsList(GOALS) }
        </Picker>
    </View>;

export default GoalSelect;
