// @flow

import React from 'react';
import { View, Text } from 'react-native';

import VisiblePlayerList from './VisiblePlayerList';
import VisibleNewPlayer from './VisibleNewPlayer';

const EnterPlayers = () =>
    <View>
        <Text>Enter Players</Text>
        <VisiblePlayerList />
        <VisibleNewPlayer />
    </View>;

export default EnterPlayers;
