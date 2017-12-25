import {combineReducers} from "redux";
import { routerReducer } from 'react-router-redux'
import { reducer as sample} from "../sample/module/sample";

export default combineReducers({
    sample,
    routing: routerReducer,
})