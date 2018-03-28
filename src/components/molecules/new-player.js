// @flow

import React, { Component } from 'react';
import { View, TouchableHighlight } from 'react-native';
import { Text, Button, Item, Input } from 'native-base';

import type { TextInput } from "react-native";
import type { Action } from "@lib/types";

type Props = {
    addPlayer: () => void;
    onChangeText: (text: string) => void;
}

class NewPlayer extends Component<Props> {
    _input: TextInput;

    render() {
        const { addPlayer, onChangeText } = this.props;

        return (
            <View style={{ flex: 1 }}>
                <Item regular style={{ flex: 1 }}>
                <Input
                    ref={component => this._input = component}
                    placeholder="New Player's Name"
                    onChangeText={onChangeText}
                />
            </Item>
            <Button
                style={{ flex: 1 }}
                onPress={addPlayer}
            >
                <Text>Add</Text>
            </Button>
        </View>
        )
    }
}

export default NewPlayer;
