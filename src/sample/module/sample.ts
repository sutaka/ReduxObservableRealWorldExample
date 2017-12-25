import 'rxjs';
import {push} from "react-router-redux";
import {combineEpics} from "redux-observable";

// Actions
const PING   = 'sample/PING';
const PONG   = 'sample/PONG';
const NEW   = 'sample/NEW';

// Reducer
export function reducer(state =  { isPinging: false, something: "" }, action = {}) {
    switch (action.type) {
        case PING:
            return { isPinging: true };
        case PONG:
            return { isPinging: false };
        case NEW:
            return { isPinging: true, something: "aa" };
        default: return state;
    }
}

export const epics = combineEpics(
    pingEpic
);

// Action Creators
export function ping() {
    return { type: PING };
}

export function pong() {
    return { type: PONG };
}

// Epics
export function pingEpic(action$, state) {
    return action$.ofType(PING)
        .delay(1000) // Asynchronously wait 1000ms then continue
        .mapTo(pong());
}
