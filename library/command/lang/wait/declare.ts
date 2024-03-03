import { AgeDataType } from "../../../../src/app/block/express";
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