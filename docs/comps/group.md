# Group 分组

页面分组

## 组件封装
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
## 基本用法

适用于表单或视图的分隔

::: demo
```vue
<template>
  <CstGroup :name="name" :tips="'用于区分上下文模块'"></CstGroup>
</template>

<script>
  export default {
    data() {
      return {
        name: '页面分组',
      }
    },
  }
</script>
```
:::

## Attributes 属性

| 参数 | 说明               | 类型   | 可选项 | 默认值 |
| ---- | ------------------ | ------ | ------ | ------ |
| name | 分组名称           | String |        |  页面分组 |
| tips | 补充说明，默认值空 | String |        |        |
