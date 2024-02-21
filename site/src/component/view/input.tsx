import { observer } from "mobx-react";
import React from "react";
import { CSSProperties } from "react";
import "./style.less";
export var Input = observer(function (props: {

    placeholder?: string,
    onChange?: (value: string) => void,
    onEnter?: (value) => void,
    value?: string,
    style?: CSSProperties,
    ignoreFilterWhitespace?: boolean,
    clear?: boolean,

}) {

    function filterValue(value: string) {
        if (props.ignoreFilterWhitespace == true) return value;
        return value.trim()
    }
    function onInput(e: React.FormEvent<HTMLInputElement>) {
        var value = filterValue((e.target as HTMLInputElement).value)
        props.onChange && props.onChange(value);
    }
    function keydown(e: React.KeyboardEvent) {
        if (e.key == 'Enter' && props.onEnter) {
            props.onEnter(filterValue((e.target as HTMLInputElement).value));
        }
    }
    var style: CSSProperties = Object.assign({}, props.style || {});
    return <div className="seer-input" style={style}>
        <input defaultValue={props.value} onKeyDown={e => keydown(e)} onInput={e => onInput(e)} />
    </div>
})