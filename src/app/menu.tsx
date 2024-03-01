import { observer, useLocalObservable, useLocalStore } from "mobx-react";
import React from "react";
import { ShopView } from "./shop";
import { TaskView } from "./task";
export var MenuView = observer(function () {
    var local = useLocalObservable(() => {
        return {
            mode: 'task'
        }
    })
    function setMode(mode: string) { console.log(mode); local.mode = mode; }
    return <div className="seer-task-view-menu">
        <div className="seer-task-view-menu-head">
            <a onMouseDown={e => setMode('task')} className={local.mode == 'task' ? "hover" : ""}>任务</a>
            <a onMouseDown={e => setMode('shop')} className={local.mode == 'shop' ? "hover" : ""}>命令</a>
        </div>
        {local.mode == 'task' && <TaskView></TaskView>}
        {local.mode == 'shop' && <ShopView></ShopView>}
    </div>
})