import { AgeDataType } from "../../../../src/app/block/express";
import { declare } from "../../../factory/observable";

declare([{
    url: '/age/net/http',
    text: 'http请求',
    args: [
        {
            name: 'headers',
            text: '请求头',
            type: AgeDataType.text
        },
        {
            name: 'body',
            type: AgeDataType.dic
        },
        {
            name: 'method',
            text: '请求方法',
            type: AgeDataType.text,
            options: [
                { text: 'GET', value: 'GET' },
                { text: 'POST', value: 'POST' },
                { text: 'PUT', value: 'PUT' },
                { text: 'DELETE', value: 'DELETE' }
            ]
        },
        {
            name: 'url',
            text: '请求地址',
            type: AgeDataType.text
        },
        {
            name: 'responseAsText',
            text: '响应的文本值',
            out: true,
            type: AgeDataType.text
        },
        {
            name: 'responseAsJson',
            text: '响应的json值',
            out: true,
            type: AgeDataType.json
        },
        {
            name: 'responseAsJsonArray',
            text: '响应的json数组值',
            out: true,
            type: AgeDataType.jsonArray
        }
    ]
}])