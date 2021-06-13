import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Admin from "@grio/admin";

import "./index.scss";

import reportWebVitals from "./reportWebVitals";

const root = document.getElementById("root");

if (root) {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Switch>
                    {/* /grio/ */}
                    <Route path="/grio/" component={Admin} />
                </Switch>
            </BrowserRouter>
        </React.StrictMode>,
        root
    );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
