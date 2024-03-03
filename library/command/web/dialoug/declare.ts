import { AgeDataType } from "../../../../src/app/block/express";
import { declare } from "../../../factory/observable";
import { WebElementTypes } from "../declare";

declare([
    {
        url: '/age/web/dialoug/upload',
        text: '上传文件',
        args: [
            { name: 'webPage', text: '页面', type_url: WebElementTypes.WebPage },
            { name: 'selector', text: '选择器', type_url: WebElementTypes.WebElement },
            { name: 'file', text: '文件路径', type: AgeDataType.text }
        ]
    },
    {
        url: '/age/web/dialoug/download',
        text: '下载文件',
        args: [
            { name: 'webPage', text: '页面', type_url: WebElementTypes.WebPage },
            { name: 'ele', text: '元素', type_url: WebElementTypes.WebElement },
            { name: 'saveDir', text: '保存文件夹', type: AgeDataType.text },
        ]
    },
    {
        url: '/age/web/dialoug',
        text: '处理网页对话框',
        args: [
            { name: 'webPage', text: '页面', type_url: '/age/web/webPage' },
            {
                name: 'confirmButton',
                text: '确认按钮',
                type: AgeDataType.int,
                remark: '当对话框是confirm时，需要选择确认按钮',
                options: [
                    { text: '确定', value: 1 },
                    { text: '取消', value: 2 },
                ]
            },
            {
                name: 'input',
                text: '输入',
                type: AgeDataType.text,
                remark: '当对话框是prompt时，需要输入内容'
            }
        ]
    }

])