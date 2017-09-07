// @flow

const initialState = '';

const error = (state = initialState, action: Action) => {
    switch (action.type) {
        case 'ERROR:SET':
            return action.value;

        case 'ERROR:CLEAR':
            return '';

        default:
            return state;
    }
};

export default error;

export const getError = (state) => state;
