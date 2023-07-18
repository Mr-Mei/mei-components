import { defaultTheme } from "vuepress"
import { searchPlugin } from '@vuepress/plugin-search'
export default {
  lang: "zh-CN",
  title: "编程秘籍",
  base:'docs/',
  description: "小书生的组件文档",
  head: [["link", { rel: "icon", href: "/images/logo.svg" }]],
  plugins: [
    searchPlugin({
      locales: {
        // '/': {
        //   placeholder: 'Search',
        // },
        '/zh/': {
          placeholder: '搜索',
        },
      },
    }),
  ],
  theme: defaultTheme({
    // 默认主题配置
    logo: "/images/logo.svg",
    navbar: [
      // { text: "首页", link: "/" },
      { text: "组件", link: "/前端/前端目录.md" },
      { text: "博客园", link: "https://www.cnblogs.com/meijifu/" },
      { text: "github", link: "https://github.com/Mr-Mei" },
      { text: "gitee", link: "https://gitee.com/Mr-May" },
    ],
    sidebar: [
      {
        text: "编程秘籍", // 标题
        link: "/", // 标题跳转连接
      },
     '/目录/',
      {
        text: "前端",
        collapsible: true, // 控制是否折叠
        // sidebarDepth: 1,
        children: [
          "/前端/前端目录.md",
          {
            text: "HTML",
            collapsible: true, // 控制是否折叠
            children: [
              "/前端/HTML/HTML目录.md",
              "/前端/HTML/HTML基础.md",
              "/前端/HTML/HTML5语义化.md",
              "/前端/HTML/HTML5基础知识总结.md",
              "/前端/HTML/常用布局方案.md"
            ],
          },
          {
            text: "CSS",
            collapsible: true, // 控制是否折叠
            children: [
              "/前端/CSS/CSS目录.md",
              "/前端/CSS/CSS基础.md",
              "/前端/CSS/CSS常用技巧.md"
            ],
          },
          {
            text: "JS",
            collapsible: true, // 控制是否折叠
            children: [
              "/前端/JS/JS目录.md",
              "/前端/JS/JS基础.md",
              "/前端/JS/JS构造函数详解.md",
              "/前端/JS/JS常用方法.md",
              "/前端/JS/JS对浏览器URL的操作.md",
              "/前端/JS/JTemplate语法.md",
            ],
          },
          {
            text: "Vue",
            collapsible: true, // 控制是否折叠
            children: [
              "/前端/Vue/Vue目录.md",
              "/前端/Vue/Vue2基础知识.md",
              "/前端/Vue/Vue3常用知识点总结.md",
              "/前端/Vue/Vue3开发技巧.md",
            ],
          },
          {
            text: "React",
            collapsible: true, // 控制是否折叠
            children: ["/前端/React/React目录.md"],
          },
          {
            text: "小程序",
            collapsible: true, // 控制是否折叠
            children: ["/前端/小程序/小程序目录.md"],
          },
          {
            text: "Uniapp",
            collapsible: true, // 控制是否折叠
            children: ["/前端/Uniapp/Uniapp目录.md"],
          },
          {
            text: "GraceUI",
            collapsible: true, // 控制是否折叠
            children: ["/前端/GraceUI/GraceUI目录.md"],
          },
          {
            text: "其他",
            collapsible: true, // 控制是否折叠
            children: [
              "/前端/其他/其他目录.md",
              "/前端/其他/GitHub个人令牌创建.md",
              "/前端/其他/Git常用命令大全.md",
              "/前端/其他/Win10将软件快捷方式添加到右键菜单.md",
            ],
          },
          "/前端/学习路线.md",
        ],
      },
    ],
  }),
};
