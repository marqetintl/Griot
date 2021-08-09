import React from "react";
import thunk from "redux-thunk";
import ReactDOM from "react-dom";
// import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter, Switch } from "react-router-dom";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import reportWebVitals from "./reportWebVitals";

import "./index.scss";

import { IS_DEV } from "@miq/utils";
import { AdminRoute } from "@miq/adminjs";
import { SharedDataProvider } from "@miq/contexts";

import Admin from "./admin";

const initialState = {};
const reducers = combineReducers({
    // pages: pagesReducer, sections: sectionsReducer
});

/**
 *
 */

export const configStore = () => {
    const middleware = [thunk];
    let enhancers = [applyMiddleware(...middleware)];
    if (IS_DEV) {
        enhancers = [
            ...enhancers,
            window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
        ];
    }
    return createStore(reducers, initialState, compose(...enhancers));
};
// export const store = configStore();

/**
 *
 */

const root = document.getElementById("root");

if (root) {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <SharedDataProvider>
                    {/* <ReduxProvider store={store}> */}
                    <Switch>
                        <AdminRoute path="/staff/" component={Admin} />
                    </Switch>
                    {/* </ReduxProvider> */}
                </SharedDataProvider>
            </BrowserRouter>
        </React.StrictMode>,
        root
    );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
