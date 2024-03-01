// import React from "react";
// import { ParameterType } from "../../../design/block";
// import { Flow, Parameter } from "../../../design/component/parameter";
// import { BlockView, BlockCompile } from "../../base";
// import { view, compile, declare } from "../../factory/observable";

// declare({
//     url: '/seer/base/for',
//     parameters: [
//         { name: 'start', text: '起始', type: ParameterType.int, in: true },
//         { name: 'end', text: '结束', type: ParameterType.int, in: true },
//         { name: 'step', text: '步长', type: ParameterType.int, in: true },
//         { name: 'action', text: '循环执行', type: ParameterType.flow, args: [{ type: ParameterType.int }] }
//     ]
// });
// @view('/seer/base/for')
// class BaseForView extends BlockView {
//     render() {
//         return <div>
//             <div>
//                 for循环
//                 <Parameter block={this.props.block} name='start'></Parameter>
//                 <Parameter block={this.props.block} name='end'></Parameter>
//                 <Parameter block={this.props.block} name='step'></Parameter>
//             </div>
//             <Flow block={this.props.block} name='action'></Flow>
//         </div>
//     }
// }

// @compile('/seer/base/for')
// class BaseForCompile extends BlockCompile {
//     generate(): string | void {
//         throw new Error("Method not implemented.");
//     }
// }


// declare({
//     url: '/seer/base/while',
//     parameters: [
//         { name: 'condition', type: ParameterType.bool, in: true },
//         { name: 'do', text: '执行', type: ParameterType.flow }
//     ]
// });
// @view('/seer/base/while')
// class BaseWhileView extends BlockView {
//     render() {
//         return <div>
//             条件:<Parameter block={this.props.block} name='condition'></Parameter>
//             <Flow block={this.props.block} name='do'></Flow>
//         </div>
//     }
// }

// @compile('/seer/base/while')
// class BaseWhileCompile extends BlockCompile {
//     generate(): string | void {
//         throw new Error("Method not implemented.");
//     }
// }


// declare({
//     url: '/seer/base/break',
//     parameters: [
//     ]
// });
// @view('/seer/base/break')
// class BaseBreakView extends BlockView {
//     render() {
//         return <div>
//             终止循环
//         </div>
//     }
// }

// @compile('/seer/base/Break')
// class BaseBreakCompile extends BlockCompile {
//     generate(): string | void {
//         throw new Error("Method not implemented.");
//     }
// }


// declare({
//     url: '/seer/base/continue',
//     parameters: [
//     ]
// });

// @view('/seer/base/continue')
// class BaseContinueView extends BlockView {
//     render() {
//         return <div>
//             结束本次循环
//         </div>
//     }
// }

// @compile('/seer/base/continue')
// class BaseContinueCompile extends BlockCompile {
//     generate(): string | void {
//         throw new Error("Method not implemented.");
//     }
// }