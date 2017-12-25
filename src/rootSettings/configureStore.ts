import { createStore, applyMiddleware} from 'redux';
import rootReducer from '../rootSettings/rootReducer';
import {createEpicMiddleware} from "redux-observable";
import rootEpic from "./rootEpic";

export default function configureStore() {
    const epicMiddleware = createEpicMiddleware(rootEpic);

    const store = createStore(
        rootReducer,
        applyMiddleware(epicMiddleware)
    );

    return store;
}