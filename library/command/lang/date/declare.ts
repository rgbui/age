import { AgeDataType } from "../../../../src/flow/block/express";
import { declare } from "../../../factory/observable";

declare([
    {
        url: '/age/date/now',
        text: '当前时间',
        args: [
            { name: 'date', text: '日期', out: true, type: AgeDataType.date }
        ]
    },
    {
        url: '/age/date/addOrSubtract',
        text: '日期加减',
        description: '在指定日期时间上进行时间增加或者减少，支持文本格式的日期',
        args: [
            { name: 'date', text: '日期', type: AgeDataType.date },
            {
                name: 'unit',
                text: '单位',
                type: AgeDataType.text,
                options: [
                    { text: '年', value: 'year' },
                    { text: '月', value: 'month' },
                    { text: '日', value: 'day' },
                    { text: '时', value: 'hour' },
                    { text: '分', value: 'minute' },
                    { text: '秒', value: 'second' }
                ]
            },
            {
                name: 'number',
                text: '数量',
                type: AgeDataType.number
            },
            { name: 'date_instance', text: '日期', out: true, type: AgeDataType.date }
        ]
    },
    {
        url: '/age/date/diff',
        text: '日期间隔',
        description: '计算两个日期之间的间隔',
        args: [
            { name: 'start', text: '开始时间', type: AgeDataType.date },
            { name: 'end', text: '结束时间', type: AgeDataType.date },
            {
                name: 'unit', text: '单位', type: AgeDataType.text,
                options: [
                    { text: '年', value: 'year' },
                    { text: '月', value: 'month' },
                    { text: '日', value: 'day' },
                    { text: '时', value: 'hour' },
                    { text: '分', value: 'minute' },
                    { text: '秒', value: 'second' }
                ]
            },
            { name: 'number', text: '数量', type: AgeDataType.number }
        ]
    },
    {
        url: '/age/date/format',
        text: '日期格式化',
        description: '将日期格式化为指定格式',
        args: [
            { name: 'date', text: '日期', type: AgeDataType.date },
            { name: 'format', text: '格式', type: AgeDataType.text },
            { name: 'date_text', text: '日期文本', out: true, type: AgeDataType.text }
        ]
    },
    {
        url: '/age/date/case',
        text: '日期转换',
        description: '将日期转换为指定格式',
        args: [
            { name: 'date_text', text: '日期文本', type: AgeDataType.date },
            {
                name: 'format',
                text: '格式',
                type: AgeDataType.text,
                // options: [
                //     { text: '年月日', value: 'yyyy-MM-dd' },
                //     { text: '年月日时分秒', value: 'yyyy-MM-dd HH:mm:ss' },
                //     { text: '年月日时分', value: 'yyyy-MM-dd HH:mm' },
                //     { text: '年月日时', value: 'yyyy-MM-dd HH' },
                //     { text: '年月日', value: 'yyyy-MM-dd' },
                //     { text: '年月', value: 'yyyy-MM' },
                //     { text: '年', value: 'yyyy' }
                // ]
            },
            { name: 'date', text: '日期', out: true, type: AgeDataType.date },
        ]
    },
    {
        url: '/age/date/parts',
        text: '日期分解',
        description: '获取日期时间的年、月、日、时、分、秒、星期、当月最后一天、当年第几周、当年第几天',
        args: [
            { name: 'date', text: '日期', type: AgeDataType.date },
            { name: 'date_parts_year', text: '年', out: true, type: AgeDataType.number },
            { name: 'date_parts_month', text: '月', out: true, type: AgeDataType.number },
            { name: 'date_parts_day', text: '日', out: true, type: AgeDataType.number },
            { name: 'date_parts_hour', text: '时', out: true, type: AgeDataType.number },
            { name: 'date_parts_minute', text: '分', out: true, type: AgeDataType.number },
            { name: 'date_parts_second', text: '秒', out: true, type: AgeDataType.number },
            { name: 'date_parts_week', text: '星期', out: true, type: AgeDataType.number },
            { name: 'date_parts_year_week', text: '当年第几周', out: true, type: AgeDataType.number },
            { name: 'date_parts_year_day', text: '当年第几天', out: true, type: AgeDataType.number },
        ]
    },
    {
        url: '/age/date/toTimestamp',
        text: '日期转时间戳',
        description: '将日期转换为时间戳',
        args: [
            { name: 'date', text: '日期', type: AgeDataType.date },
            { name: 'timestamp', text: '时间戳', out: true, type: AgeDataType.number }
        ]
    },
    {
        url: '/age/date/fromTimestamp',
        text: '时间戳转日期',
        description: '将时间戳转换为日期',
        args: [
            { name: 'timestamp', text: '时间戳', type: AgeDataType.number },
            { name: 'date', text: '日期', out: true, type: AgeDataType.date }
        ]
    }
])