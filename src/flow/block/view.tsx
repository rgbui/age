import React from "react";
import { Block } from ".";
import { observer } from "mobx-react";


@observer
export class ExpressView extends React.Component<{ block: Block, name: string }>{
    render() {
        var arg = this.props.block.prop(this.props.name);
        var text = arg.express_text || arg.value;
        if (arg.name == 'const') text = arg.value;
        else if (arg.name == 'var') text = arg.value;
        return <span>{text}</span>
    }
}