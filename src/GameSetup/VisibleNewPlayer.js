// @flow

import { connect } from 'react-redux';

import type { Connector } from 'react-redux';
import type { Props } from './NewPlayer';

import { addPlayer } from '../actions';
import NewPlayer from './NewPlayer';

const VisibleNewPlayer: Connector<{}, Props> = connect(
    null,
    { addPlayer }
)(NewPlayer);

export default VisibleNewPlayer;
