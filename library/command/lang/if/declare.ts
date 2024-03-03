

import { AgeDataType } from "../../../../src/app/block/express";
import { declare } from "../../../factory/observable";




declare([
    {
        url: '/age/if',
        text: '条件语句',
        args: [
            { name: 'condition', text: '条件', type: AgeDataType.bool },
            { name: 'do', text: '执行', type: AgeDataType.flow },
            { name: 'else', text: '否则执行', type: AgeDataType.flow }
        ]
    }
])