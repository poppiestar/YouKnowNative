// @flow

import React, { Component } from 'react';

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
          <div>
              {this.props.name}
              <button className="decrement" onClick={this.decrement}>-</button>
              <span className="count">{this.state.count}</span>
              <button className="increment" onClick={this.increment}>+</button>
          </div>
      );
  }
}

export default ScoreInput;
