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
