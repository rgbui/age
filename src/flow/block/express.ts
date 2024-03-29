import { util } from "../../../util/util";

/**
 * 表达式
 * 特指 常量、变量、运算表达式、函数计算
 * 
 * 
 */
export class AgeExpress {
    constructor(props) {
        if (props) this.load(props);
    }
    load(props) {
        for (let n in props) {
            if (n == 'args') {
                this.args = props[n].map(c => new AgeExpress(c))
            }
            else this[n] = props[n];
        }
    }
    get() {
        return {
            name: this.name,
            text: this.text,
            id: this.id,
            type: this.type,
            types: this.types,
            type_url: this.type_url,
            unit_type: this.unit_type,
            express_text: this.express_text,
            express: this.express,
            cacValue: undefined,
            value: this.value,
            defaultValue: this.defaultValue,
            description: this.description,
            args: this.args ? this.args.map(p => p.get()) : undefined,
            out: this.out,
            variable_name: this.variable_name,
            options: this.options,
            remark: this.remark
        }
    }
    text?: string;
    /**
     * 表达式的name，参数
     */
    name: string;
    /**
     * 参数名,跟blockData里面的arg name - - 一致
     */
    prop?: string;
    required?: boolean;
    id: string = util.guid();
    /**
     * 参数类型
     */
    type?: AgeDataType;
    /**
     * 参数类型，如果支持多种类型，那么types是一个数组
     */
    types?: AgeDataType[];
    /**
     * 自定义的类型，该类型与具体的执行环境对象是相关的
     * 例如：如果该对象是webPage，那么type_url=='/age/web/webPage'
     */
    type_url?: string;
    /**
     * 如果type 是array,
     * 那么unit_type是数组的元素类型
     */
    unit_type?: string;
    /**
     * 界面用户输入的表达式文本
     */
    express_text?: string;
    /**
     * 计算表达式
     */
    express?: AgeExpress;
    /**
     * 经过运行计算得到的值
     */
    cacValue?: any;
    /***
     * 表达式的值
     */
    value?: any;
    /***
     * 默认的值
     */
    defaultValue?: any;

    /**
     * 描述
     */
    description?: string;

    args?: AgeExpress[]
    /**
     * 是否是返回的参数
     */
    out?: boolean;

    /**
     * 如果是返回的参数，
     * 那么需要指定返回的变量名
     * 如有variable_name，则使用variable_name
     * 否则使用name
     */
    variable_name?: string

    /**
     * 参数取值的枚举约束
     */
    options?: { text: string, value: any }[];

    /**
     * 备注，仅用于开发者
     */
    remark?: string;
}

export enum AgeDataType {
    text = 1,
    int = 2,
    bool = 3,
    number = 4,
    date = 6,
    json = 10,
    /**
     * 相当于json，只是比较强调键值
     */
    dic = 16,
    textArray = 11,
    intArray = 12,
    numberArray = 13,

    jsonArray = 14,
    /**
     * 相当于 json array
     * 里面的object比较标准，就是数据库中的表
     */
    table = 15,

    unitArray = 16,

    flow = 20,
    code = 21,
    any = 30
}

// export function CacExpress(block: Block, arg: AgeExpress) {
//     if (typeof arg.express == 'undefined' && typeof arg.value !== 'undefined') {
//         arg.cacValue = arg.value;
//         return arg.cacValue;
//     }
//     switch (arg.name) {
//         case 'const':
//             //这是一个常量表达式
//             arg.cacValue = arg.value;
//             return arg.cacValue;
//         case 'var':
//             //这是一个全局变量表达式
//             arg.cacValue = block.task.getDic(arg.value);
//             return arg.cacValue;
//         case '+':
//             arg.cacValue = undefined;
//             arg.args.forEach(ag => {
//                 CacExpress(block, ag);
//                 if (typeof arg.cacValue == 'undefined') arg.cacValue = ag.cacValue;
//                 else arg.cacValue += ag.cacValue;
//             })
//             return arg.cacValue;
//         case '>':
//             CacExpress(block, arg.args[0]);
//             CacExpress(block, arg.args[1]);
//             arg.cacValue = arg.args[0].cacValue > arg.args[1].cacValue;
//             return arg.cacValue;
//         case 'string.length':
//             CacExpress(block, arg.args[0]);
//             arg.cacValue = arg.args[0].cacValue.length;
//             return arg.cacValue;
//         case 'object.get':
//             CacExpress(block, arg.args[0]);
//             CacExpress(block, arg.args[1]);
//             arg.cacValue = lodash.get(arg.args[0].cacValue, arg.args[1].cacValue);
//             return arg.cacValue;
//     }
// }
