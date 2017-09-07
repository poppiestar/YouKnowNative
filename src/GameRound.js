// @flow

import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import type { Scores, Players } from './types';

import PlayerScores from './GameRound/PlayerScores';
import VisibleWinnerSelector from './GameRound/VisibleWinnerSelector';

export type Props = {
  players: Players,
  scores: Scores,
  roundOver: () => void
};

const GameRound = ({ players, scores, roundOver }: Props) =>
    <View>
        <PlayerScores players={players} scores={scores} />
        <VisibleWinnerSelector />
        <TouchableHighlight
            onPress={roundOver}>
            <Text>Enter Score</Text>
        </TouchableHighlight>
    </View>;

export default GameRound;
