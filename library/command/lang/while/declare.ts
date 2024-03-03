import { AgeDataType } from "../../../../src/app/block/express";
import { declare } from "../../../factory/observable";

declare([
    {
        url: '/age/while',
        text: '循环',
        args: [
            {
                name: 'condition',
                text: '条件',
                type: AgeDataType.bool,
            },
            {
                name: 'do',
                text: '执行',
                type: AgeDataType.flow
            }
        ]
    },
    {
        url: '/age/while/break',
        text: '中断循环',
        args: []
    },
    {
        url: '/age/while/continue',
        text: '继续循环',
        args: []
    }
])