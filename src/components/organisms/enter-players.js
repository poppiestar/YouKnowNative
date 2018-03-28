// @flow

import React from 'react';
import { View, Text } from 'react-native';
import { H2 } from 'native-base';

import PlayerListContainer from '@components/molecules/player-list.container';
import NewPlayerContainer from '@components/molecules/new-player.container';

const EnterPlayers = () =>
    <View>
        <H2>Enter Players</H2>
        <NewPlayerContainer />
        <PlayerListContainer />
    </View>;

export default EnterPlayers;
