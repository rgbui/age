

export async function loadShopApis() {
    return [
        {
            text: '基本',
            spread: true,
            childs: [
                { url: '/seer/base/if', text: '条件判断' },
                { url: '/seer/base/for', text: 'for循环' },
                { url: '/seer/base/while', text: '无限循环' },
                { url: '/seer/base/while/break', text: '循环结束' },
                { url: '/seer/base/while/continue', text: '继续下次循环' },
                { url: '/seer/base/try/catch', text: '异常捕获' },
                { url: '/seer/base/throw/exception', text: '抛出异常' },
                { url: '/seer/base/print', text: '打印' },
            ]
        },
        {
            text: '机器人操作',
            spread: false,
            childs: [{ url: '', text: '' }]
        },
        {
            text: '网络',
            spread: false,
            childs: [{ url: '', text: '' }]
        }
    ]
}