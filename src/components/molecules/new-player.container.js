// @flow

import React, { Component } from "react";
import { connect } from 'react-redux';

import type { TextInput } from "react-native";
import type { Action } from "@lib/types";

import { addPlayer } from '@redux/actions';

import NewPlayer from './new-player';

type ConnectedDispatch = {
    addPlayer: (name: string) => Action
}

export type Props = ConnectedDispatch;

type State = {
    text: string;
}

class NewPlayerContainer extends Component<Props, State> {
    _input: TextInput; // TODO figure this out!

    addPlayer: () => void;

    state: State = {
        text: ''
    };

    addPlayer = (): void => {
        const name = this.state.text;

        if (name !== '') {
            this.props.addPlayer(name);
            this._input.setNativeProps({ value: '' });
            this.setState({ text: '' });
        }
    }

    render() {
        return (
            <NewPlayer
                addPlayer={this.addPlayer}
                onChangeText={(text: string) => this.setState({ text })}
            />
        );
    }
}

const mapDispatchToProps: ConnectedDispatch = {
    addPlayer
};

export default connect(
    null,
    mapDispatchToProps
)(NewPlayerContainer);
