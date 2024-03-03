



import "../util/array";
import "./common/config";
import "./assert/base.less";
import "./assert/atom.less";

import React from "react";
import ReactDOM from "react-dom";
import { configure } from "mobx";
configure({ enforceActions: 'never' });
import { App } from ".";
ReactDOM.render(
    <App></App>,
    document.body.appendChild(document.createElement('div')),
)
