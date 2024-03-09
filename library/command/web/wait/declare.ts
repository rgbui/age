import { AgeDataType } from "../../../../src/flow/block/express";
import { declare } from "../../../factory/observable";
import { WebElementTypes } from "../declare";

declare([
    {
        url: '/age/web/wait_visible',
        text: '等待元素',
        args: [
            { name: 'webPage', text: '页面', type_url: WebElementTypes.WebPage },
            { name: 'selector', text: '选择器', type_url: WebElementTypes.WebElement },
            { name: 'timeout', text: '超时时间', type: AgeDataType.number, defaultValue: 10000 },
        ]
    }
])