# Vue2 基础知识

## 一.vue 简介 

### 1. 概念

用于构建用户界面的前端框架

### 2. 特性

vue两大特性： **数据驱动视图**，**双向数据绑定**

#### (1) 数据驱动视图

- 数据变化会驱动视图自动更新，当数据发生变化时，vue会监听数据变化，从而自动重新渲染页面结构(无须手动操作DOM)
- 单向的数据绑定(数据变化导致页面变化)

#### (2) 双向数据绑定

- 在填写表单时，双向数据绑定可以辅助开发者在不操作DOM 的前提下，自动把用户填写的内容同步到数据源中

- js数据发生变化，会自动渲染到页面上；页面表单数据发生变化时，被vue自动获取并更新到js中

  ![e1db5b7088db4ee2ab4cec5c65291b14.png](/images/Vue/数据双向绑定.png)

### 3. MVVM

- MVVM是vue实现数据驱动视图和双向数据绑定的核心原理(底层)

- MVVM指**Model**(数据源)，**View**(DOM结构)和**ViewModel**(vue实例)

- 它把每个HTML页面都拆分成了这三个部分 (**Model表示当前页面渲染时所依赖的数据源**，**View表示当前页面所渲染的DOM结构**，**ViewModel表示vue的实例**，它是MVVM的核心)

  ![e027dd474fcc4f5da6cf052234cb3562.png](/images/Vue/MVVM工作原理.png)

- 当数据源发生变化时，会被ViewModel监听到，并自动重新渲染页面结构

- 当表单元素的值发生变化时，也会被ViewModel监听到并把变化后最新的值自动同步到Model数据源中

### 4. 基本使用步骤

- 导入 vue.js 的 script 脚本文件
- 在页面中声明一个将要被 vue 所控制的 DOM 区域（class选择器或id选择器）
- 创建 vm 实例对象（vue 实例对象）
- ![aa192eecb97845d39ba752d41b289e48.png](/images/Vue/基本使用步骤.png)

### 5. 调试工具

- 浏览器更多工具 ==> 扩展程序(将下载的文件拖入即可) ==> Vue.js devtools详细信息(勾选在所有网络上, 允许访问文件网址即可)
- Chrome浏览器在线安装 vue-devtools： https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd
- FireFox浏览器在线安装： https://addons.mozilla.org/zh-CN/firefox/addon/vue-js-devtools/

### 6. `{{ }}`

- 插值表达式Mustache，只是内容占位符，不覆盖原有内容
- 只能用在元素内容节点，不能用在属性节点 ` <p>性别: {{ sex }}</p> `
- 不能识别标签

## 二. vue 基础

### 1.  指令

指令(Directives)是vue为开发者提供的模板语法，用于辅助开发者渲染页面的基本结构，vue 中的指令按照不同的用途可以分为6大类

#### (1) 内容渲染指令

用来辅助开发者渲染DOM元素的文本内容。常用的内容渲染指令有如下 2个

- v-text：会覆盖元素默认内容` <p v-text="username"></p>`
- v-html： 渲染带标签的内容，并实现标签样式，会覆盖元素默认内容 `<div v-html="属性"></div>`

#### (2) 属性绑定指令

- v-bind (简写 : )：为元素的属性动态绑定属性值, 单向绑定(数据源影响DOM变化)
- 支持绑定简单的数据值 `<img src="" :placeholder="tips">`
- 支持绑定js表达式的简单运算`<div :title=" 'box-' + index">div盒子</div>`  

#### (3) 事件绑定指令

- v-on(简写@)：为DOM元素绑定事件监听 
- 处理函数写在实例对象的methods属性下 `<button @click="add()">点击</button>` ()可传参，无需传参可写成：@click="add"
- 原生DOM对象onclick，oninput，onkeyup等原生事件，替换为@click，@input，@keyup

**$event**

vue 提供的特殊变量，表示原生的事件参数对象event， 可解决事件参数对象event被覆盖的问题(点击按钮变色问题)

**事件修饰符**

方便对事件的触发控制 `<a href=" " @click.prevent=" "></a>`

![dfa249a858f646768740af687f2fad25.png](/images/Vue/事件修饰符.png)

**按键修饰符**

监听键盘事件时，判断详细的按键，可为键盘相关的事件添加按键修饰符

e.g:` <input @keyup.enter="submit"> `只有按键Enter时，调用submit()

#### (4) 双向绑定指令

v-model：双向数据绑定指令，不操作DOM的前提下，快速获取表单的数据

![44bb3c8e1dfc41c09dc30f0b3bc9082e.png](/images/Vue/双向绑定指令.png)

#### (5) 条件渲染指令

按需控制 DOM 的显示与隐藏

- v-if：动态创建或移出实现元素显示与隐藏，有更高的切换开销，在运行时条件很少改变，使用较好(e.g：刚进入页面时，某些元素默认不需要被展示，后期也不需展示)
- v-show：动态为元素添加或移除style="display: none;" 样式实现显示与隐藏，有更高的初始渲染开销， 需要非常频繁地切换，使用较好
- v-else 必须配合v-if指令一起使用，否则不会被识别
- v-else-if 必须配合v-if指令一起使用，否则不会被识别

#### (6) 列表渲染指令

- v-for：基于一个数组来循环渲染一个列表结构
- 使用item in list形式特殊语法(list待循环数组，item被循环的每一项)
- 用索引时(item, index) in list , item项和index 索引都是形参，可重命名

**使用key维护列表状态**

- 官方建议，使用v-for必须绑定属性key，且值通常为id(唯一id) 
- 当列表的数据变化时，默认情况下，vue会尽可能的复用已存在的DOM元素，从而提升渲染的性能，但这种默认的性能优化策略，会导致有状态的列表无法被正确更新
- 为给vue一个提示，以便它能跟踪每个节点的身份，从而在保证有状态的列表被正确更新的前提下，提升渲染的性能，需要为每项提供一个唯一的key属性
- e.g：`<li v-for="(item,index) in list" :key="item.id" :title="index + item.uname">`

**key的注意事项**

- key 的值只能是字符串或数字类型
- key 的值必须具有唯一性（即：key的值不能重复）
- 建议把数据项 id 属性的值作为key的值（id 属性的值具有唯一性）
- 使用 index 的值当作key的值没有任何意义（index 的值不具有唯一性，与每一项无强制关系）
- 建议使用v-for指令时一定要指定key的值（既提升性能、又防止列表状态紊乱）

### 2. 过滤器

#### (1) 概念

- 过滤器(Filters)常用于文本的格式化，过滤器可以用在插值表达式和v-bind属性绑定中
- 过滤器应该被添加在JS表达式的尾部，由管道符( | )进行调用，可连续多个调用，前边的处理结果传递给后边的过滤器
- 本质是js函数，可接受参数

**兼容性**

仅在vue 2.x和1.x中支持,在 vue 3.x 的版本中剔除了过滤器相关的功能(官方建议使用计算属性或方法代替被剔除的过滤器功能 )

#### (2) 分类

**私有过滤器**

- 在 filters 节点下定义的过滤器，只能在当前 vm 实例所控制的 el 区域内使用

**全局过滤器**

- 多个 vue 实例之间共享过滤器
- Vue.filter('过滤器名', (参1, 参2,参3)=>{ }) 必须定义在vue实例之前
- 参数1永远为管道符| 前边待处理的值，第二个参数开始，才是调用过滤器传递的参数

### 3.  侦听器

- watch侦听器监视数据的变化，从而针对数据的变化做特定的操作，写在watch节点下
- 侦听器本质是一个函数，监视哪个数据,就将他作为函数名，参数中新值在前，旧值在后
- immediate选项：实现初次页面渲染好，侦听器立即被调用 immediate: true, 默认false
- deep选项：深度侦听, 可监听对象中的属性的变化 deep: true
- 侦听对象中的单个属性：对象.属性:{ handler(参数){ } } handler为侦听器处理函数

### 4. 计算属性

- 计算属性指的是通过一系列运算之后，最终得到一个属性值，写在computed节点下
- 定义为方法格式，使用时按属性使用，实现代码复用
- 会缓存计算的结果，只有依赖数据源变化，计算属性会重新求值

### 5. vue-cli

#### (1) 单页面应用程序

Single Page Application简称 SPA，指一个Web网站中只有唯一的一个HTML页面，所有的功能与交互都在这唯一的一个页面内完成

#### (2) vue-cli

- Vue.js开发的标准工具， 简化了程序员基于webpack创建工程化的Vue 项目的过程
- https://cli.vuejs.org/zh/
- 安装: npm i -g @vue/cli

#### (3) 使用

- 基于vue-cli快速生成工程化的Vue项目：vue create 项目的名称 (不包含大写、汉字、空格等)
- 选择配置项![0c25bba633c14d1fa42c5c57becee5bf.png](/images/Vue/选择配置项1.png)![img](/images/Vue/选择配置项2.png)
- 自动创建项目，初始化git，以及安装所需依赖包 
- 安装配置完成后，显示npm run serve 以开发的方式运行项目(serve相当于dev， 配置文件scripts节点中，发布build)![2b102d6fb6024c5b8da5faef3324cecb.png](/images/Vue/安装配置完成.png)
- 项目目录说明 ![99a0e81425dc4ba493c4269110540cb7.png](/images/Vue/项目说明.png) 

### 6. 组件

#### (1) 组件化开发

- 根据封装的思想，把页面上可重用的 UI 结构封装为组件，从而方便项目的开发和维护
- vue 是一个支持组件化开发的前端框架，vue中的组件后缀名是 .vue

#### (2) vue组件组成部分

**template**

- 组件的模板结构(必选)
- 只起到包裹性质的作用，不会被渲染为真正的DOM 元素
- 只能包含唯一根节点

**script**  

- 组件的JavaScript行为(可选)
- 只要写script，其中必须包含export default{ 可包含data， methods... }默认导出
- 组件中的数据源data必须是个函数，return的对象中可定义数据;  不能直接指向一个数据对象(会导致多个组件实例共用同一份数据的问题) e.g：data(){ return { username: 'ff'  } }

**style**

- 组件的样式(可选)
- 启用sass预处理器 `<style lang="scss">`

#### (3) 组件的使用

**关系**

- 组件在被封装好之后，彼此之间是相互独立的，不存在父子关系
- 在使用组件的时候，根据彼此的嵌套关系，形成了父子关系、兄弟关系

**使用步骤**

- 使用components节点注册组件，components:{ Left , //  'Left': Left 简写  }
- 使用import 语法导入需要的组件，import Left from '@/components/left.vue'
- 以标签形式使用刚才注册的组件，template中`<Left></Left>`

**私有子组件**

- 通过components注册的是私有子组件
- 在组件A的components节点下，注册组件F，则组件F只能用在组件A中，不能被用在组件B中

**全局组件** 

- main.js 入口文件中，通过 Vue.component()方法，可以注册全局组件
- import Custom from '@/components/Custom.vue';    Vue.component('MyCustom',Custom)

#### (4) props

- 自定义属性，封装通用组件使用，可提高组件的复用性
- prop:['自定义A', '自定义B'...]，props:{ 属性A:{ //默认值... }}
- 自定义属性是只读的，不能直接修改props的值，否则会直接报错，需要修改 props 的值，可以把 props 的值转存到data中(data 中的数据都是可读可写)
- default 声明自定义属性时，定义属性的默认值 (未传，则用默认值)
- type 声明自定义属性时，定义属性的值类型(传过来的值类型不符则报错)
- required 将属性设置为必填项，强制用户必须传递属性的值(校验有无该属性，与默认值无关)

#### (5) 组件样式冲突

- 默认情况下，写在 .vue 组件中的样式会全局生效，因此很容易造成多个组件之间的样式冲突问题

根本原因是：

- 单页面应用程序中，所有组件的DOM结构，都是基于唯一的index.html页面进行呈现的
- 每个组件中的样式，都会影响整个index.html页面中的DOM

**解决:**

- 为每个组件分配唯一的自定义属性，通过属性选择器来控制样式的作用域
- scoped属性`<style scoped></style> `可防止组件之间的样式冲突，但当前组件的样式对其子组件是不生效
- /deep/ 、::v-deep等深度选择器，可进行样式穿透，让某些样式对子组件生效

### 7. 组件的生命周期

#### (1) 概念

- 生命周期(Life Cycle)是指一个组件从**创建** ==> **运行** ==> **销毁**的整个阶段，强调的是一个时间段
- 生命周期函数：内置函数，会伴随着组件的生命周期，自动按次序执行，强调的是时间点

#### (2) 分类

- 组件创建阶段 new Vue() ==> beforeCreate ==> created ==> beforeMount ==> mounted
- 组件运行阶段 beforeUpdate ==> updated
- 组件销毁阶段 beforeDestroy ==> destroyed

![2512e3144d5b4e6d9239933bd4fe6f4a.png](/images/Vue/组件的生命周期.png)

### 8. 数据共享

#### (1) 父向子组件数据共享

使用自定义属性

![01fbcc4232234b83a6a44ddac6e99bab.png](/images/Vue/父传子.png)

#### (2) 子向父组件数据共享

使用自定义事件

![40d333942c774392b2e065dba38c28ee.png](/images/Vue/子传父.png)

#### (3)  兄弟组件数据共享

在 vue2.x 中，兄弟组件之间数据共享的方案是 EventBus (eventBus.js)

![65bf2e2c2bc14e229b85ae6f6902751c.png](/images/Vue/兄弟组件数据共享.png)

### 9. ref引用

- ref 用来辅助开发者在不依赖于 jQuery 的情况下，获取 DOM 元素或组件的引用
- $refs 对象：每个vue的组件实例上都包含一个，里面存储着对应的DOM元素或组件的引用，默认$refs指向一个空对象
- 使用ref，为子组件创建实例，可直接操作子组件中的方法和属性 ` <Myref ref="comRef"></Myref>`

**this.$nextTick(callback) 方法**

- 会把 callback 回调推迟到下一个DOM更新周期之后执行
- 等组件的DOM更新完成后，再执行callback回调函数，从而能保证callback回调函数操作的是最新DOM元素

### 10. 动态组件

#### (1) 概念

- 动态组件指的是动态切换组件的显示与隐藏
- 通过内置组件`<component>`，专门实现动态组件的渲染` <component is="Left"></component>`
- 可绑定is属性，实现动态切换 `<component :is="comName"></component>`

#### (2) keep-alive

- `<keep-alive>` 组件保持状态，默认情况下，切换动态组件时无法保持组件的状态(会将组件销毁)

**keep-alive 对应的生命周期函数**

- 当组件被缓存时，会自动触发组件的 deactivated 生命周期函数
- 当组件被激活时，会自动触发组件的 activated 生命周期函数

**属性**

- include: 指定可以缓存的组件，其余组件切换后就会被销毁
- exclude: 指定不被缓存的组件  
- include和exclude，只能选择其一，不能同时使用

#### (3) name

- name属性，用于组件声明时，指定该组件名称，结合keep-alive标签实现组件缓存功能，在调试工具中显示
- 注册组件时名称，用于以标签形式，把注册好的组件渲染显示到页面中 components:{ Header }

### 11. 插槽

#### (1) 概念

- 插槽(Slot)是vue为组件的封装者提供的能力，允许开发者在封装组件时，把不确定的，希望由用户指定的部分定义为插槽 (为用户预留的内容的占位符)
- 未使用`<template>`包裹需要填充的内容，默认填充到default插槽中
- 若在封装组件时没有预留任何` <slot>` 插槽，则用户提供的任何自定义内容都会被丢弃
- 后备内容：插槽中写的内容，优先填充显示用户自定义内容，若没有填充到插槽中的内容，则显示后备内容

####  (2) 具名插槽

- `<slot name="xxx"></slot> `带有具体名称的插槽叫做“具名插槽”
- 没有指定name 名称的插槽，默认插槽名为default

**v-slot:(#)指令:**

- v-slot(#)指令，指定填充到哪个插槽
- 不能直接用在元素上，要用在`<template>`虚拟标签上

#### (3) 作用域插槽

- `<slot> `插槽绑定props数据(自定义属性及值或动态数据)
- '<template #content="scope"> ' 可用scope形参来接收对象
- 接收过来的对象，可直接解构拿到其中属性 { msg, user }

### 12. 自定义指令 

#### (1) 私有自定义指令

- directives 节点下声明

- 使用时，加v-前缀即可，template 结构中可以通过=为当前指令动态绑定参数值

  ```js
  // 私有自定义指令节点
  directives:{
      /* color:{ // 定义名为color的自定义指令, 指向一个配置对象
  			// 当指令首次被绑定到元素上时,会立即触发bind函数, 若DOM更新时,不会触发
  			// 形参el为当前被绑定的DOM对象  binding接收data传的值
  			bind(el, binding){
  				el.style.color = binding.value;
  			},	
  			update(el, binding){  // DOM更新时触发
  				el.style.color = binding.value;
  			},
  	} */
      // 简写 
      color(el, binding){
          el.style.color = binding.value;
      },
  },
  ```

  

#### (2) 全局自定义指令

```js
// 全局自定义指令  定义在main.js中   通常使用全局自定义指令, 私有的意义不大
Vue.directive('cColor',(el, binding)=>{
	el.style.color = binding.value;
})
```



## 三. 路由

### 1. 简介

router，就是对应关系

#### (1) 前端路由

- 前端路由：Hash地址与组件之间的对应关系
- Hash地址：锚链接，url地址中 #及#之后的内容就是hash地址
- SPA与前端路由：SPA(单页面)项目中，不同功能之间的切换，依赖于前端路由

**工作方式:**

- 用户点击页面上的路由链接，导致URL地址栏中的 Hash值发生变化
- 前端路由监听了到 Hash地址的变化，把当前 Hash 地址对应的组件渲染到浏览器中

**实现简易前端路由:**

- 可通过`<component>`标签, 绑定动态属性渲染组件
- 通过`<a>`添加对象的hash值 
- 在created()中用 window.onhashchange = () => { }来监听hash地址的变化，并动态切换要展示的组件

#### (2) 后端路由

- 请求方式，请求地址与function处理函数之间的对应关系
- 在node.js中，express路由，koa路由即为后端路由

### 2. vue-router基本用法

- 官方给出的路由解决方案，只能结合vue项目进行使用，能够轻松的管理SPA项目中组件的切换   
- https://router.vuejs.org

**基本用法**

- 安装vue-router包：npm i vue-router@3.5.2 -S (vue2安装router版本过高会报错)
- 创建路由模块并初始化 src ==> router ==> ndex.js
- 导入并挂载路由模块(main.js中)
- 组件中声明路由链接`<router-link> `(替换普通`<a>`链接)和占位符`<router-view>`

### 3. vue-router常见用法

#### (1) 路由重定向

- 访问地址A 时，强制跳转到地址C 
- redirect 属性指定一个新的路由地址  e.g：可实现 在/路径 下显示主页

#### (2) 嵌套路由

- 通过路由实现组件的嵌套展示
- 声明子路由占位符和子路由链接( /父级路径/子级路径 ) 
- children 属性声明子路由规则 

#### (3) 动态路由匹配

- 把 Hash 地址中可变的部分定义为参数项( :参数)，从而提高路由规则的复用性
- $route.params 参数对象  可访问到动态匹配的参数值
- props 传参，简化的接收路由参数获取形式

#### (4) 声明式导航&编程式导航

- 声明式导航：浏览器中，点击链接实现导航的方式 e.g：普通`<a>`链接，vue`<router-link>`
- 编程式导航：浏览器中，调用 API 方法实现导航的方式 e.g：普通调用location.href 

#### (5) vue-router编程式导航API

其中最常用的导航 API 分别是：

- this.$router.push('hash地址')  跳转到指定 hash 地址，并增加一条历史记录
- this.$router.replace('hash地址') 跳转到指定的 hash 地址，并替换掉当前的历史记录
- this.$router.go(数值n)  实现导航历史前进(正值)，后退(负值)
- $router.back() 在历史记录中，后退到上一个页面
- $router.forward() 在历史记录中，前进到下一个页面

#### (6) 导航守卫

控制路由的访问权限

全局前置守卫 router.beforEach( (to, from, next)=>{ } )

```js
// 仅作为参考，由于vue或vue-router的版本不同可能写法会存在差异，实际使用建议参考官方文档
// src->router-> index.js
// 1.下载vue-router@3.5.2包
// 2.导入Vue, 路由模块, 以及所需要的组件
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Router/Home.vue'
// 3.使用VueRouter插件
Vue.use(VueRouter)
// 4.创建实例对象
const router = new VueRouter({
    // 7. 定义哈希地址与组件的对应关系  { path: '哈希地址#之后的内容', component: 组件名  }
    routes:[
        // 重定向的路由规则  在/路径下显示主页
        {  path: '/', redirect: '/home' },
        // 路由规则
        {  path: '/home', component: Home }, 
        // 父级路由规则, Mine页面
        {  
            path: '/mine',  // 父级地址
            component: Mine,  // 父级组件名
            // redirect: '/mine/mineabout1',  //可使用路由重定向, 当访问mine时,直接展示MineAbout1上,  也可使用默认子路由
            children: [  // 通过children属性, 嵌套声明子级路由规则 子路由不使用/
                // 默认子路由: children数组中, 某个路由规则的path为空字符串, 打开时,直接展示该子组件上
                { path: 'mineabout1', component: MineAbout1 },
                { path: '', component: MineAbout2 }
            ]
        },	
        // 动态参数   在World组件中,根据参数值, 展示对应组件    变化部分写 :参数
        // 方式1  this.$route.params.mid 拿到mid
        // {  path: '/world/:mid', component: World },	
        // 方式2  设置 props: true  ,在组件中用props接收
        {  path: '/world/:mid', component: World , props: true },	

        {  path: '/main', component: Main }, 
        {  path: '/login', component: Login }, 

    ]
})

// 8.为router实例对象, 声明全局前置守卫  发生路由跳转,必然触发beforeEach指定的回调函数  to将要访问的路由信息对象, from将要离开的路由信息对象, next()函数 , 表放行
router.beforeEach( (to, from , next) => {
    if(to.path === '/main'){  // 判断用户将要访问的哈希地址是否为/main  
        // 访问的是main主页，需要登录才能访问获取localStorage中的token
        const token = localStorage.getItem('token')   // 如果在浏览器Application->localStorage中有token,就可访问到main
        if(token){  // 有token,则放行
            next()
        }else{  // 无token, 则强制跳转到/login
            next('/login')
        }
    }else{   // 访问的不是后台主页,直接放行
        next() 
    }
})
// 5.向外共享
export default router

// 6. main.js中挂载
// 导入路由模块 拿到实例对象
import router from '@/router/index.js' 
new Vue({
    render: h => h(App2),
    // Vue中使用路由, 必须将路由实例对象router进行挂载 
    router,   // router : router  属性名属性值一样,可简写为router
}).$mount('#app')


// App.vue组件中项目中安装和配置了vue-router,就可以使用 <router-view>组件来占位  和 <router-link>替代普通a链接 自动加# -->
<router-link to="/home">主页</router-link> 
<router-link to="/mine">我的</router-link> <hr>
<!-- 动态参数  哈希地址中. /后的参数项,叫路径参数; 在路由参数对象中,用this.$route.params访问路径参数;   ?后的参数项,叫查询参数,用this.$route.query访问;    this.$route中, path只是路径部分 e.g:/world/2,  fullPath是完整路径 e.g: /world/2?name=mm&age=18 -->
<router-link to="/world/1">W1.vue</router-link>
<router-link to="/world/2?name=mm&age=18">W2.vue</router-link> <hr>
<router-view ></router-view>

<!-- 行内使用编程式导航跳转时,省略this,否则报错 -->
<button @click="$router.back()">back</button>
<button @click="$router.forward()">forward前进</button>
```

