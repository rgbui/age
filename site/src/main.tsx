import { configure } from "mobx";
import { App } from "./app";
import React from "react";
import ReactDOM from "react-dom";
import "./util/array";
configure({ enforceActions: 'never' });
import "./theme.less";
import "./library/index";
ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div')),
)
