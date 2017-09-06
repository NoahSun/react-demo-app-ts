import { AnyAction } from 'redux';
import createInitialState from '../utils/createInitialState';

const pingInitialState = createInitialState('ping');

export const ping = (state = pingInitialState, action: AnyAction) => {
    switch (action.type) {
        case `PING`:
            Object.assign(state.ping, {
                response: {
                    isPing: true
                }
            });
            return state;

        case `PONG`:
            Object.assign(state.ping, {
                response: {
                    isPing: false
                }
            });
            return state;

        default:
            return state;
    }
};