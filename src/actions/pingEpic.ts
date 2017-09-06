/// <reference types="rxjs" />

import { Action } from 'redux';
import { ActionsObservable } from 'redux-observable';

export const pingEpic = (action$: ActionsObservable<Action>) => {
    console.log(action$);
    return action$.ofType('PING')
        .delay(1000) // Asynchronously wait 1000ms then continue
        .mapTo({ type: 'PONG' });
};