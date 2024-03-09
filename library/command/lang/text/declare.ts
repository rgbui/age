import { AgeDataType } from "../../../../src/flow/block/express";
import { declare } from "../../../factory/observable";

/**
 * 申明文本命令
 */
declare([{
    url: '/age/string/length',
    text: '获取文本长度',
    viewTemplate: `获取文本{text}的长度，将文本的长度保存至{text_length}`,
    args: [
        {
            name: 'text',
            text: '文本',
            required: true,
            type: AgeDataType.text
        },
        {
            name: 'text_length',
            text: '长度',
            type: AgeDataType.text,
            out: true
        }
    ]
},
{
    url: '/age/string/match',
    text: "提取文本内容",
    description: '提取文本中的内容',
    viewTemplate: `从文本{text}中提取{pattern}，将内容保存至{content}`,
    args: [
        {
            name: 'text',
            text: '文本',
            required: true,
            type: AgeDataType.text
        },
        {
            name: 'pattern',
            text: '正则表达式',
            required: true,
            type: AgeDataType.text
        },
        {
            name: 'isGlobal',
            text: '全局匹配',
            remark: '是否仅匹配第一个',
            type: AgeDataType.bool,
        },
        {
            name: 'content',
            text: '内容',
            type: AgeDataType.text,
            out: true,
        },
        {
            name: 'content_list',
            text: '内容列表',
            type: AgeDataType.text,
            out: true,
        }
    ]
},
{
    url: '/age/string/append',
    text: '追加文本',
    description: '将文本换行追加到另一个文本后面或前面',
    args: [
        {
            name: 'text',
            text: '文本',
            required: true,
            type: AgeDataType.text
        },
        {
            name: 'append',
            text: '追加文本',
            defaultValue: '',
            type: AgeDataType.text
        },
        {
            name: 'position',
            text: '位置',
            type: AgeDataType.int,
            defaultValue: 1,
            options: [{ text: '前面', value: 0 }, { text: '后面', value: 1 }]
        },
        {
            name: 'isLine',
            text: '是否换行',
            defaultValue: false,
            type: AgeDataType.bool,
        },
        {
            name: 'append_text',
            text: '结果',
            type: AgeDataType.text,
            out: true
        }
    ]
},
{
    url: '/age/string/slice',
    text: '截取文本',
    description: '截取文本中的内容',
    args: [
        {
            name: 'text',
            text: '文本',
            required: true,
            type: AgeDataType.text
        },
        {
            name: 'start',
            text: '开始位置',
            defaultValue: 0,
            remark: '从0开始',
            types: [AgeDataType.int, AgeDataType.text]
        },
        {
            name: 'end',
            text: '结束位置',
            defaultValue: -1,
            types: [AgeDataType.int, AgeDataType.text]
        },
        {
            name: 'slice_text',
            text: '截取结果',
            type: AgeDataType.text,
            out: true
        }
    ]
},
{
    url: '/age/string/pad',
    text: '补齐文本至指定长度',
    description: '填充文本',
    args: [
        {
            name: 'text',
            text: '文本',
            required: true,
            type: AgeDataType.text
        },
        {
            name: 'length',
            text: '长度',
            required: true,
            type: AgeDataType.int
        },
        {
            name: 'pad',
            text: '填充字符',
            required: true,
            type: AgeDataType.text
        },
        {
            name: 'position',
            text: '位置',
            type: AgeDataType.int,
            defaultValue: 1,
            options: [{ text: '前面', value: 0 }, { text: '后面', value: 1 }]
        },
        {
            name: 'pad_text',
            text: '填充结果',
            type: AgeDataType.text,
            out: true
        }
    ]
},
{
    url: '/age/string/trim',
    text: '删除文本两端的空格',
    description: '',
    args: [
        {
            name: 'text',
            text: '文本',
            required: true,
            type: AgeDataType.text
        },
        {
            name: 'position',
            text: '位置',
            type: AgeDataType.int,
            defaultValue: 0,
            options: [
                { text: '左右两端', value: 0 },
                { text: '左端', value: 1 },
                { text: '右端', value: 2 }
            ]
        },
        {
            name: 'trim_text',
            text: '结果',
            type: AgeDataType.text,
            out: true
        }
    ]
},
{
    url: '/age/string/case',
    text: '改变文本的大小写',
    description: '',
    args: [
        {
            name: 'text',
            text: '文本',
            required: true,
            type: AgeDataType.text
        },
        {
            name: 'pattern',
            text: '模式',
            type: AgeDataType.int,
            defaultValue: 0,
            options: [
                { text: '全部大写', value: 0 },
                { text: '全部小写', value: 1 },
                { text: '首字母大写', value: 2 }
            ]
        },
        {
            name: 'text_case',
            text: '大写',
            type: AgeDataType.bool,
            out: true
        }
    ]
},
{
    url: '/age/string/join',
    text: '连接文本',
    description: '用于将列表中的每个元素用指定的符号连接起来，最终转换成一个文本字符串',
    args: [
        {
            name: 'texts',
            text: '文本列表',
            required: true,
            type: AgeDataType.textArray
        },
        {
            name: 'join',
            text: '连接符',
            type: AgeDataType.text
        },
        {
            name: 'join_text',
            text: '连接结果',
            type: AgeDataType.text,
            out: true
        }
    ]
},
{
    url: '/age/string/split',
    text: '分割文本',
    description: '将文本分割成多个文本',
    args: [
        {
            name: 'text',
            text: '文本',
            required: true,
            type: AgeDataType.text
        },
        {
            name: 'split',
            text: '分割符',
            type: AgeDataType.text
        },
        {
            name: 'isFilter',
            text: '是否过滤空文本',
            type: AgeDataType.bool,
            defaultValue: true
        },
        {
            name: 'split_text',
            text: '分割结果',
            type: AgeDataType.textArray,
            out: true
        }
    ]
},
{
    url: '/age/string/replace',
    text: '替换文本',
    description: '替换文本中的内容',
    args: [
        {
            name: 'text',
            text: '文本',
            required: true,
            type: AgeDataType.text
        },
        {
            name: 'pattern',
            text: '替换方式',
            remark: '正则表达式',
            required: true,
            type: AgeDataType.text
        },
        {
            name: 'replace',
            text: '替换',
            required: true,
            type: AgeDataType.text
        },
        {
            name: 'isGlobal',
            text: '是否全局替换',
            remark: '是否仅替换第一个匹配项',
            type: AgeDataType.bool,
            defaultValue: true
        },
        {
            name: 'replace_text',
            text: '替换结果',
            type: AgeDataType.text,
            out: true
        }
    ]
}

])