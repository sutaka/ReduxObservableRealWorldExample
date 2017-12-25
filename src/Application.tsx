import * as React from "react";
import {Provider} from "react-redux";
import 'rxjs';
import Sample from "./sample/containers/Sample";
import configureStore from "./rootSettings/configureStore";

const Application = () => (
    <Provider store={configureStore()}
    >
        <Sample/>
    </Provider>
);

export default Application;