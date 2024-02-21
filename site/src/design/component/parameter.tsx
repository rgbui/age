import React from "react";
import { Block } from "../block";
export class Parameter extends React.Component<{ block: Block, name: string }>{
    render() {
        var pa = this.props.block.prop(this.props.name);
        return <span>{pa?.text}</span>
    }
}

export class Flow extends React.Component<{ block: Block, name: string }>{
    render() {
        var pa = this.props.block.prop(this.props.name);
        return <div>{pa?.text}</div>
    }
}

export class UnitParameter extends React.Component<{ block: Block, name: string }>{
    render() {
        var pa = this.props.block.prop(this.props.name);
        return <span>{pa?.text}</span>
    }
}


export class ArrayParameter extends React.Component<{ block: Block, name: string }>{
    render() {
        var pa = this.props.block.prop(this.props.name);
        return <span>{pa?.text}</span>
    }
}