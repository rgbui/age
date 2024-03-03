import { AgeDataType } from "../../../../app/block/express";
import { declare } from "../../../factory/observable";
import { WebElementTypes } from "../declare";

declare([
    {
        url: '/age/web/while/ele',
        text: '循环相似元素操作',
        args: [
            { name: 'webPage', text: '页面', type_url: WebElementTypes.WebPage },
            { name: 'selector', text: '选择器', type_url: WebElementTypes.WebElement },
            {
                name: 'do',
                text: '执行',
                type: AgeDataType.flow
            },
            {
                name: 'loop_index',
                text: '循环索引',
                type: AgeDataType.number,
                out: true,
            },
            {
                name: 'loop_element',
                text: '循环元素',
                type_url: WebElementTypes.WebElement,
                out: true,
            },
            {
                name: 'loop_content',
                text: '循环元素内容',
                out: true,
                type: AgeDataType.text,
            },
            {
                name: 'loop_element_read',
                text: '循环元素读取',
                type: AgeDataType.int,
                options: [
                    { text: '元素对象', value: 0 },
                    { text: '元素文本内容', value: 1 },
                    { text: '元素数值', value: 2 },
                    { text: '元素布尔值', value: 3 },
                    { text: '元素链接地址', value: 4 },
                    { text: '元素源代码', value: 5 },
                    { text: '元素属性', value: 6 },
                ]
            },
            {
                name: 'loop_element_read_prop',
                text: '循环元素读取属性名',
                type: AgeDataType.text
            }
        ]
    }
])

