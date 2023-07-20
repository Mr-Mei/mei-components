module.exports = {
  theme: '',
  title: '编程秘籍',
  // head: [
  //   ['link', { rel: 'icon', href: '/images/logo.svg' }]
  // ],
  description: '自定义组件',
  base:'/mei-components/',
  port: '8088',
  themeConfig: {
    nav: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '组件',
        link: '/comps/',
      },
    ],
    sidebar: {
      '/comps/': ['/comps/', '/comps/start', '/comps/group'],
    },
  },
  plugins: ['demo-container'],
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
}
