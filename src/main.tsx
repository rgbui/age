



import "../util/array";
import "./common/config";
import "./assert/base.less";
import "./assert/atom.less";

import React from "react";
import { configure } from "mobx";
configure({ enforceActions: 'never' });
import { App } from ".";
import { createRoot } from 'react-dom/client';
const root = createRoot(document.body.appendChild(document.createElement('div')));
root.render(<App></App>);
