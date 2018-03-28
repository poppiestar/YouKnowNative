// @flow

import React, { Component } from 'react';

import type { Action } from "@lib/types";

import ScoreInput from './score-input';

type Props = {
    name: string,
    increment: (num: number) => Action,
    decrement: (num: number) => Action,
    value: number
};

type State = {
    count: number
};

class ScoreInputContainer extends Component<Props, State> {

    state: State = {
        count: 0
    }

    increment: () => void
    decrement: () => void

    constructor(props: Props): void {
        super(props);

        this.decrement = this.decrement.bind(this);
        this.increment = this.increment.bind(this);
    }

    increment(): void {
        this.props.increment(this.props.value);
        this.setState({ count: this.state.count + 1 });
    }

    decrement(): void {
        if (this.state.count > 0) {
            this.props.decrement(this.props.value);
            this.setState({ count: this.state.count - 1 });
        }
    }

    render() {
        const { name, value } = this.props;
        const { count } = this.state;

        return (
            <ScoreInput
                name={name}
                count={count}
                value={value}
                increment={this.increment}
                decrement={this.decrement}
            />
        );
    }
}

export default ScoreInputContainer;
