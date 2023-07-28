# Input 输入框

基于element-ui中el-input的封装

## 基本用法

通过鼠标或键盘输入字符

::: demo
```vue
<template>
  <CstInput placeholder="请输入内容" @handleInput="handleInput"></CstInput>
</template>

<script>
  export default {
    data() {
      return {
        // name: ""
      }
    },
    methods: {
      handleInput(value) {
        console.log(value)
      }
    }
  }
</script>
```
:::

## Attributes 属性

| 参数 | 说明               | 类型   | 可选项 | 默认值 |
| ---- | ------------------ | ------ | ------ | ------ |
| name | 分组名称           | String |        |  页面分组 |
| tips | 补充说明，默认值空 | String |        |        |

## 组件封装
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