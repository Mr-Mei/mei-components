# vue3 开发技巧

## 1. 善用h（createVNode）和render 函数

我们知道在vue3中导出了一个神奇的createVNode 函数 当前函数它能创建一个vdom，大家不要小看vdom， 我们好好利用它，就能做出意想不到的效果`比如我们要实现一个弹窗组件`，我们通常的思路是写一个组件在项目中引用进来，通过v-model来控制他的显示隐藏，但是这样有个问题，我们复用的时候的成本需要复制粘贴。我们没有办法来提高效率，比如封装成 npm 通过调用js来使用。然而，有了 createVNode 和render 之后，所有问题就不是问题了。

```js
// 我们可以将弹窗组件封装为一个方法，放到任何想放的地方
// 我们先写一个弹窗组件
const message = {
    setup() {
        const num = ref(1)
        return {
            num
        }
    },
    template: `<div>
                  <div>{{num}}</div>
                  <div>这是一个弹窗</div>
              </div>`
}

// 初始化组件生成vdom
const vm = createVNode(message)
// 创建容器，也可以用已经存在的
const container = document.createElement('div')
//render通过patch 变成dom
render(vm, container)
// 弹窗挂到任何你想去的地方  
document.body.appendChild(container.firstElementChild)
```

## 2. 善用JSX/TSX

文档上说了，在绝大多数情况下，Vue 推荐使用模板语法来搭建 HTML。然而在某些使用场景下，我们真的需要用到 JavaScript 完全的编程能力。这时`渲染函数`就派上用场了。

### jsx和模板语法的优势对比

jsx和模板语法都是vue 支持的的书写范畴，然后他们确有不同的使用场景，和方式，需要我们根据当前组件的实际情况，来酌情使用

### 什么是JSX

`JSX` 是一种 Javascript 的语法扩展，JSX = Javascript + XML，即在 Javascript 里面写 XML，因为 JSX 的这个特性，所以他即具备了 Javascript 的灵活性，同时又兼具 html 的`语义化和直观性`。

### 模板语法的优势

- 1、模板语法书写起来不怎么违和，我们就像在写html一样
- 2、在vue3中由于模板的可遍历性，它能在编译阶段做更多优化，比如静态标记、块block、缓存事件处理程序等
- 3、模板代码逻辑代码严格分开，可读性高
- 4、对JS功底不那么好的人，记几个命令就能快速开发，上手简单
- 5、vue官方插件的完美支持，代码格式化，语法高亮等

### JSX的优势

```js
1、灵活、灵活、灵活（重要的事情说三遍）
2、一个文件能写好多个组件
3、只要JS功底好，就不用记忆那么多命令，上来就是一通输出
4、JS和JSX混用，方法即声明即用，对于懂行的人来说逻辑清晰
```

我们知道组件类型，分为**容器型组件**和**展示型组件** 在一般情况下，容器型组件，他由于可能要对于当前展示型组件做一个标准化或者宰包装，那么此时容器型组件中用JSX就再好不过

举个例子：现在有个需求，我们有两个按钮，现在要做一个通过后台数据来选择展示哪一个按钮，我们通常的做法，`是通过在一个模板中通过v-if去控制不同的组件`，然而有了JSX与函数式组件之后，我们发现逻辑更清晰了，代码更简洁了，质量更高了

```vue
//btn1.vue
<template>
<div>
    这是btn1{{ num }}
    <slot></slot>
    </div>
</template>
<script>
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'btn1',
  setup() {
    const num = ref(1)
    return { num }
  }
})
</script>
//btn2.vue
<template>
  <div>
    这是btn2{{ num }}
    <slot></slot>
  </div>
</template>
<script>
    import { ref, defineComponent } from 'vue'
    export default defineComponent({
        name: 'btn2',
        setup() {
            const num = ref(2)
            return { num }
        }
    })
</script>

```

用JSX配合函数式组件来做一个容器组件

```jsx
// 容器组件
import btn1 from './btn1.vue'
import btn2 from './btn2.vue'
export const renderFn = function (props, context) {
    return props.type == 1 ? <btn1>{context.slots.default()}</btn1> : <btn2>{context.slots.default()}</btn2>
}
```

引入业务组件

```vue
//业务组件
<template>
	<renderFn :type="1">1111111</renderFn>
</template>
<script>
import { renderFn } from './components'
console.log(renderFn)
export default {
    components: {
        renderFn
    },
    setup() {
    },
};
</script>
```

## 3. 善用依赖注入（Provide / Inject）

先来了解一些概念，帮助我们更全面的了解依赖注入的前世今生。

### IOC 和DI 是什么

**控制反转**（Inversion of Control，缩写为**IOC**），是面向对象编程中的一种设计原则，可以用来减低计算机代码之间的耦合度。其中最常见的方式叫做**依赖注入**（Dependency Injection，简称**DI**），还有一种方式叫“依赖查找”（Dependency Lookup）。通过控制反转，对象在被创建的时候，由一个调控系统内所有对象的外界实体，将其所依赖的对象的引用传递(注入)给它。

### 什么是依赖注入

**依赖注入** 大白话：就是将实例变量传入到一个对象中去

### vue中的依赖注入

在vue中，我们套用依赖注入的概念，`其实就是在父组件中声明依赖，将他们注入到子孙组件实例中去`，可以说是能够很大程度上代替`全局状态管理`的存在

![e71533f1bc81491e924a394f0afccfe1.png](/images/Vue/vue中的依赖注入.png)

### 基本用法

父组件中声明provide

```vue
//parent.vue
<template>
  <button @click="count++">添加</button>
</template>
 
<script setup>
  import { provide, ref } from "vue";
  const count = ref(0);
  provide('count', count)
</script>
```

子组件中注入inject

```vue
//child.vue
//使用inject 注入
<template>
  <div>这是注入的内容{{ count }}</div>
</template>
 
<script setup>
  import { inject } from "vue";
  const count = inject('count');
  console.log(count)
</script>
```

## 4. 善用Composition API抽离通用逻辑

众所周知，vue3最大的新特性，当属`Composition API` 也叫组合api ，用好了他，就能提高你在行业的竞争力。

### 什么是Composition API

使用 (`data`、`computed`、`methods`、`watch`) 组件选项来组织逻辑通常都很有效。然而，当我们的组件开始变得更大时，**逻辑关注点**的列表也会增长。尤其对于那些一开始没有编写这些组件的人来说，这会导致组件难以阅读和理解。于是在vue3中为了解决当前痛点，避免在大型项目中出现代码逻辑分散，散落在当前组件的各个角落，从而变得难以维护，Composition API横空出世，所谓`Composition API` 就是在组件配置对象中声明 `setup`函数，我们可以将所有的逻辑封装在`setup`函数中，然后在配合vue3中提供的响应式API 钩子函数、计算属性API等，我们就能达到和常规的`选项式`同样的效果，但是却拥有更清晰的代码以及`逻辑层面的复用`

### 基础使用

```vue
<template>
    <div ref="composition">测试compositionApi</div>
</template>
<script>
import { inject, ref, onMounted, computed, watch } from "vue";
export default {
    // setup起手
    setup(props, { attrs, emit, slots, expose }) {
 
        // 获取页面元素
        const composition = ref(null)
        // 依赖注入
        const count = inject('foo', '1')
        // 响应式结合
        const num = ref(0)
        //钩子函数
        onMounted(() => {
            console.log('这是个钩子')
        })
        // 计算属性
        computed(() => num.value + 1)
        // 监听值的变化
        watch(count, (count, prevCount) => {
            console.log('这个值变了')
        })
        return {
            num,
            count
        }
 
    }
}
</script>
```

通过以上代码我们可以看出，一个setup函数我们干出了在`传统选项式`中的所有事情，然而这还不是最绝的，通过这些api的组合可以实现逻辑复用，这样我们就能封装很多通用逻辑，实现复用，提高工作效率。

举个例子：大家都用过复制剪贴板的功能，在通常情况下，利用navigator.clipboard.writeText 方法就能将复制内容写入剪切板。然而，细心的你会发现，其实赋值剪切板他是一个通用功能，比如：你做b端业务的，管理系统中到处充满了复制id、复制文案等功能。

于是`Composition API`的逻辑复用能力就派上了用场

```js
import { watch, getCurrentScope, onScopeDispose, unref, ref } from "vue"
export const isString = (val) => typeof val === 'string'
export const noop = () => { }
export function unrefElement(elRef) {
    const plain = unref(elRef)// 拿到本来的值
    return (plain).$el ?? plain // 前面的值为null、undefined，则取后面的值，否则都取前面的值
}
export function tryOnScopeDispose(fn) {
    // 如果有活跃的effect
    if (getCurrentScope()) {
        // 在当前活跃的 effect 作用域上注册一个处理回调。该回调会在相关的 effect 作用域结束之后被调用
        // 能代替onUmounted
        onScopeDispose(fn)
        return true
    }
    return false
}
// 带有控件的setTimeout包装器。
export function useTimeoutFn(
    cb,// 回调
    interval,// 时间
    options = {},
) {
    const {
        immediate = true,
    } = options
 
    const isPending = ref(false)
 
    let timer
 
    function clear() {
        if (timer) {
            clearTimeout(timer)
            timer = null
        }
    }
 
    function stop() {
        isPending.value = false
        clear()
    }
 
    function start(...args) {
        // 清除上一次定时器
        clear()
        // 是否在pending 状态
        isPending.value = true
        // 重新启动定时器
        timer = setTimeout(() => {
            // 当定时器执行的时候结束pending状态
            isPending.value = false
            // 初始化定时器的id
            timer = null
            // 执行回调
            cb(...args)
        }, unref(interval))
    }
    if (immediate) {
        isPending.value = true
 
        start()
    }
 
    tryOnScopeDispose(stop)
 
    return {
        isPending,
        start,
        stop,
    }
}
// 轻松使用EventListener。安装时使用addEventListener注册，卸载时自动移除EventListener。
export function useEventListener(...args) {
    let target
    let event
    let listener
    let options
    // 如果第一个参数是否是字符串
    if (isString(args[0])) {
        //结构内容
        [event, listener, options] = args
        target = window
    }
    else {
        [target, event, listener, options] = args
    }
    let cleanup = noop
    const stopWatch = watch(
        () => unrefElement(target),// 监听dom
        (el) => {
            cleanup() // 执行默认函数
            if (!el)
                return
            // 绑定事件el如果没有传入就绑定为window
            el.addEventListener(event, listener, options)
            // 重写函数方便改变的时候卸载
            cleanup = () => {
                el.removeEventListener(event, listener, options)
                cleanup = noop
            }
        },
        // flush: 'post' 模板引用侦听
        { immediate: true, flush: 'post' },
    )
    // 卸载
    const stop = () => {
        stopWatch()
        cleanup()
    }
 
    tryOnScopeDispose(stop)
 
    return stop
}
 
export function useClipboard(options = {}) {
    //获取配置
    const {
        navigator = window.navigator,
        read = false,
        source,
        copiedDuring = 1500,
    } = options
    // 事件类型
    const events = ['copy', 'cut']
    // 判断当前浏览器知否支持clipboard
    const isSupported = Boolean(navigator && 'clipboard' in navigator)
    // 导出的text
    const text = ref('')
    // 导出的copied
    const copied = ref(false)
    // 使用的的定时器钩子
    const timeout = useTimeoutFn(() => copied.value = false, copiedDuring)
 
    function updateText() {
        //解析系统剪贴板的文本内容返回一个Promise
        navigator.clipboard.readText().then((value) => {
            text.value = value
        })
    }
 
    if (isSupported && read) {
        // 绑定事件
        for (const event of events)
            useEventListener(event, updateText)
    }
    // 复制剪切板方法
    // navigator.clipboard.writeText 方法是异步的返回一个promise
    async function copy(value = unref(source)) {
        if (isSupported && value != null) {
            await navigator.clipboard.writeText(value)
            // 响应式的值，方便外部能动态获取
            text.value = value
            copied.value = true
            timeout.start()// copied.value = false 
        }
    }
 
    return {
        isSupported,
        text,
        copied,
        copy,
    }
}

```

这时我们就复用了复制的逻辑，如下代码中直接引入在模板中使用即可

```vue
<template>
    <div v-if="isSupported">
        <p>
            <code>{{ text || '空' }}</code>
        </p>
        <input v-model="input" type="text" />
        <button @click="copy(input)">
            <span v-if="!copied">复制</span>
            <span v-else>复制中!</span>
        </button>
    </div>
    <p v-else>您的浏览器不支持剪贴板API</p>
</template>
<script setup>
    import { ref, getCurrentScope } from 'vue'
    import { useClipboard } from './copy.js'
    const input = ref('')
    const { text, isSupported, copied, copy } = useClipboard()
    console.log(text)// 复制内容
    console.log(isSupported)// 是否支持复制剪切板api 
    console.log(copied)// 是否复制完成延迟
    console.log(copy) // 复制方法
</script>

```

## 5. 善于使用getCurrentInstance 获取组件实例

`getCurrentInstance` 支持访问内部组件实例, 通常情况下他被放在 setup中获取组件实例，但是 `getCurrentInstance` 只暴露给高阶使用场景，典型的比如在库中。强烈反对在应用的代码中使用 `getCurrentInstance`。请**不要**把它当作在组合式 API 中获取 `this` 的替代方案来使用。

他的作用是**逻辑提取**，用来代替Mixin，这是在复杂组件中，为了整个代码的可维护性，抽取通用逻辑这是必须要去做的事情，我们可以看element-plus 中table的复用逻辑，在逻辑提取中由于涉及获取`props、proxy、emit` 以及能通过当前组件获取父子组件的关系等，此时`getCurrentInstance`的作用无可代替，如`element-plus`代码中利用 getCurrentInstance 获取父组件`parent`中的数据，分别保存到不同的变量中，我们只需要调用当前useMapState即可拿到数据

```js
// 保存数据的逻辑封装
function useMapState<T>() {
  const instance = getCurrentInstance()
  const table = instance.parent as Table<T>
  const store = table.store
  const leftFixedLeafCount = computed(() => {
    return store.states.fixedLeafColumnsLength.value
  })
  const rightFixedLeafCount = computed(() => {
    return store.states.rightFixedColumns.value.length
  })
  const columnsCount = computed(() => {
    return store.states.columns.value.length
  })
  const leftFixedCount = computed(() => {
    return store.states.fixedColumns.value.length
  })
  const rightFixedCount = computed(() => {
    return store.states.rightFixedColumns.value.length
  })
 
  return {
    leftFixedLeafCount,
    rightFixedLeafCount,
    columnsCount,
    leftFixedCount,
    rightFixedCount,
    columns: store.states.columns,
  }
}
```

## 6. 善用$attrs

`$attrs` 现在包含了_所有_传递给组件的 attribute，包括 `class` 和 `style`。

通过他，我们可以做组件的`事件以及props`透传

首先有一个标准化的组件，一般是组件库的组件等等

```vue
//child.vue
<template>
    <div>这是一个标准化组件</div>
    <input type="text" :value="num" @input="setInput" />
</template>
 
<script>
import { defineComponent } from "vue";
 
export default defineComponent({
    props: ['num'],
    emits: ['edit'],
    setup(props, { emit }) {
        function setInput(val) {
            emit('edit', val.target.value)
        }
        return {
            setInput
        }
    }
})
</script>
```

接下来有一个包装组件，他对当前的标准化组件做修饰，从而使结果变成我们符合我们的预期的组件

```vue
//parent.vue
 <template>
    <div>这一层要做一个单独的包装</div>
    <child v-bind="$attrs" @edit="edit"></child>
</template>
 
<script>
import { defineComponent } from "vue";
import child from './child.vue'
export default defineComponent({
    components: {
        child
    },
    setup(props, { emit }) {
        function edit(val) {
            // 对返回的值做一个包装
            emit('edit', `${val}time`)
        }
        return {
            edit
        }
    }
})
</script>
```

我们发现当前包装组件中使用了`$attrs`，通过他透传给标准化组件，这样一来，我们就能对比如element UI中的组件做增强以及包装处理，并且不用改动原组件的逻辑。

## 7. 优雅注册全局组件技巧

vue3的组件通常情况下使用vue提供的`component` 方法来完成全局组件的注册

```js
const app = Vue.createApp({})
 
app.component('component-a', {
  /* ... */
})
app.component('component-b', {
  /* ... */
})
app.component('component-c', {
  /* ... */
})
 
app.mount('#app')
```

使用时

```vue
<div id="app">
  <component-a></component-a>
  <component-b></component-b>
  <component-c></component-c>
</div>
```

然而经过大佬的奇技淫巧的开发，我们发现可能使用注册vue插件的方式，也能完成组件注册，并且是优雅的！

### vue 插件注册

插件的格式

```js
//plugins/index.js
export default {
  install: (app, options) => {
      // 这是插件的内容
  }
}
```

插件的使用

```js
import { createApp } from 'vue'
import Plugin from './plugins/index.js'
const app = createApp(Root)
app.use(Plugin)
app.mount('#app')
```

其实插件的本质，就是在use的方法中调用插件中的`install方法`，那么这样一来，我们就能在`install`方法中注册组件。

index.js中抛出一个组件插件

```js
// index.js
import component from './Cmponent.vue'
const component = {
    install:function(Vue){
        Vue.component('component-name',component)
    }  // 'component-name'这就是后面可以使用的组件的名字，install是默认的一个方法 component-name 是自定义的，我们可以按照具体的需		求自己定义名字
}
// 导出该组件
export default component
```

组件注册

```js
// 引入组件
import Component from './index.js'; 
// 全局挂载utils
Vue.use(Component);
```

上述案例中，就是一个简单的优雅的组件注册方式，大家可以发现包括`element-plus、vant` 等组件都是用如此方式注册组件。

## 8. 善用</script setup>

`<script setup>`是在单文件组件 (SFC) 中使 的编译时语法糖。相比于普通的 `<script>`语法，它具有更多优势：

- 更少的样板内容，更简洁的代码。
- 能够使用纯 Typescript 声明 props 和抛出事件。
- 更好的运行时性能 (其模板会被编译成与其同一作用域的渲染函数，没有任何的中间代理)。
- 更好的 IDE 类型推断性能 (减少语言服务器从代码中抽离类型的工作)。

它能代替大多数的setup函数所表达的内容，具体使用方法，大家请看请移步文档

但是由于setup函数它能返回渲染函数的特性，在当前语法糖中却无法展示，于是遍寻资料，找到了一个折中的办法：

```vue
<script setup>
	import { ref,h } from 'vue'
	const msg = ref('Hello World!')
	const dynode = () => h('div',msg.value);
</script>
<template>
    <dynode />
  	<input v-model="msg">
</template>	
```

如此一来，我们就能在语法糖中返回渲染函数了。

## 9. v-model的最新用法

我们知道在vue2中想要模拟v-model，必须要子组件要接受一个`value的props` 暴露出来一个 叫`input的emit`，然而在vue3中他升级了，父组件中使用v-model，如下：

```vue
<template>
    <child v-model:title="pageTitle"></child>
</template>
 
<script>
import { defineComponent, ref } from "vue";
import child from './child.vue'
export default defineComponent({
    components: {
        child
    },
    setup(props, { emit }) {
        const pageTitle = ref('这是v-model')
        return {
            pageTitle
        }
    }
})
</script>
```

子组件中使用 `title的props` 以及暴露出`update:title的emit`

```vue
<template>
    <div>{{ title }}</div>
    <input type="text" @input="setInput" />
</template>
 
<script>
import { defineComponent } from "vue";
 
export default defineComponent({
    props: ['title'],
    emits: ['update:title'],
    setup(props, { emit }) {
        function setInput(val) {
            emit('update:title', val.target.value)
        }
        return {
            setInput
        }
    }
})
</script>
```

有了以上语法糖，我们在封装组件的时候，就可以随心所欲了，比如我自己封装可以控制显示隐藏的组件我们就能使用`v-model:visible`单独控制组件的显示隐藏。使用正常的`v-model` 控制组件内部的其他逻辑，从而拥有`使用更简洁的逻辑，表达相同的功能`