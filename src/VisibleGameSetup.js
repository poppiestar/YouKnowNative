// @flow

import { connect } from 'react-redux';

import type { Connector } from 'react-redux';
import type { Props } from './GameSetup';

import { startGame } from './actions';
import GameSetup from './GameSetup';

const VisibleGameSetup: Connector<{}, Props> = connect(
    null,
    { startGame }
)(GameSetup);

export default VisibleGameSetup;
