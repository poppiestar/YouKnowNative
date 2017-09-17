// @flow

import React, { Component } from 'react';
import { View, TextInput, TouchableHighlight } from 'react-native';
import { Text, Button, Item, Input } from 'native-base';
export type Props = {
  addPlayer: (name: string) => any
}

class NewPlayer extends Component {
  props: Props

  constructor(props: Props): void {
      super(props);

      this.state = { text: '' };
      this.addPlayer = this.addPlayer.bind(this);
  }
  
  addPlayer (): void {
      const name = this.state.text;

      if (name !== '') {
          this.props.addPlayer(name);
          this._input.setNativeProps({ text: '' });
          this.setState({ text: '' });
      }
  }

  render () {
      return (
        <View style={{ flex: 1 }}>
            <Item regular style={{ flex: 2 }}>
                <Input
                    ref={component => this._input = component}
                    placeholder="New Player's Name"
                    onChangeText={(text) => this.setState({ text }) } />
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
