// @flow

import React from 'react';
import { View } from 'react-native';
import { Text, Button, List, ListItem, Icon } from 'native-base';

import type { Props } from '@containers/player-list.container';

const renderPlayer = (player, removePlayer) =>
    <ListItem key={player.id} style={{ flex: 1 }}>
        <Text style={{ flex: 2 }}>{player.name}</Text>
        <Button transparent style={{ flex: 1, justifyContent: 'flex-end' }}
            onPress={() => removePlayer(player.id)}>
            <Icon name="ios-trash-outline" />
        </Button>
    </ListItem>;

const PlayerList = ({ players, removePlayer }: Props) =>
    <View>
        <List>
            {
                Object.keys(players).reduce((list, playerId) => {
                    const player = players[parseInt(playerId, 10)];

                    list[parseInt(playerId, 10)] = renderPlayer(player, removePlayer);

                    return list;
                }, [])
            }
        </List>
    </View>;

export default PlayerList;
