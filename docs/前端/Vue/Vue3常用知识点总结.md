# Vue3 常用知识点总结

## 1. 初识Vue3

### 1.1 简介

## 1. 初识Vue3

>1. Vue.js 3.0 "One Piece" 正式版在今年9月份发布
>2. 2年多开发, 100+位贡献者, 2600+次提交, 600+次PR
>3. **Vue3支持vue2的大多数特性**
>4. **更好的支持Typescript**

### 1.2 性能的提升

>- 打包大小减少41%
>- 初次渲染快55%, 更新渲染快133%
>- 内存减少54%
>- **使用Proxy代替defineProperty实现数据响应式**
>- **重写虚拟DOM的实现和Tree-Shaking**

### 1.3 新增特性

>- Composition (组合) API
>- setup
>
>​      ref 和 reactive
>
>​      computed 和 watch
>​      新的生命周期函数
>​      provide与inject
>​      ...
>
>-  新组件 
>
>​      Fragment - 文档碎片
>
>​      Teleport - 瞬移组件的位置  
>
>​      Suspense - 异步加载组件的loading界面
>
>-  其它API更新
>
>​       全局API的修改
>
>​       将原来的全局API转移到应用对象
>
>​       模板语法变化
>
>​       ...

## 2. 创建vue3项目

### 2.1 使用vue-cli创建

```js
// 查看@vue/cli版本，确保@vue/cli版本在4.5.0以上
vue --version
// 安装或者升级你的@vue/cli
npm install -g @vue/cli
// 创建
vue create vue_test
// 进入项目目录
cd vue_test
// 启动
npm run serve
```



### 2.2 使用vite创建

[vite官网](https://cn.vuejs.org/guide/quick-start.html)

vite 是一个由原生 ESM 驱动的 Web 开发构建工具。在开发环境下基于浏览器原生 ES imports 开发，它做到了***本地快速开发启动\***, 在生产环境下基于 Rollup 打包。

**vite的优势:**

1)快速的冷启动，不需要等待打包操作

2)即时的热模块更新，替换性能和模块数量的解耦让更新飞起

3)真正的按需编译，不再等待整个应用编译完成，这是一个巨大的改变

```js
// 创建工程
npm init vite-app ...
// 进入工程目录
cd  ...
// 安装依赖
npm install
// 运行项目
npm run dev

// 使用pnpm快速创建
// 安装pnpm
npm install -g pnpm
// 安装vite
pnpm create vite
// 指定名称与模板创建项目
pnpm create vite my-vue-app --template vue
// 安装依赖
cd my-vue-app 
pnpm install
pnpm run dev
```



## 3. setup

>- 新的option, 所有的组合API函数都在此使用, 只在初始化时执行一次
>- 组件中所用到的：数据、方法等等，均要配置在setup中。
>- 函数如果返回对象, 对象中的属性或方法, 模板中可以直接使用

### 3.1 setup执行的时机

>- 在beforeCreate之前执行(一次), 此时组件对象还没有创建
>- this是undefined, 不能通过this来访问data/computed/methods / props
>- 其实所有的composition API相关回调函数中也都不可以

### 3.2 setup的返回值

> - 一般都返回一个对象: 为模板提供数据, 也就是模板中可以直接使用此对象中的所有属性/方法
> - 返回对象中的属性会与data函数返回对象的属性合并成为组件对象的属性
> - 返回对象中的方法会与methods中的方法合并成功组件对象的方法
> - 如果有重名, setup优先
> - 注意:
>
> ​     1)一般不要混合使用: methods中可以访问setup提供的属性和方法, 但在setup方法中不能访问data和methods
>
> ​     2)setup不能是一个async函数: 因为返回值不再是return的对象, 而是promise, 模板看不到return对象中的属性数据
>
> - setup的参数
>
> ​     1)setup(props, context) / setup(props, {attrs, slots, emit})
>
> ​     2)props: 包含props配置声明且传入了的所有属性的对象
>
> ​     3)attrs: 包含没有在props配置中声明的属性的对象, 相当于 this.$attrs
>
> ​     4)slots: 包含所有传入的插槽内容的对象, 相当于 this.$slots
>
> ​     5)emit: 用来分发自定义事件的函数, 相当于 this.$emit

## 4. ref

> - 作用: 定义一个数据的响应式
> - 语法: const xxx = ref(initValue):
>
> ​        1)创建一个包含响应式数据的引用(reference)对象
>
> ​        2)js中操作数据: xxx.value
>
> ​        3)模板中操作数据: 不需要.value
>
> - 一般用来定义一个基本类型的响应式数据

```vue
<template>
  <h2>{{count}}</h2>
  <hr>
  <button @click="update">更新</button>
</template>
 
<script>
import {
  ref
} from 'vue'
export default {
 
  /* 在Vue3中依然可以使用data和methods配置, 但建议使用其新语法实现 */
  // data () {
  //   return {
  //     count: 0
  //   }
  // },
  // methods: {
  //   update () {
  //     this.count++
  //   }
  // }
 
  /* 使用vue3的composition API */
  setup () {
 
    // 定义响应式数据 ref对象
    const count = ref(1)
    console.log(count)
 
    // 更新响应式数据的函数
    function update () {
      // alert('update')
      count.value = count.value + 1
    }
 
    return {
      count,
      update
    }
  }
}
</script>
<!--使用setup语法糖-->
<script setup>
    import {ref} from 'vue'
    const count = ref(1)
    const update = ()=> {
      count.value = count.value + 1
    }
</script>
```



## 5. reactive

> - 作用: 定义多个数据的响应式
> - const proxy = reactive(obj): 接收一个普通对象然后返回该普通对象的响应式代理器对象
> - 响应式转换是“深层的”：会影响对象内部所有嵌套的属性
> - 内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据都是响应式的

```vue
<template>
  <h2>name: {{state.name}}</h2>
  <h2>age: {{state.age}}</h2>
  <h2>wife: {{state.wife}}</h2>
  <hr>
  <button @click="update">更新</button>
</template>
 
<script setup>
import {reactive,} from 'vue'
/* 
  reactive: 
    作用: 定义多个数据的响应式
    const proxy = reactive(obj): 接收一个普通对象然后返回该普通对象的响应式代理器对象
    响应式转换是“深层的”：会影响对象内部所有嵌套的属性
    内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据都是响应式的
*/
  // 定义响应式数据对象
  const state = reactive({
    name: 'tom',
    age: 25,
    wife: {
      name: 'marry',
      age: 22
    },
  })
  console.log(state, state.wife)
  const update = () => {
    state.name += '--'
    state.age += 1
    state.wife.name += '++'
    state.wife.age += 2
  }
</script>
```



## 6. 比较Vue2与Vue3的响应式

### 6.1 vue2的响应式

> ​	**核心:**
>
> - 对象: 采用“数据劫持”结合“发布者-订阅者”模式的方式，通过“Object.defineProperty()”方法来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调
> - 数组: 通过重写数组更新数组一系列更新元素的方法来实现元素修改的劫持

> ​	**问题:** 
>
> - 对象直接新添加的属性或删除已有属性, 界面不会自动更新
> - 直接通过下标替换元素或更新length, 界面不会自动更新 arr[1] = {}

```js
//核心方法  -
Object.defineProperty(obj, prop, descriptor)
 
// obj：要在其上定义属性的对象。
// prop：要定义或修改的属性的名称。
// descriptor：将被定义或修改的属性描述符。
Object.defineProperty(对象, 属性, {   
  get () {},      
  set () {} 
}) 
```

### 6.2 vue3的响应式

> ​	**核心:**
>
> - 通过Proxy(代理): 拦截对data任意属性的任意(13种)操作, 包括属性值的读写, 属性的添加, 属性的删除等...
> - 通过 Reflect(反射): 动态对被代理对象的相应属性进行特定的操作

```js
//核心方法
new Proxy(data, {
	// 拦截读取属性值
    get (target, prop) {
    	return Reflect.get(target, prop)
    },
    // 拦截设置属性值或添加新属性
    set (target, prop, value) {
    	return Reflect.set(target, prop, value)
    },
    // 拦截删除属性
    deleteProperty (target, prop) {
    	return Reflect.deleteProperty(target, prop)
    }
})
 
proxy.name = 'tom'  
```



## 7. 对reactive与ref的理解

> - 是Vue3的 composition API中2个最重要的响应式API
> - ref用来处理基本类型数据, reactive用来处理对象(递归深度响应式)
> - 如果用ref对象/数组, 内部会自动将对象/数组转换为reactive的代理对象
> - ref内部: 通过给value属性添加getter/setter来实现对数据的劫持
> - reactive内部: 通过使用Proxy来实现对对象内部所有数据的劫持, 并通过Reflect操作对象内部数据
> - ref的数据操作: 在js中要.value, 在模板中不需要(内部解析模板时会自动添加.value)

## 8. 计算属性与监视

> - computed函数:
>
> 1. 与computed配置功能一致
> 2. 只有getter
> 3. 有getter和setter
>
> - watch函数
>
> 1. 与watch配置功能一致
> 2. 监视指定的一个或多个响应式数据, 一旦数据变化, 就自动执行监视回调
> 3. 默认初始时不执行回调, 但可以通过配置immediate为true, 来指定初始时立即执行第一次
> 4. 通过配置deep为true, 来指定深度监视
>
> - watchEffect函数
>
> 1. 不用直接指定要监视的数据, 回调函数中使用的哪些响应式数据就监视哪些响应式数据
> 2. 默认初始时就会执行第一次, 从而可以收集需要监视的数据
> 3. 监视数据发生变化时回调

```vue
<template>
  <h2>App</h2>
  fistName: <input v-model="user.firstName"/><br>
  lastName: <input v-model="user.lastName"/><br>
  fullName1: <input v-model="fullName1"/><br>
  fullName2: <input v-model="fullName2"><br>
  fullName3: <input v-model="fullName3"><br>
 
</template>
 
<script lang="ts">
/*
计算属性与监视
1. computed函数: 
  与computed配置功能一致
  只有getter
  有getter和setter
2. watch函数
  与watch配置功能一致
  监视指定的一个或多个响应式数据, 一旦数据变化, 就自动执行监视回调
  默认初始时不执行回调, 但可以通过配置immediate为true, 来指定初始时立即执行第一次
  通过配置deep为true, 来指定深度监视
3. watchEffect函数
  不用直接指定要监视的数据, 回调函数中使用的哪些响应式数据就监视哪些响应式数据
  默认初始时就会执行第一次, 从而可以收集需要监视的数据
  监视数据发生变化时回调
*/
 
import {
  reactive,
  ref,
  computed,
  watch,
  watchEffect
} from 'vue'
 
export default {
 
  setup () {
    const user = reactive({
      firstName: 'A',
      lastName: 'B'
    })
 
    // 只有getter的计算属性
    const fullName1 = computed(() => {
      console.log('fullName1')
      return user.firstName + '-' + user.lastName
    })
 
    // 有getter与setter的计算属性
    const fullName2 = computed({
      get () {
        console.log('fullName2 get')
        return user.firstName + '-' + user.lastName
      },
 
      set (value: string) {
        console.log('fullName2 set')
        const names = value.split('-')
        user.firstName = names[0]
        user.lastName = names[1]
      }
    })
 
    const fullName3 = ref('')
 
    /* 
    watchEffect: 监视所有回调中使用的数据
    */
    /* 
    watchEffect(() => {
      console.log('watchEffect')
      fullName3.value = user.firstName + '-' + user.lastName
    }) 
    */
    /* 
    使用watch的2个特性:
      深度监视
      初始化立即执行
    */
    watch(user, () => {
      fullName3.value = user.firstName + '-' + user.lastName
    }, {
      immediate: true,  // 是否初始化立即执行一次, 默认是false
      deep: true, // 是否是深度监视, 默认是false
    })
 
    /* 
    watch一个数据
      默认在数据发生改变时执行回调
    */
    watch(fullName3, (value) => {
      console.log('watch')
      const names = value.split('-')
      user.firstName = names[0]
      user.lastName = names[1]
    })
 
    /* 
    watch多个数据: 
      使用数组来指定
      如果是ref对象, 直接指定
      如果是reactive对象中的属性,  必须通过函数来指定
    */
    watch([() => user.firstName, () => user.lastName, fullName3], (values) => {
      console.log('监视多个数据', values)
    })
 
    return {
      user,
      fullName1,
      fullName2,
      fullName3
    }
  }
}
</script>
```



## 9. vue3的生命周期

![a025e11a334fc10a154348c2a5d49cf5.png](/images/Vue/vue3生命周期.png)

> ​	 **与 2.x 版本生命周期相对应的组合式 API**
>
> - beforeCreate -> 使用 setup()
> - created -> 使用 setup()
> - beforeMount -> onBeforeMount
> - mounted -> onMounted
> - beforeUpdate -> onBeforeUpdate
> - updated -> onUpdated
> - beforeDestroy -> onBeforeUnmount
> - destroyed -> onUnmounted
> - errorCaptured -> onErrorCaptured

> **新增的钩子函数**
>
> 组合式 API 还提供了以下调试钩子函数：
>
> - onRenderTracked
> - onRenderTriggered

## 10. 自定义hook函数

> - 使用Vue3的组合API封装的可复用的功能函数
> - 自定义hook的作用类似于vue2中的mixin技术
> - 自定义Hook的优势: 很清楚复用功能代码的来源, 更清楚易懂

```js
// 需求1: 收集用户鼠标点击的页面坐标hooks/useMousePosition.ts
import { ref, onMounted, onUnmounted } from 'vue'
/* 
	收集用户鼠标点击的页面坐标
*/
export default function useMousePosition () {
    // 初始化坐标数据
    const x = ref(-1)
    const y = ref(-1)

    // 用于收集点击事件坐标的函数
    const updatePosition = (e: MouseEvent) => {
        x.value = e.pageX
        y.value = e.pageY
    }

    // 挂载后绑定点击监听
    onMounted(() => {
        document.addEventListener('click', updatePosition)
    })

    // 卸载前解绑点击监听
    onUnmounted(() => {
        document.removeEventListener('click', updatePosition)
    })

    return {x, y}
}
```



## 11. toRefs

> 把一个响应式对象转换成普通对象，该普通对象的每个 property 都是一个 ref
>
> 应用: 当从合成函数返回响应式对象时，toRefs 非常有用，这样消费组件就可以在不丢失响应式的情况下对返回的对象进行分解使用
>
> 问题: reactive 对象取出的所有属性值都是非响应式的
>
> 解决: 利用 toRefs 可以将一个响应式 reactive 对象的所有原始属性转换为响应式的 ref 属性 

```vue
<template>
  <h2>App</h2>
  <h3>foo: {{ foo }}</h3>
  <h3>bar: {{ bar }}</h3>
  <h3>foo2: {{ foo2 }}</h3>
  <h3>bar2: {{ bar2 }}</h3>
</template>
 
<script lang="ts">
import { reactive, toRefs } from 'vue'
/*
toRefs:
  将响应式对象中所有属性包装为ref对象, 并返回包含这些ref对象的普通对象
  应用: 当从合成函数返回响应式对象时，toRefs 非常有用，
        这样消费组件就可以在不丢失响应式的情况下对返回的对象进行分解使用
*/
export default {

  setup() {
    const state = reactive({
      foo: 'a',
      bar: 'b',
    })

    const stateAsRefs = toRefs(state)

    setTimeout(() => {
      state.foo += '++'
      state.bar += '++'
    }, 2000);

    const { foo2, bar2 } = useReatureX()

    return {
      // ...state,
      ...stateAsRefs,
      foo2,
      bar2
    }
  },
}

function useReatureX() {
  const state = reactive({
    foo2: 'a',
    bar2: 'b',
  })

  setTimeout(() => {
    state.foo2 += '++'
    state.bar2 += '++'
  }, 2000);

  return toRefs(state)
}

</script>
```



## 12. ref获取元素

> 利用ref函数获取组件中的标签元素
>
> 功能需求: 让输入框自动获取焦点

```vue
<template>
  <h2>App</h2>
  <input type="text">---
  <input type="text" ref="inputRef">
</template>
  
<script setup lang="ts">
import { onMounted, ref } from 'vue'
/* 
    ref获取元素: 利用ref函数获取组件中的标签元素
    功能需求: 让输入框自动获取焦点
*/
// 声明一个 ref 来存放该元素的引用
// 必须和模板里的 ref 同名
const inputRef = ref<HTMLElement | null>(null)

onMounted(() => {
  inputRef.value && inputRef.value.focus()
})
</script>
```

