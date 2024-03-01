import { observer } from "mobx-react";
import React from "react";
import { store } from "../store";
import { Icon } from "../component/view/icon";
import { Input } from "../component/view/input";
import { ArrowDownSvg, ArrowRightSvg, EllipsisSvg, FileSvg, FolderOpenSvg, FolderSvg, PlusSvg } from "../../svgs";
import { TaskItem, TaskItemType } from "./store";
import "./style.less";
export var TaskView = observer(function () {
    function renderTaskStore(tasks: TaskItem[], deep: number = 0) {
        return tasks.map(ta => {
            return <div className={"seer-task-item" + (ta.id == store.taskTreeStore.openTaskId ? " selected" : "")} key={ta.id}>
                <a onClick={e => store.taskTreeStore.onOpenTask(ta)}
                    onContextMenu={e => store.taskTreeStore.onContextmenuItem(e, ta)} style={{ paddingLeft: deep * 15 }}>
                    {store.taskTreeStore.taskEditId !== ta.id && <>
                        <span className="seer-task-item-spread" >{ta.type == TaskItemType.folder && <Icon icon={ta.spread ? ArrowRightSvg : ArrowDownSvg}></Icon>}</span>
                        <Icon icon={ta.type == TaskItemType.folder ? (ta.spread ? FolderOpenSvg : FolderSvg) : FileSvg}></Icon>
                        <span className="seer-task-item-text">{ta.text}</span>
                        <span className="seer-task-item-operators">{ta.type == TaskItemType.folder && <Icon icon={PlusSvg}></Icon>}<Icon onClick={e => { e.stopPropagation(); store.taskTreeStore.onContextmenuItem(e, ta) }} icon={EllipsisSvg}></Icon></span>
                    </>}
                    {store.taskTreeStore.taskEditId == ta.id && <Input></Input>}
                </a>
                {ta.childs.length > 0 && renderTaskStore(ta.childs, deep + 1)}
            </div>
        })
    }

    return <div className='seer-tasks'>
        <div className="seer-tasks-search">
            <Input></Input>
            <button onClick={e => store.taskTreeStore.onOpenPlus(e)}><Icon icon={PlusSvg}></Icon></button>
        </div>
        <div className="seer-tasks-list">
            {renderTaskStore(store.taskTreeStore.tasks)}
        </div>
    </div>
})