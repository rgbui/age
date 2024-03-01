// import lodash from "lodash";
// import { computed, makeObservable } from "mobx";
// import { BlockFactory } from "../../library/factory/block.factory";
// import { util } from "../../../util/util";

// export enum ParameterType {
//     string,
//     int,
//     bool,
//     double,
//     date,
//     object,
//     unitArray,
//     objectArray,
//     flow,
//     fun,
//     any
// }

// export type BlockParameter = {
//     name?: string;
//     text?: string;
//     type: ParameterType,
//     out?: boolean,
//     in?: boolean,
//     objectProps?: BlockParameter[],
//     unitParameter?: BlockParameter,
//     args?: BlockParameter[];
//     returnType?: BlockParameter
// }

// export class Block {
//     constructor(options, parent?: Block) {
//         if (parent) this.parent = parent;
//         if (options) this.load(options);
//     }
//     parent: Block;
//     blocks: Record<string, Block[]> = {};
//     id: string = util.guid();
//     url: string = '';
//     parameters: BlockParameter[] = [];
//     get BlockView() {
//         return BlockFactory.getView(this.url)
//     }
//     prop(name: string): BlockParameter {
//         return this.parameters.find(g => g.name == name);
//     }
//     load(data: Record<string, any>) {
//         if (!data) data = {};
//         for (let n in data) {
//             if (n == 'blocks') {
//                 for (let k in data[n]) {
//                     this.blocks[k] = data[n][k].map(c => new Block(c, this));
//                 }
//             }
//             else this[n] = data[n];
//         }
//     }
//     get() {
//         var bs: Record<string, any> = {};
//         for (var b in this.blocks) {
//             bs[b] = this.blocks[b].map(g => g.get())
//         }
//         return {
//             id: this.id,
//             url: this.url,
//             parameters: this.parameters.map(p => lodash.cloneDeep(p)),
//             blocks: bs
//         }
//     }
// }
