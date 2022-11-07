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
                { text: '介绍', link: '/dev/plugin/index' },
                { text: '配置项目', link: '/dev/plugin/primary/configure' },
                { text: '编写插件', link: '/dev/plugin/primary/run' },
                { text: '运行插件', link: '/dev/plugin/primary/run' }
            ]
        },
        {
            text: '其他',
            collapsible: true,
            items: [
                { text: '关于插件ABI', link: '/dev/plugin/other/abi' }
            ]
        }
    ]
}