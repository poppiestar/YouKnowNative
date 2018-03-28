// @flow

import { connect } from 'react-redux';

import type { Action } from "@lib/types";

import { addPlayer } from '@redux/actions';

import NewPlayer from './new-player';

type ConnectedDispatch = {
    addPlayer: (name: string) => Action
}

export type Props = ConnectedDispatch;

const mapDispatchToProps: ConnectedDispatch = {
    addPlayer
};

const NewPlayerContainer = connect(
    null,
    mapDispatchToProps
)(NewPlayer);

export default NewPlayerContainer;
