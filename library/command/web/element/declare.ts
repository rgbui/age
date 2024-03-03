import { AgeDataType } from "../../../../src/app/block/express";
import { declare } from "../../../factory/observable";
import { AgeCommonTypes } from "../../declare";
import { WebElementTypes } from "../declare";

declare([
    {
        url: '/age/web/ele/click',
        text: '点击',
        args: [
            { name: 'page', text: '页面', out: true, type_url: WebElementTypes.WebPage },
            { name: 'ele', text: '元素', type_url: WebElementTypes.WebElement },
            {
                name: 'click_type',
                text: '点击类型',
                type: AgeDataType.int,
                options: [
                    { text: '单击', value: 1 },
                    { text: '双击', value: 2 }
                ]
            },
            {
                name: 'mouse_button',
                text: '鼠标按键',
                type: AgeDataType.int,
                options: [
                    {
                        text: '左键',
                        value: 1
                    },
                    {
                        text: '右键',
                        value: 2
                    }
                ]
            },
            {
                name: 'click_key_modifiers',
                text: '点击键',
                remark: '点击元素时，同时按下快捷键',
                type: AgeDataType.text,
            },
            {
                name: 'click_position_pattern',
                text: '点击位置',
                type: AgeDataType.int,
                options: [
                    {
                        text: '中心', value: 1
                    },
                    {
                        text: '随机位置', value: 2
                    },
                    {
                        text: '指定位置', value: 3
                    }
                ]
            },
            {
                name: 'click_position',
                text: '点击位置',
                type_url: AgeCommonTypes.Point,
                remark: '点击元素的位置'
            },
            {
                name: 'wait',
                text: '等待点击',
                type: AgeDataType.int,
                remark: '等待点击时间,鼠标移过来，不会立码点击',
                defaultValue: 0
            }
        ]
    },
    {
        url: '/age/web/ele/hover',
        text: '悬停',
        args: [
            { name: 'page', text: '页面', out: true, type_url: WebElementTypes.WebPage },
            { name: 'ele', text: '元素', type_url: WebElementTypes.WebElement },
            {
                name: 'hover_position_pattern',
                text: '悬停位置',
                type: AgeDataType.int,
                options: [
                    {
                        text: '中心', value: 1
                    },
                    {
                        text: '随机位置', value: 2
                    },
                    {
                        text: '指定位置', value: 3
                    }
                ]
            },
            {
                name: 'hover_position',
                text: '悬停位置',
                type_url: AgeCommonTypes.Point,
                remark: '悬停元素的位置'
            },
            {
                name: 'hover_duration',
                text: '悬停时长',
                type: AgeDataType.int,
                remark: '悬停时长',
                defaultValue: 1
            }
        ]
    },
    {
        url: '/age/web/ele/input',
        text: '输入',
        args: [
            { name: 'page', text: '页面', out: true, type_url: WebElementTypes.WebPage },
            { name: 'ele', text: '元素', type_url: WebElementTypes.WebElement },
            { name: 'text', text: '输入文本', type: AgeDataType.text },
            {
                name: 'complete_key',
                text: '输入完成键',
                type: AgeDataType.text,
                remark: '输入完成后，按下的键'
            },
            {
                name: 'click_position_pattern',
                text: '点击位置',
                type: AgeDataType.int,
                options: [
                    {
                        text: '中心', value: 1
                    },
                    {
                        text: '随机位置', value: 2
                    },
                    {
                        text: '指定位置', value: 3
                    }
                ]
            },
            {
                name: 'click_position',
                text: '点击位置',
                type_url: AgeCommonTypes.Point,
                remark: '点击元素的位置'
            },
            {
                name: 'delay',
                text: '延迟时间',
                type: AgeDataType.int,
                remark: '延迟时间',
                defaultValue: 1
            }
        ]
    },
    {
        url: '/age/web/ele/drag',
        text: '拖拽',
        args: [
            { name: 'page', text: '页面', out: true, type_url: WebElementTypes.WebPage },
            { name: 'ele', text: '元素', type_url: WebElementTypes.WebElement },
            {
                name: 'drag_position_pattern',
                text: '拖拽位置',
                type: AgeDataType.int,
                options: [
                    {
                        text: '元素', value: 1
                    },
                    {
                        text: '指定位置', value: 3
                    }
                ]
            },
            { name: 'drop_ele', text: '元素', type_url: WebElementTypes.WebElement },
            {
                name: 'drag_position',
                text: '拖拽位置',
                type_url: AgeCommonTypes.Point,
                remark: '拖拽到指定位置'
            },
        ]
    },
    {
        url: '/age/web/ele/inputPaw',
        text: '填写密码框',
        args: [
            { name: 'page', text: '页面', out: true, type_url: WebElementTypes.WebPage },
            { name: 'ele', text: '元素', type_url: WebElementTypes.WebElement },
            { name: 'text', text: '输入文本', type: AgeDataType.text },
            {
                name: 'complete_key',
                text: '输入完成键',
                type: AgeDataType.text,
                remark: '输入完成后，按下的键'
            },
            {
                name: 'click_position_pattern',
                text: '点击位置',
                type: AgeDataType.int,
                options: [
                    {
                        text: '中心', value: 1
                    },
                    {
                        text: '随机位置', value: 2
                    },
                    {
                        text: '指定位置', value: 3
                    }
                ]
            },
            {
                name: 'click_position',
                text: '点击位置',
                type_url: AgeCommonTypes.Point,
                remark: '点击元素的位置'
            },
            {
                name: 'delay',
                text: '延迟时间',
                type: AgeDataType.int,
                remark: '延迟时间',
                defaultValue: 1
            }
        ]
    },
    {
        url: '/age/web/ele/inputSelect',
        text: '填写复制框',
        args: [
            { name: 'page', text: '页面', out: true, type_url: WebElementTypes.WebPage },
            { name: 'ele', text: '元素', type_url: WebElementTypes.WebElement },
            {
                name: 'text',
                text: '选择值',
                type: AgeDataType.text
            },
            {
                name: 'delay',
                text: '延迟时间',
                type: AgeDataType.int,
                remark: '延迟时间',
                defaultValue: 1
            }
        ]
    },
    {
        url: '/age/web/ele/inputCheckbox',
        text: '填写复制框',
        args: [
            { name: 'page', text: '页面', out: true, type_url: WebElementTypes.WebPage },
            { name: 'ele', text: '元素', type_url: WebElementTypes.WebElement },
            {
                name: 'check_type',
                text: '操作',
                type: AgeDataType.int,
                options: [
                    { text: '选中', value: 1 },
                    { text: '取消', value: 2 },
                    { text: '反选', value: 3 }
                ]
            },
            {
                name: 'delay',
                text: '延迟时间',
                type: AgeDataType.int,
                remark: '延迟时间',
                defaultValue: 1
            }
        ]
    },
    {
        url: '/age/web/ele/inputValue',
        text: '填写值',
        description: '对input,select 填写值',
        args: [
            { name: 'page', text: '页面', type_url: WebElementTypes.WebPage },
            { name: 'ele', text: '元素', type_url: WebElementTypes.WebElement },
            { name: 'value', text: '值', type: AgeDataType.text }
        ]
    }
])


declare([
    {
        url: '/age/web/ele/one',
        text: '获取元素',
        args: [
            { name: 'page', text: '页面', type_url: WebElementTypes.WebPage },
            { name: 'selector', text: '选择器', type_url: WebElementTypes.WebElement },
            {
                name: 'pattern',
                text: '模式',
                type: AgeDataType.int,
                options: [
                    { text: '元素对象', value: 0 },
                    { text: '元素文本内容', value: 1 },
                    { text: '元素数值', value: 2 },
                    { text: '元素链接地址', value: 4 },
                    { text: '元素源代码', value: 5 },
                    { text: '元素属性', value: 6 },
                ]
            },
            {
                name: 'element_prop',
                text: '元素属性名',
                remark: '当pattern为元素属性时，需要填写',
                type: AgeDataType.text
            },
            { name: 'asEle', text: '元素', out: true, type_url: WebElementTypes.WebElement },
            { name: 'asContent', text: '内容', out: true, type: AgeDataType.text },
            { name: 'asNumber', text: '数字', out: true, type: AgeDataType.number },
        ]
    },
    {
        url: '/age/web/ele/neighbour',
        text: '获取关联元素',
        args: [
            {
                name: 'page',
                text: '页面',
                type_url: WebElementTypes.WebPage
            },
            {
                name: 'selector',
                text: '选择器',
                type_url: WebElementTypes.WebElement
            },
            {
                name: 'neighbour_type',
                text: '元素',
                type: AgeDataType.int,
                options: [
                    {
                        text: '上一个兄弟元素',
                        value: 1
                    },
                    {
                        text: '下一个兄弟元素',
                        value: 2
                    },
                    {
                        text: '父元素',
                        value: 3
                    },
                    {
                        text: '子元素',
                        value: 4
                    }
                ]
            },
            {
                name: 'sub_selector',
                text: '子元素过滤器',
                type_url: WebElementTypes.WebElement
            },
            { name: 'ele', text: '元素', out: true, type_url: WebElementTypes.WebElement },
        ]
    },
    {
        url: '/age/web/ele/list',
        text: '获取相似元素',
        args: [
            { name: 'webPage', text: '页面', type_url: WebElementTypes.WebPage },
            { name: 'selector', text: '选择器', type_url: WebElementTypes.WebElement },
            {
                name: 'asListContent',
                text: '循环元素内容',
                out: true,
                type: AgeDataType.textArray,
            },
            {
                name: 'asListElement',
                text: '循环元素内容',
                out: true,
                type: AgeDataType.unitArray,
                unit_type: WebElementTypes.WebElement,
            },
            {
                name: 'asListNumber',
                text: '循环元素数字',
                out: true,
                type: AgeDataType.text,
            },
            {
                name: 'every_element_read',
                text: '循环元素读取',
                type: AgeDataType.int,
                options: [
                    { text: '元素对象', value: 0 },
                    { text: '元素文本内容', value: 1 },
                    { text: '元素数值', value: 2 },
                    { text: '元素链接地址', value: 4 },
                    { text: '元素源代码', value: 5 },
                    { text: '元素属性', value: 6 },
                ]
            },
            {
                name: 'every_element_prop',
                text: '循环元素读取属性名',
                type: AgeDataType.text
            }
        ]
    }
])

declare([
    {
        url: '/age/web/ele/position',
        text: '获取元素的位置信息',
        description: '获取元素相对于屏幕或浏览器区域左上角的位置信息',
        args: [
            { name: 'page', text: '页面', type_url: WebElementTypes.WebPage },
            { name: 'ele', text: '元素', type_url: WebElementTypes.WebElement },
            {
                name: 'position_type',
                text: '位置类型',
                type: AgeDataType.int,
                options: [
                    { text: '相对于屏幕', value: 1 },
                    { text: '相对于浏览器', value: 2 }
                ]
            },
            { name: 'position', text: '位置', out: true, type_url: AgeCommonTypes.Rect }
        ]
    },
    {
        url: '/age/web/ele/select_options',
        text: '获取下拉框选项',
        args: [
            {
                name: 'page',
                text: '页面',
                type_url: WebElementTypes.WebPage
            },
            {
                name: 'ele',
                text: '元素',
                type_url: WebElementTypes.WebElement
            },
            {
                name: 'pattern',
                text: '模式',
                type: AgeDataType.int,
                options: [
                    { text: '所有选项', value: 1 },
                    { text: '已选择的选项', value: 2 },
                    { text: '未选择的选项', value: 3 },
                ]
            },
            {
                name: 'asOptions',
                text: '选项',
                out: true,
                type: AgeDataType.textArray
            }
        ]
    }
])