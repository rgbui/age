/**
 * 表达式
 * 特指 常量、变量、运算表达式、函数计算
 * 
 * 
 */
export class AgeExpress {
    text?: string;
    name: string;
    required?: boolean;
    id?: string;
    type?: AgeDataType;
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
     * 是否是返回的变量
     */
    out?: boolean;

    /**
     * 变量名
     * 建议使用variable_name
     * 如果没有，使用name
     */
    variable_name?: string

    /**
     * 参数取值的枚举
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
