export default {
    '/guide': [
        {
            text: '开始使用',
            collapsible: true,
            items: [
                { text: '登录', link: '/guide/login' },
                { text: '配置登录信息', link: '/guide/configure_login' }
            ]
        }
    ],
    '/dev/plugin/': [
        {
            text: '开始',
            collapsible: true,
            items: [
                { text: '介绍', link: '/plugin/index' },
                { text: '配置你的项目', link: '/plugin/primary/configure' },
                { text: '运行你的插件', link: '/plugin/primary/run' }
            ]
        },
        {
            text: '其他',
            collapsible: true,
            items: [
                { text: '关于插件ABI', link: '/plugin/other/abi' }
            ]
        }
    ]
}