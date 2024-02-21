import lodash from "lodash";
import { computed, makeObservable, observable, runInAction } from "mobx";
import React from "react";
import { Rect } from "../component/vector/point";
import { useSelectMenuItem } from "../component/view/menu";
import { MenuItemTypeValue } from "../component/view/menu/declare";
import { TaskStore } from "../design/task/store";
import { util } from "../util/util";
export enum TaskItemType {
    task,
    folder
}
export type TaskItem = {
    id: string,
    text: string,
    type: TaskItemType,
    spread: boolean,
    childs: TaskItem[]
}

export class TaskTreeStore {
    tasks: TaskItem[] = [];
    taskEditId: string = '';
    openTasks: { id: string, date: number }[] = [];
    openTaskId: string = '';
    constructor() {
        makeObservable(this, {
            tasks: observable,
            openTaskId: observable,
            taskEditId: observable,
            openTasks: observable,
            currentTaskStore: computed,
            currentTasks: computed,
            taskStores: observable
        })
    }
    get currentTasks() {
        var ts = this.openTasks;
        return ts.map(t => {
            var ta = this.tasks.arrayJsonFind('childs', g => g.id == t.id);
            return {
                id: t.id,
                text: ta.text,
                type: ta.type
            }
        })
    }
    get currentTaskStore() {
        return this.taskStores.find(g => g.id == this.openTaskId);
    }
    taskStores: TaskStore[] = [];
    async onOpenPlus(event: React.MouseEvent) {
        event.preventDefault();
        var us = await useSelectMenuItem({ roundArea: Rect.fromEle(event.target as HTMLElement) },
            [
                { name: 'task', text: '新建任务' },
                { name: 'group', text: '新建分组' },
                { type: MenuItemTypeValue.divide },
                { name: 'import', disabled: true, text: '导入' }
            ]
        );
        if (us) {
            if (us.item.name == 'task') this.onCreateTask();
            else if (us.item.name == 'group') this.onCreateGroup()
        }
    }
    onCreateTask() {
        var item = { id: util.guid(), type: TaskItemType.task, spread: false, childs: [], text: '任务' };
        var store = new TaskStore({ id: item.id });
        store.loadDefault();
        runInAction(() => {
            this.tasks.push(item);
            this.taskStores.push(store);
            this.openTaskId = item.id;
            this.openTasks.push({ id: item.id, date: Date.now() })
        })
    }
    onCreateGroup() {
        var item = { id: util.guid(), type: TaskItemType.folder, spread: true, childs: [], text: '分组' };
        runInAction(() => {
            this.tasks.push(item);
        })
    }
    onOpenTask(task: { id: string }) {
        runInAction(() => {
            var ta = this.tasks.find(g => g.id == task.id);
            if (ta.type == TaskItemType.folder) {
                ta.spread = ta.spread ? false : true;
            }
            else {
                this.openTaskId = task.id;
                if (!this.openTasks.some(s => s.id == task.id))
                    this.openTasks.push({ id: task.id, date: Date.now() })
                else {
                    var ot = this.openTasks.find(g => g.id == task.id);
                    ot.date = Date.now();
                }
                this.openTaskId = task.id;
                if (!this.taskStores.some(s => s.id == task.id)) {
                    var ts = new TaskStore({ id: task.id });
                    this.taskStores.push(ts);
                }
            }
        })
    }
    onCloseTask(task: { id: string }) {
        runInAction(() => {
            if (this.openTaskId == task.id) {
                lodash.remove(this.openTasks, g => g.id == task.id);
                var t = this.openTasks.findMax(g => g.date);
                if (t) {
                    this.openTaskId = t.id;
                }
            }
            else {
                lodash.remove(this.openTasks, g => g.id == task.id);
            }
        })
    }
    async onContextmenuNav(event: React.MouseEvent, task: { id: string }) {
        event.preventDefault();
        var us = await useSelectMenuItem({ roundArea: Rect.fromEle(event.target as HTMLElement) },
            [
                { name: 'close', text: '关闭' },
                { name: 'closeRight', text: '关闭右侧' },
                { name: 'closeOther', text: '关闭其它' },
                { type: MenuItemTypeValue.divide },
                { name: 'export', disabled: true, text: '导出' },
                { type: MenuItemTypeValue.divide },
                { name: 'save', disabled: true, text: '保存' }
            ]
        );
        if (us) {
            console.log(us);
        }
    }
    async onContextmenuItem(event: React.MouseEvent, task: { id: string }) {
        event.preventDefault();
        var us = await useSelectMenuItem({ roundArea: Rect.fromEle(event.target as HTMLElement) },
            [
                { name: 'rename', text: '重命名' },
                { name: 'copy', text: '复制' },
                { type: MenuItemTypeValue.divide },
                { name: 'rename', text: '导出' },
                { type: MenuItemTypeValue.divide },
                { name: 'delete', text: '删除' }
            ]
        );
        if (us) {
            console.log(us);
        }
    }
}