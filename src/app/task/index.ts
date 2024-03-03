import { Block } from "../block";
import { AgeExpress } from "../block/express";

export class Task {
    id: string;
    text: string;
    description: string;
    creater: string;
    createDate: number = new Date().getTime();
    blocks: Block[];
    args: AgeExpress[] = [];
    constructor(options) {
        if (options) this.load(options);
    }
    load(data: Record<string, any>) {
        if (!data) data = {};
        for (let n in data) {
            if (n == 'blocks') {
                this.blocks = data[n].map(c => new Block(this, c));
            }
            else if (n == 'args') {
                this.args = data[n].map(c => new AgeExpress(c))
            }
            else this[n] = data[n];
        }
    }
    get() {
        return {
            id: this.id,
            text: this.text,
            args: this.args.map(p => p.get()),
            description: this.description,
            creater: this.creater,
            createDate: this.createDate,
            blocks: this.blocks.map(p => p.get())
        }
    }
}