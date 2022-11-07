export default {
    title: 'Atri',
    description: 'Atri docs',
    base: '/atri_doc/',
    themeConfig: {
        nav: [
            {
                text: 'Home',
                link: '/index'
            },
            {
                text: '插件开发',
                link: '/plugin/primary/'
            }
        ],
        sidebar: [
            {
                text: '开始',
                collapsible: true,
                items: [
                    { text: '配置你的项目', link: '/plugin/primary/configure' },
                    { text: '运行你的插件', link: '/plugin/primary/run' }
                ]
            },
            {
                text: '客户端',
                collapsible: true,
                items: [
                    { text: '介绍', link: '/client/intro' }
                ]
            },
            {
                text: '事件',
                collapsible: true,
                items: [
                    //{ text: '介绍', link: '/event' },
                ]
            },
            {
                text: '其他',
                collapsible: true,
                items: [
                    { text: '关于插件ABI', link: '/other/abi' }
                ]
            }
        ]
    }
}