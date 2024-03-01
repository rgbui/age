// import { makeObservable, observable } from "mobx";
// import { util } from "../../../util/util";
// import { Block } from "../block";

// export class TaskStore {
//     id: string = util.guid();
//     blocks: Block[] = [];
//     constructor(options: { id: string }) {
//         makeObservable(this, {
//             blocks: observable
//         })
//         this.load(options);
//     }
//     load(data) {
//         if (!data) return;
//         for (let n in data) { this[n] = data[n] }
//     }
//     loadDefault() {
//         var block = new Block({ url: '/seer/base/print' }, null)
//         this.blocks.push(block)
//     }
// }