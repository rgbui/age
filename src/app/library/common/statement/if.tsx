import React from "react";
import { ParameterType } from "../../../design/block";
import { ArrayParameter } from "../../../design/component/parameter";
import { BlockView, BlockCompile } from "../../base";
import { view, compile, declare } from "../../factory/observable";

declare({
    url: '/seer/base/if',
    parameters: [
        {
            name: 'ifs',
            type: ParameterType.objectArray,
            objectProps: [
                { name: 'condition', type: ParameterType.bool, in: true },
                { name: 'do', type: ParameterType.flow }
            ]
        }
    ]
});
@view('/seer/base/if')
class BaseIfView extends BlockView {
    render() {
        return <div>
            <ArrayParameter block={this.props.block} name={'ifs'}></ArrayParameter>
        </div>
    }
}

@compile('/seer/base/if')
class BaseIfCompile extends BlockCompile {
    generate(): string | void {
        throw new Error("Method not implemented.");
    }
}