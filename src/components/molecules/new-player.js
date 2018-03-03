// @flow

import React, { Component } from 'react';
import { View, TouchableHighlight } from 'react-native';
import { Text, Button, Item, Input } from 'native-base';

import type { TextInput } from "react-native";
import type { Props } from '../../containers/new-player.container';

type State = {
    text: string;
}

class NewPlayer extends Component<Props, State> {

    _input: TextInput; // TODO figure this out!
    addPlayer: () => void;

    constructor(props: Props): void {
        super(props);

        this.state = { text: '' };
        this.addPlayer = this.addPlayer.bind(this);
    }

    addPlayer(): void {
        const name = this.state.text;

        if (name !== '') {
            this.props.addPlayer(name);
            this._input.setNativeProps({ value: '' });
            this.setState({ text: '' });
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Item regular style={{ flex: 1 }}>
                    <Input
                        ref={component => this._input = component}
                        placeholder="New Player's Name"
                        onChangeText={(text: string) => this.setState({ text })} />
                </Item>
                <Button
                    style={{ flex: 1 }}
                    onPress={this.addPlayer}>
                    <Text>Add</Text>
                </Button>
            </View>
        );
    }
}

export default NewPlayer;
