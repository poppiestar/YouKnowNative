// @flow

import { connect } from 'react-redux';

import type { State } from '@lib/types';
import type { Connector } from 'react-redux';

import { getStage } from '@redux/reducers';

import YouKnowScreen from '@components/screens/you-know.screen';

type ConnectedState = {
    stage: number
}

export type Props = ConnectedState;

const mapStateToProps = (state: State) => ({
    stage: getStage(state),
});

const YouKnowContainer: Connector<{}, Props> = connect(
    mapStateToProps
)(YouKnowScreen);

export default YouKnowContainer;
