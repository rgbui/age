import { observer } from "mobx-react";
import React, { CSSProperties } from "react";
import "./style.less";

export var Icon = observer(function (props: {
    icon: SvgrComponent,
    onClick?: (e: React.MouseEvent) => void,
    size?: number,
    style?: CSSProperties,
    className?: string | string[]
}) {
    var style: CSSProperties = Object.assign({ width: 16, height: 16 }, props.style || {});
    if (props.size) { style.width = props.size; style.height = props.size; }
    var classList: string[] = ['seer-icon'];
    if (props.className) {
        if (Array.isArray(props.className)) classList.push(...props.className)
        else classList.push(props.className)
    }
    return <div className={classList.join(' ')} onClick={props.onClick} style={style}>
        <props.icon></props.icon>
    </div>
})