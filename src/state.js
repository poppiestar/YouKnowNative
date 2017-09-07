// @flow
/* eslint-env browser */

export const loadState = () => {
    try {
        const serialisedState: string = localStorage.getItem('you-know');
        if (serialisedState === null) {
            return undefined;
        } else {
            return JSON.parse(serialisedState);
        }
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state) => {
    try {
        const serialisedState = JSON.stringify(state);
        localStorage.setItem('you-know', serialisedState);
    } catch (err) {
        // do nothing
    }
};
