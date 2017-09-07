// @flow

import React, { Component } from 'react';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';

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
          <View>
              <TextInput
                  ref={component => this._input = component}
                  placeholder="New Player's Name"
                  onChangeText={(text) => this.setState({ text }) } />
              <TouchableHighlight
                  onPress={this.addPlayer}>
                  <Text>Add</Text>
              </TouchableHighlight>
          </View>
      );
  }
}

export default NewPlayer;
