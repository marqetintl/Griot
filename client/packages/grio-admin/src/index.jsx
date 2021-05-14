import thunk from "redux-thunk";
import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";

import "./scss/main.scss";

import { SharedDataProvider, IS_DEV } from "@miq/shared";

import { EDITOR_PATH } from "./editor";
import AdminView from "./AdminView";
import { pagesReducer } from "./pages/utils";

export const initialState = {};

const reducers = { pages: pagesReducer };

const EditorLayout = lazy(() => import("./editor"));
export const Fallback = (props) => <div>Loading ...</div>;

const storeReducer = combineReducers({ ...reducers });

const middleware = [thunk];
let enhancers = [applyMiddleware(...middleware)];
if (IS_DEV) {
    enhancers = [
        ...enhancers,
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
    ];
}

const reduxStore = createStore(storeReducer, initialState, compose(...enhancers));

export default function Grio(props) {
    return (
        <SharedDataProvider>
            <ReduxProvider store={reduxStore}>
                <div id="Grio">
                    <Suspense fallback={<Fallback />}>
                        <Switch>
                            <Route path={`${EDITOR_PATH}`} component={EditorLayout} />
                            <Route component={AdminView} />
                        </Switch>
                    </Suspense>
                </div>
            </ReduxProvider>
        </SharedDataProvider>
    );
}
