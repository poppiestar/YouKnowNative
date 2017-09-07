// @flow

import { connect } from 'react-redux';

import type { State } from './types';
import type { Connector } from 'react-redux';
import type { Props } from './YouKnow';

import { getStage, getError } from './reducers';
import YouKnow from './YouKnow';

const mapStateToProps = (state: State) => ({
    stage: getStage(state),
    error: getError(state)
});

const VisibleYouKnow: Connector<Props> = connect(
    mapStateToProps
)(YouKnow);

export default VisibleYouKnow;
