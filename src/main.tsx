import { configure } from "mobx";
import { App } from ".";
import React from "react";
import ReactDOM from "react-dom";
configure({ enforceActions: 'never' });
ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div')),
)
