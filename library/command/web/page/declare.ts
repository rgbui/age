import { AgeDataType } from "../../../../src/flow/block/express";
import { declare } from "../../../factory/observable";
import { WebElementTypes } from "../declare";
declare([
    {
        url: '/age/web/page/open',
        text: '打开页面',
        args: [
            { name: 'url', text: '网址', type: AgeDataType.text },
            { name: 'webPage', text: '页面', out: true, type_url: WebElementTypes.WebPage }
        ]
    },
    {
        url: '/age/web/page/one',
        text: '获取已打开的网页对象',
        args: [
            {
                name: 'pattern',
                text: '模式',
                type: AgeDataType.int,
                options: [
                    {
                        text: '标题',
                        value: 1
                    },
                    {
                        text: '网址',
                        value: 2
                    },
                    {
                        text: '当前选中的页面',
                        value: 3
                    }
                ]
            },
            {
                name: 'match',
                text: '匹配',
                type: AgeDataType.text,
            },
            { name: 'webPage', out: true, text: '页面', type_url: WebElementTypes.WebPage }
        ]
    },
    {
        url: '/age/web/page/list',
        text: '获取网页对象',
        args: [
            {
                name: 'pattern',
                text: '模式',
                type: AgeDataType.int,
                options: [
                    {
                        text: '标题',
                        value: 1
                    },
                    {
                        text: '网址',
                        value: 2
                    },
                    {
                        text: '所有',
                        value: 3
                    }
                ]
            },
            {
                name: 'match',
                text: '匹配',
                type: AgeDataType.text,
            },
            { name: 'web_pages', out: true, text: '页面', type: AgeDataType.unitArray, unit_type: WebElementTypes.WebPage }
        ]
    },
    {
        url: '/age/web/page/redicet',
        text: '页面跳转',
        args: [
            { name: 'webPage', text: '页面', type_url: WebElementTypes.WebPage },
            {
                name: "redicet_pattern",
                text: '跳转模式',
                type: AgeDataType.int,
                options: [
                    { text: '前进', value: 1 },
                    { text: '后退', value: 2 },
                    { text: '刷新', value: 3 },
                    { text: '跳转', value: 4 },
                    { text: '跳转并打开', value: 5 },
                ]
            },
            { name: 'url', text: '网址', type: AgeDataType.text },
            { name: 'load_delay', text: '加载延时时', type: AgeDataType.number, defaultValue: 0 }
        ]
    },
    {
        url: '/age/web/page/close',
        text: '关闭页面',
        args: [
            {
                name: 'pattern',
                text: '模式',
                type: AgeDataType.int,
                options: [
                    {
                        text: '关闭选择的页面',
                        value: 1
                    },
                    {
                        text: '关闭所有页面',
                        value: 2
                    }
                ]
            },
            { name: 'webPage', text: '页面', type_url: WebElementTypes.WebPage }
        ]
    }
])

declare([
    {
        url: '/age/web/page/scroll',
        text: '滚动页面',
        args: [
            { name: 'webPage', text: '页面', type_url: WebElementTypes.WebPage },
            { name: 'target_scroll_ele', text: '滚动目标元素', type_url: WebElementTypes.WebElement },
            {
                name: 'position_pattern',
                text: '滚动位置',
                type: AgeDataType.int,
                options: [
                    { text: '滚动到底部', value: 1 },
                    { text: '滚动到顶部', value: 2 },
                    { text: '滚动指定位置', value: 3 },
                    { text: '滚动一屏', value: 4 },
                ]
            },
            {
                name: 'scroll_effect',
                text: '滚动效果',
                type: AgeDataType.int,
                options: [
                    { text: '立即滚动', value: 1 },
                    { text: '平滑滚动', value: 2 }
                ]
            },
            { name: 'scroll_to_ele', text: '滚动至元素', type_url: WebElementTypes.WebElement },
        ]
    },
    {
        url: '/age/web/page/excute_code',
        text: '执行js代码',
        description: 'fun(ele,args){ }',
        args: [
            { name: 'webPage', text: '页面', type_url: WebElementTypes.WebPage },
            { name: 'selector', text: '选择器', type_url: WebElementTypes.WebElement },
            { name: 'code', text: '代码', type: AgeDataType.code },
            { name: 'args', text: '参数', type: AgeDataType.text },
            { name: 'result', text: '结果', out: true, type: AgeDataType.text }
        ]
    }
]
)

declare([
    {
        url: '/age/web/page/scroll_pos',
        text: '获取滚动位置',
        args: [
            { name: 'webPage', text: '页面', type_url: WebElementTypes.WebPage },
            { name: 'target_scroll_ele', text: '滚动目标元素', type_url: WebElementTypes.WebElement },
            { name: 'y_pos', text: '垂直位置', out: true, type: AgeDataType.number },
            { name: 'x_pos', text: '水平位置', out: true, type: AgeDataType.number }
        ]
    },
    {
        url: '/age/web/page/info',
        text: '获取页面信息',
        args: [
            { name: 'webPage', text: '页面', type_url: WebElementTypes.WebPage },
            { name: 'title', text: '标题', out: true, type: AgeDataType.text },
            { name: 'url', text: '网址', out: true, type: AgeDataType.text },
            { name: 'source', text: '源代码', out: true, type: AgeDataType.text },
            { name: 'description', text: '描述', out: true, type: AgeDataType.text },
        ]
    }
])