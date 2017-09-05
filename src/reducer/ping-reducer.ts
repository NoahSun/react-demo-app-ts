import { AnyAction } from 'redux';
import createInitialState from '../utils/createInitialState';

const pingInitialState = createInitialState('ping');

export const ping = (state = pingInitialState, action: AnyAction) => {
    switch (action.type) {
        case `ACTION_TYPE_1`:
            return state;

        default:
            return state;
    }
};