import { AgeDataType } from "../../../../app/block/express";
import { declare } from "../../../factory/observable";
import { WebElementTypes } from "../declare";


declare([
    {
        url: '/age/web/if_visible',
        text: '如果元素可见',
        args: [
            { name: 'webPage', text: '页面', type_url: '/age/web/webPage' },
            { name: 'selector', text: '选择器', type_url: WebElementTypes.WebElement },
            { name: 'do', text: '执行', type: AgeDataType.flow },
            { name: 'else', text: '否则执行', type: AgeDataType.flow }
        ]
    },
    {
        url: '/age/web/if_contains',
        text: '如果元素存在',
        args: [
            { name: 'webPage', text: '页面', type_url: '/age/web/webPage' },
            { name: 'selector', text: '选择器', type_url: WebElementTypes.WebElement },
            { name: 'do', text: '执行', type: AgeDataType.flow },
            { name: 'else', text: '否则执行', type: AgeDataType.flow }
        ]
    }
])