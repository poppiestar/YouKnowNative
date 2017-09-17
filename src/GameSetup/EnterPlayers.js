// @flow

import React from 'react';
import { View, Text } from 'react-native';
import { H2 } from 'native-base';

import VisiblePlayerList from './VisiblePlayerList';
import VisibleNewPlayer from './VisibleNewPlayer';

const EnterPlayers = () =>
    <View>
        <H2>Enter Players</H2>
        <VisibleNewPlayer />
        <VisiblePlayerList />
    </View>;

export default EnterPlayers;
