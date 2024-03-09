

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
    createDate: number = new Date().getTime();
    constructor(task: Task, options, parent?: Block) {
        if (parent) this.parent = parent;
        if (options) this.load(options);
    }
    parent: Block;
    id: string = util.guid();
    prop(name: string): AgeExpress {
        return this.args.find(g => g.prop == name);
    }
    load(data: Record<string, any>) {
        if (!data) data = {};
        for (let n in data) {
            if (n.startsWith('flows')) {
                this[n] = data[n].map(c => new Block(this.task, c, this))
            }
            else this[n] = lodash.cloneDeep(data[n]);
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
    getBlockData() {
        var bd = BlockFactory.getBlock(this.url);
        return bd;
    }
    getTemplates() {
        var bd = this.getBlockData();
        var vt = typeof bd.viewTemplate == 'function' ? bd.viewTemplate(this) : bd.viewTemplate;
        var ps: { name?: string, text?: string }[] = [];
        var regex = /{([^}]+)}/g;
        var match;
        var lastIndex = 0;
        while ((match = regex.exec(vt)) !== null) {
            var textBefore = vt.substring(lastIndex, match.index);
            if (textBefore) {
                ps.push({ text: textBefore });
            }
            var variableName = match[1];
            ps.push({ name: variableName });
            lastIndex = match.index + match[0].length;
        }
        var textAfter = vt.substring(lastIndex);
        if (textAfter) {
            ps.push({ text: textAfter });
        }
        return ps;
    }
}
