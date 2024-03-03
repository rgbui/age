

import lodash from "lodash";
import { BlockFactory } from "../../library/factory/block.factory";
import { AgeExpress } from "./express";
import { util } from "../../../util/util";
import { Task } from "../task";

export class Block {
    task?: Task;
    url: string;
    args: AgeExpress[];
    flow: Block[] = [];
    flow1: Block[] = [];
    constructor(options, parent?: Block) {
        if (parent) this.parent = parent;
        if (options) this.load(options);
    }
    parent: Block;
    blocks: Record<string, Block[]> = {};
    id: string = util.guid();
    get BlockView() {
        return BlockFactory.getView(this.url)
    }
    prop(name: string):  AgeExpress {
        return this.args.find(g => g.name == name);
    }
    load(data: Record<string, any>) {
        if (!data) data = {};
        for (let n in data) {
            if (n == 'blocks') {
                for (let k in data[n]) {
                    this.blocks[k] = data[n][k].map(c => new Block(c, this));
                }
            }
            else this[n] = data[n];
        }
    }
    get() {
        var bs: Record<string, any> = {};
        for (var b in this.blocks) {
            bs[b] = this.blocks[b].map(g => g.get())
        }
        return {
            id: this.id,
            url: this.url,
            args: this.args.map(p => lodash.cloneDeep(p)),
            blocks: bs
        }
    }
}
