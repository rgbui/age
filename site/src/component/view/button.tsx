import { observer } from "mobx-react";
import React from "react";
import { CSSProperties } from "react";

export var Button = observer(function (props: {
    children?: JSX.Element | string | React.ReactNode,
    onClick?:(event:React.MouseEvent)=>void,
    block?: boolean,
    style?: CSSProperties
}) {
    var style: CSSProperties = Object.assign({}, props.style || {});

    return <div className="seer-input" onClick={props.onClick} style={style}>
        <button>{props.children}</button>
    </div>
})