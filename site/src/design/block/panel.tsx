import React from "react";
import { Block } from ".";
export class BlockPanel extends React.Component<{ block: Block }> {
    render() {
        return <div className="seer-block">
            <this.props.block.BlockView block={this.props.block}></this.props.block.BlockView>
        </div>
    }
}