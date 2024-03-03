import { AgeDataType } from "../../../../app/block/express";
import { declare } from "../../../factory/observable";


declare([
    {
        url: '/age/json/parse',
        text: '解析JSON',
        args: [
            { name: 'json', text: 'JSON字符串', required: true, type: AgeDataType.text },
            { name: 'object', text: '对象', out: true, type: AgeDataType.json }
        ]
    },
    {
        url: '/age/json/stringify',
        text: '转换为JSON',
        args: [
            { name: 'object', text: '对象', required: true, type: AgeDataType.json },
            { name: 'json', text: 'JSON字符串', out: true, type: AgeDataType.text }
        ]
    },
    {
        url: '/age/json/get',
        text: '获取JSON属性',
        args: [

            { name: 'json', text: 'JSON对象', required: true, type: AgeDataType.json },
            { name: 'property', text: '属性', required: true, type: AgeDataType.text },

            { name: 'asText', text: '文本值', out: true, type: AgeDataType.text },
            { name: 'asNumber', text: '数字', out: true, type: AgeDataType.number },
            { name: 'asBool', text: '布尔', out: true, type: AgeDataType.bool },
            { name: 'asStringArray', text: '文本数组', out: true, type: AgeDataType.textArray },
            { name: 'asNumberArray', text: '数字数组', out: true, type: AgeDataType.numberArray },
            { name: 'asTable', text: '表格', out: true, type: AgeDataType.jsonArray }
        ]
    },
    {
        url: '/age/json/set',
        text: '设置JSON属性',
        args: [
            { name: 'json', text: 'JSON字符串', required: true, type: AgeDataType.text },
            { name: 'property', text: '属性', required: true, type: AgeDataType.text },
            {
                name: 'value',
                text: '值',
                required: true,
                types: [
                    AgeDataType.text,
                    AgeDataType.int,
                    AgeDataType.number,
                    AgeDataType.bool,
                    AgeDataType.json,
                    AgeDataType.textArray,
                    AgeDataType.numberArray,
                    AgeDataType.jsonArray
                ]
            }

        ]
    }
])