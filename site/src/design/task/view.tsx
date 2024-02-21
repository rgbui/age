import { observer } from "mobx-react";
import React from "react";
import { BlockPanel } from "../block/panel";
import { TaskStore } from "./store";

@observer
export class TaskView extends React.Component<{ store: TaskStore }>{
    render() {
        return <div className='seer-design'>
            {this.props.store.blocks.map(b => {
                return <BlockPanel key={b.id} block={b}></BlockPanel>
            })}
        </div>
    }
}

