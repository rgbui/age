import React from "react";
import { Parameter } from "../../../design/component/Parameter";
import { BlockCompile, BlockView } from "../../base";
import { compile, view } from "../../factory/observable";
@view('/string/upper')
class StringUpper extends BlockView {
    render() {
        return <div>
            <Parameter block={this.props.block} name='@this'></Parameter>
            生成大写的字母
            <Parameter block={this.props.block} name='result'></Parameter>
        </div>
    }
}

@compile('/string/upper')
class StringUpperCompile extends BlockCompile {
    generate(): string | void {
        throw new Error("Method not implemented.");
    }
}