# 快速上手
实现类似于element-ui组件库的封装

## 组件封装
以 group 组件为例其他以此类推：
```
目录：

├─ webui
│  ├─ group
│  │  ├─ src
|  |  |  └─ index.vue
|  |  └─ index.js  
│  └─ index.js
├─ .gitignore
└─ package.json
```
webui/group/src/index.vue中的内容：
::: demo
```vue
  <template>
    <p class="cst-group" :name="name">
      {{ name }}<span v-if="tips" class="cst-group-tips">({{ tips }})</span>
    </p>
  </template>
  <script>
  export default {
    name: 'CstGroup',
    /**
     * Cst-group属性参数
     * @property {string} [name] 分组名称
     * @property {string} [tips] 补充说明，默认值空
     */
    props: {
      // 分组名称
      name: {
        type: String,
        default: '分组名称',
      },
      // 补充信息
      tips: {
        type: String,
        default: '',
      },
    },
    data() {
      return {}
    },
  }
  </script>
  <style lang="scss" scoped>
  .cst-group {
    font-weight: bolder;
    font-size: 16px;
    border-left: 4px solid #1890ff;
    padding-left: 4px;

    .cst-group-tips {
      font-size: 12px;
      color: #606266;
      font-weight: 400;
      padding-left: 4px;
    }
  }
  </style>
```
:::
webui/group/index.js中的内容：
```js
  import Module from './src/index.vue';

  // 给组件定义install方法
  Module.install = Vue => {
    Vue.component(Module.name, Module);
  };

  export default Module;
```

webui/index.js中的内容：
```js
  import group from './group'

  const components = [group]

  const install = Vue => {
    // 判断组件是否安装，如果已经安装了就不在安装。
    if (install.installed) return
    install.installed = true
    // 遍历的方式注册所有的组件
    components.map(component => Vue.use(component))
  }

  // 检查vue是否安装，满足才执行
  if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
  }

  export default {
    // 所有的组件必须有一个install的方法，才能通过Vue.use()进行按需注册
    install,
    ...components,
  }
```

## 全局挂载组件
在 main.js（全局入口文件） 中写入以下内容：
```js
// 引入所有组件
import CstUI from '../../webui/index.js'
// 注册所有组件
Vue.use(CstUI)
```