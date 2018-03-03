// @flow

import { connect } from 'react-redux';

import type { Connector } from 'react-redux';

import { addPlayer } from '../redux/actions';

import NewPlayer from '../components/molecules/new-player';

type ConnectedDispatch = {
    addPlayer: (name: string) => void
}

export type Props = ConnectedDispatch;

const mapDispatchToProps = {
    addPlayer
};

const NewPlayerContainer: Connector<{}, ConnectedDispatch> = connect(
    null,
    mapDispatchToProps
)(NewPlayer);

export default NewPlayerContainer;
