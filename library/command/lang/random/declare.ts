import { AgeDataType } from "../../../../src/app/block/express";
import { declare } from "../../../factory/observable";


declare([
    {
        url: '/age/random/number',
        text: '随机数',
        args: [
            { name: 'min', text: '最小值', type: AgeDataType.number },
            { name: 'max', text: '最大值', type: AgeDataType.number },
            { name: 'number', text: '随机数', out: true, type: AgeDataType.number }
        ]
    },
    {
        url: '/age/random/text',
        text: '随机文本',
        args: [
            { name: 'length', text: '长度', type: AgeDataType.number },
            {
                name: 'text_types',
                text: '文本类型',
                type: AgeDataType.intArray,
                defaultValue: [1, 2],
                options: [
                    { text: '数字', value: 1 },
                    { text: '字母', value: 2 },
                    { text: '特殊字符', value: 3 },
                    { text: '中文', value: 4 }
                ]
            },
            { name: 'text', text: '随机文本', out: true, type: AgeDataType.text }
        ]
    }
])