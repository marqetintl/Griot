import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Admin from "@griot/admin";

import "./index.scss";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Switch>
                <Route path="/admin/" component={Admin} />
            </Switch>
            <div className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui corporis obcaecati facere, tempore
                asperiores in pariatur nesciunt tenetur ipsam rem odit vel? Quam nobis voluptatibus omnis facilis in
                temporibus? Eligendi.
            </div>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
