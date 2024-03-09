import { computed, makeObservable, observable } from "mobx";
import { AgeExpress } from "./block/express";
import { Task } from "./task";
import { util } from "../../util/util";
import lodash from "lodash";

export enum FlowItemType {
    folder = 'folder',
    flow = 'flow',
    api = 'api',
    data = 'data',
    category = 'category'
}

export enum FlowItemApiType {
    get = 'get',
    post = 'post',
    put = 'put',
    delete = 'delete',
    patch = 'patch',
}

export type FlowItem = {
    id?: string;
    text: string;
    description?: string;
    type: FlowItemType;
    spread?: boolean;
    at?: number;
    date?: number;
    creater?: string;
    apiType?: FlowItemApiType;
    args?: AgeExpress[];
    childs?: FlowItem[]
}

export class FlowStore {
    constructor() {
        this.load();
        makeObservable(this, {
            items: observable,
            selectItems: observable,
            tasks: observable,
            slnWidth:observable,
            selectItem: computed
        })
    }
    items: FlowItem[] = [];
    selectItems: { task?: Task, item: FlowItem, selected: boolean, selectDate: number }[] = [];
    tasks?: Task[] = [];
    load() {
        this.items = [
            {
                id: util.guid(),
                text: '流程',
                type: FlowItemType.category,
                spread: true,
                childs: [
                    {
                        id: util.guid(),
                        text: '流程',
                        type: FlowItemType.flow
                    }
                ]
            },
            {
                id: util.guid(),
                text: '数据表',
                type: FlowItemType.category,
                spread: true,
                childs: [
                    {
                        id: util.guid(),
                        text: '表1',
                        type: FlowItemType.data
                    }
                ]
            },
            {
                id: util.guid(),
                text: '接口',
                type: FlowItemType.category,
                spread: true,
                childs: [{
                    id: util.guid(),
                    text: '接口1',
                    type: FlowItemType.api,
                    apiType: FlowItemApiType.get
                }]
            }
        ]
    }
    get selectItem() {
        return this.selectItems.find(g => g.selected);
    }
    onSelect(item: FlowItem) {
        var si = this.selectItems.find(g => g?.item?.id == item.id);
        if (!si) {
            si = {
                item,
                selected: true,
                selectDate: new Date().getTime()
            }
            this.selectItems.push(si);
        }
        if (!(si?.task && this.tasks.some(s => s.id == si?.task?.id))) {
            var ta = new Task({
                id: util.guid(),
                blocks: [
                    { id: util.guid(), url: '/age/string/length' },
                    { id: util.guid(), url: '/age/string/match' }
                ]
            });
            si.task = ta;
            lodash.remove(this.tasks, t => t.id == ta.id);
            this.tasks.push(si.task);
        }
    }
    slnWidth=250
}

export var flowStore = new FlowStore();