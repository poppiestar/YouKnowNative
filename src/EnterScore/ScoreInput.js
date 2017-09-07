// @flow

import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

type ScoreInputPropTypes = {
  name: string,
  increment: (num: number) => void,
  decrement: (num: number) => void,
  value: number
};

type ScoreInputState = {
  count: number
};

class ScoreInput extends Component {
  props: ScoreInputPropTypes
  state: ScoreInputState

  increment: () => void
  decrement: () => void

  constructor (props: ScoreInputPropTypes): void {
      super(props);

      this.decrement = this.decrement.bind(this);
      this.increment = this.increment.bind(this);

      this.state = {
          count: 0
      };
  }

  increment (): void {
      this.props.increment(this.props.value);
      this.setState({ count: this.state.count + 1 });
  }

  decrement (): void {
      if (this.state.count > 0) {
          this.props.decrement(this.props.value);
          this.setState({ count: this.state.count - 1});
      }
  }

  render () {
      return (
          <View>
              <Text>{this.props.name}</Text>
              <TouchableHighlight
                  onPress={this.decrement}>
                  <Text>-</Text>
              </TouchableHighlight>
              <Text>{this.state.count}</Text>
              <TouchableHighlight
                  onPress={this.increment}>
                  <Text>+</Text>
              </TouchableHighlight>
          </View>
      );
  }
}

export default ScoreInput;
