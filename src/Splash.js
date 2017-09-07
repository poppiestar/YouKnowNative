// @flow

import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
export type Props = {
  moveToSetup: () => void
};

const Splash = ({ moveToSetup }: Props) =>
    <View>
        <Text>You Know</Text>
        <Text>Keep track of your games.</Text>
        <TouchableHighlight
            onPress={moveToSetup}>
            <Text>Begin</Text>
        </TouchableHighlight>
    </View>;

export default Splash;
