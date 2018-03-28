// @flow

import React from "react";
import { View } from 'react-native';
import { Button, Text } from 'native-base';

type Props = {
    name: string,
    increment: (num: number) => void,
    decrement: (num: number) => void,
    value: number,
    count: number
};

const ScoreInput = ({ name, count, value, increment, decrement }: Props) =>
    <View style={{ flex: 1, flexDirection: "row" }}>
        <Text
            style={{ flex: 1 }}>
            {name}
        </Text>
        <Button
            style={{ flex: 1 }}
            onPress={decrement}>
            <Text style={{ textAlign: "center" }}>-</Text>
        </Button>
        <Text
            style={{ flex: 1 }}>
            {count}
        </Text>
        <Button
            style={{ flex: 1 }}
            onPress={increment}>
            <Text style={{ textAlign: "center" }}>+</Text>
        </Button>
    </View>;

export default ScoreInput;
