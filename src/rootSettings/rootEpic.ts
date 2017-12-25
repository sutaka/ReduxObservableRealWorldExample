import {combineEpics} from "redux-observable";
import {epics as sample} from  "../sample/module/sample";

export default combineEpics(
    sample
);