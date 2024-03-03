

import lodash from "lodash";
import { BlockFactory } from "../../../library/factory/block.factory";
import { AgeExpress } from "./express";
import { util } from "../../../util/util";
import { Task } from "../task";


export class Block {
    task: Task;
    url: string;
    args: AgeExpress[];
    flows: Block[] = [];
    flows1: Block[] = [];
    creater: string;
    createDate: number= new Date().getTime();
    constructor(task: Task, options, parent?: Block) {
        if (parent) this.parent = parent;
        if (options) this.load(options);
    }
    parent: Block;
    id: string = util.guid();
    get BlockView() {
        return BlockFactory.getView(this.url)
    }
    prop(name: string): AgeExpress {
        return this.args.find(g => g.name == name);
    }
    load(data: Record<string, any>) {
        if (!data) data = {};
        for (let n in data) {
            if (n.startsWith('flows')) {
                this[n] = data[n].map(c => new Block(this.task, c, this))
            }
            else this[n] = data[n];
        }
    }
    get() {
        return {
            id: this.id,
            url: this.url,
            creater: this.creater,
            createDate: this.createDate,
            args: this.args.map(p => p.get()),
            flows: this.flows.map(p => p.get()),
            flows1: this.flows1.map(p => p.get())
        }
    }
}
