import sidebars from './sidebars'

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
                link: '/plugin/'
            }
        ],
        sidebar: sidebars
    }
}