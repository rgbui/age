// import React from "react";
// import { ParameterType } from "../../../design/block";
// import { UnitParameter } from "../../../design/component/parameter";
// import { BlockView, BlockCompile } from "../../base";
// import { view, compile, declare } from "../../factory/observable";

// declare({
//     url: '/seer/base/print',
//     parameters: [
//         {
//             name: 'logs',
//             type: ParameterType.unitArray,
//             unitParameter: { text: '日志', in: true, type: ParameterType.any }
//         }
//     ]
// });
// @view('/seer/base/print')
// class BaseIfView extends BlockView {
//     render() {
//         return <div>
//             打印<UnitParameter block={this.props.block} name='logs'></UnitParameter>
//         </div>
//     }
// }

// @compile('/seer/base/print')
// class BaseIfCompile extends BlockCompile {
//     generate(): string | void {
//         throw new Error("Method not implemented.");
//     }
// }