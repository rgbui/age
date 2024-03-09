import React from "react";
import { Task } from ".";
import { Block } from "../block";
import { ExpressView } from "../block/view";

export class TaskView extends React.Component<{
    task: Task
}> {
    componentDidUpdate(prevProps: Readonly<{ task: Task; }>, prevState: Readonly<{}>, snapshot?: any): void {
        if (prevProps.task?.id != this.props.task?.id) {
            this.forceUpdate()
        }
    }

    renderBlock(block: Block) {
        var ts = block.getTemplates();
        var bd = block.getBlockData();
        return <div key={block.id} onMouseDown={e => {
            this.props.task.onSelect(block, e)
        }}>
            <div className="flex">
                <div className="flex-fixed">

                </div>
                <div className="flex-auto">
                    <div className="bold">{bd.text}</div>
                </div>
                <div className="remark">
                    {ts.map((t, i) => {
                        if (t.name) return <ExpressView key={i} block={block} name={t.name}></ExpressView>
                        else return <span key={i}>{t.text}</span>
                    })}
                </div>
            </div>
        </div>
    }
    render() {
        return <div>
            {this.props.task.blocks.map(block => {
                return this.renderBlock(block);
            })}
        </div>
    }
}