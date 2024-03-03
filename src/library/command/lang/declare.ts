import { AgeDataType } from "../../../app/block/express";
import { declare } from "../../factory/observable";

/**
 * 描述：创建一个新变量并给它赋值，或对已经存在的变量重新赋值
 */
declare([
    {
        url: '/age/var/text',
        text: '设置文本变量',
        args: [
            { name: 'value', text: '变量值', type: AgeDataType.text },
            {
                name: 'text',
                text: '文本变量名',
                out: true,
                type: AgeDataType.text
            }
        ]
    },
    {
        url: '/age/var/number',
        text: '设置数字变量',
        args: [
            { name: 'value', text: '变量值', type: AgeDataType.number },
            {
                name: 'number',
                text: '数字变量名',
                out: true,
                type: AgeDataType.number
            }
        ]
    },
    {
        url: '/age/var/bool',
        text: '设置布尔变量',
        args: [
            { name: 'value', text: '变量值', type: AgeDataType.bool },
            {
                name: 'bool',
                text: '布尔变量名',
                out: true,
                type: AgeDataType.bool
            }
        ]
    },
    {
        url: '/age/var/text_array',
        text: '设置文本数组变量',
        args: [
            { name: 'value', text: '变量值', type: AgeDataType.textArray },
            {
                name: 'text_array',
                text: '文本数组变量名',
                out: true,
                type: AgeDataType.textArray
            }
        ]
    },
    {
        url: '/age/var/number_array',
        text: '设置数字数组变量',
        args: [
            { name: 'value', text: '变量值', type: AgeDataType.textArray },
            {
                name: 'number_array',
                text: '数字数组变量名',
                out: true,
                type: AgeDataType.textArray
            }
        ]
    },
    {
        url: '/age/var/json',
        text: '设置json变量',
        args: [
            { name: 'value', text: '变量值', type: AgeDataType.json },
            {
                name: 'json',
                text: 'json变量名',
                out: true,
                type: AgeDataType.json
            }
        ]
    },
    {
        url: '/age/var/table',
        text: '设置表格变量',
        args: [
            { name: 'value', text: '变量值', type: AgeDataType.jsonArray },
            {
                name: 'table',
                text: '表格变量名',
                out: true,
                type: AgeDataType.jsonArray
            }
        ]
    }
])