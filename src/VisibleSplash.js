// @flow

import { connect } from 'react-redux';

import type { Dispatch } from 'redux';
import type { Connector } from 'react-redux';
import type { Props } from './Splash';

import { setStage } from './actions';

import Stage from './constants/stages';
import Splash from './Splash';

const mapDispatchToProps = (dispatch: Dispatch) => ({
    moveToSetup: () => {
        dispatch(setStage(Stage.GAME_SETUP));
    }
});

const VisibleSplash: Connector<{}, Props> = connect(
    null,
    mapDispatchToProps
)(Splash);

export default VisibleSplash;
