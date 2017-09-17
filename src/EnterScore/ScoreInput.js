// @flow

import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'native-base';

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
        <View style={{ flex: 1, flexDirection: "row" }}>
            <Text
                style={{ flex: 1 }}>
                {this.props.name}
            </Text>
            <Button
                style={{ flex: 1 }}
                onPress={this.decrement}>
                <Text style={{ textAlign: "center" }}>-</Text>
            </Button>
            <Text
                style={{ flex: 1 }}>
                {this.state.count}
            </Text>
            <Button
                style={{ flex: 1 }}
                onPress={this.increment}>
                <Text style={{ textAlign: "center" }}>+</Text>
            </Button>
        </View>
    );
  }
}

export default ScoreInput;
