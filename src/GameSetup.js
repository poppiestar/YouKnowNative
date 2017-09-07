// @flow

import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import SetGoal from './GameSetup/SetGoal';
import EnterPlayers from './GameSetup/EnterPlayers';
// import ErrorMessage from './ErrorMessage';

export type Props = {
  startGame: () => void
};

const GameSetup = ({ startGame }: Props) =>
    <View>
        <Text>Player Entry</Text>
        <SetGoal />
        <EnterPlayers />
        <TouchableHighlight
            onPress={startGame}>
            <Text>Start Game</Text>
        </TouchableHighlight>
    </View>;

export default GameSetup;
