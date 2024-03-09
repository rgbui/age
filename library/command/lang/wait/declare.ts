import { AgeDataType } from "../../../../src/flow/block/express";
import { declare } from "../../../factory/observable";

declare([
    {
        url: '/age/wait',
        text: '等待',
        args: [
            {
                name: 'time',
                text: '时间',
                required: true,
                type: AgeDataType.number
            }
        ]
    }
])