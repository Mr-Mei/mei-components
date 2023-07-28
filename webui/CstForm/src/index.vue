<template>
  <div :class="inline == true ? 'cst-form' : ''">
    <el-form :model="tempFormData" :label-width="labelWidth" :width="formWidth" :inline="inline" :loading="loading"
      ref="form" :size="size" v-bind="$attrs">
      <el-form-item v-for="item in tempFormItems" :label="item.label ? item.label + '：' : ''" :key="item.prop"
        :prop="item.prop" :rules="item.rules">
        <!-- 输入框 -->
        <el-input v-if="item.type === 'Input'" v-model="tempFormData[item.prop]" :style="{ width: item.width }"
          :disabled="item.disable" :placeholder="item.placeholder ? item.placeholder : '请输入' + item.label">
        </el-input>
        <!-- 数字输入框 -->
        <el-input type="number" :min="1" v-if="item.type === 'InputNumber'" v-model.number="tempFormData[item.prop]"
          :style="{ width: item.width }" :disabled="item.disable"
          :placeholder="item.placeholder ? item.placeholder : '请输入' + item.label">
        </el-input>
        <!-- 下拉框 filterable 是否可搜索 默认是false  multiple 是否多选 默认false-->
        <el-select v-if="item.type === 'Select'" :multiple="item.multiple" :filterable="item.filterable"
          v-model="tempFormData[item.prop]" :style="{ width: item.width }" :disabled="item.disable"
          :placeholder="item.placeholder ? item.placeholder : '请选择' + item.label" :remote="item.remote" :remote-method="(query) => {
            remoteMethod(query, item.prop);
          }
            " clearable>
          <el-option v-for="op in item.options.data" :label="op[item.options.value] || op.value"
            :value="op[item.options.key] || op.key" :key="op[item.options.key] || op.key">
          </el-option>
        </el-select>

        <!-- 日期 -->
        <el-date-picker v-if="item.type === 'Date'" v-model="tempFormData[item.prop]" :disabled="item.disable"
          :placeholder="item.placeholder ? item.placeholder : '请选择日期'" clearable>
        </el-date-picker>

        <!-- 时间 -->
        <el-time-select v-if="item.type === 'Time'" v-model="tempFormData[item.prop]" :disabled="item.disable"
          :placeholder="item.placeholder ? item.placeholder : '请选择时间'" clearable>
        </el-time-select>

        <!-- 日期时间 -->
        <el-date-picker v-if="item.type === 'DateTime'" type="datetime" v-model="tempFormData[item.prop]"
          :disabled="item.disable" :placeholder="item.placeholder ? item.placeholder : '请选择日期'" clearable>
        </el-date-picker>

        <!-- 日期范围 -->
        <el-date-picker v-if="item.type === 'DateTimeRange' || item.type === 'DateRange'"
          :type="item.type === 'DateTimeRange' ? 'datetimerange' : 'daterange'" v-model="tempFormData[item.prop]"
          :disabled="item.disable" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" clearable>
        </el-date-picker>

        <!-- 单选框 普通的样式 Radio 的尺寸，仅在 border 为真时有效-->
        <!-- :border="tempFormData[item.border]" -->
        <template v-if="item.type === 'Radio'">
          <el-radio-group v-model="tempFormData[item.prop]">
            <el-radio v-for="op in item.options.data" :disabled="item.disable" :border="item.border" :size="item.size"
              :label="op[item.options.value] || op.value" :value="op[item.options.key] || op.key"
              :key="op[item.options.key] || op.key"></el-radio>
          </el-radio-group>
        </template>

        <!-- 单选框 按钮样式 -->
        <el-radio-group v-if="item.type === 'RadioButtom'" v-model="tempFormData[item.prop]" :size="item.size"
          :disabled="item.disable">
          <el-radio-button v-for="op in item.options.data" :label="op[item.options.value] || op.value"
            :value="op[item.options.key] || op.key" :key="op[item.options.key] || op.key"></el-radio-button>
        </el-radio-group>

        <!-- 文本框 -->
        <el-input v-if="item.type === 'Textarea'" v-model="tempFormData[item.prop]" type="textarea"
          :style="{ width: item.width }" :disabled="item.disable" :rows="item.row" :autosize="item.autosize"
          :placeholder="item.placeholder ? item.placeholder : '请输入' + item.label">
        </el-input>
      </el-form-item>
      <!-- 查询按钮 -->
      <span>
        <el-form-item v-show="isSearchBtn">
          <el-button type="primary" @click="handleSearch" :btnLoading="btnLoading">
            {{ formBtn }}
          </el-button>
          <el-button v-show="isResetBtn" type="info" @click="resetFields">
            重置
          </el-button>
        </el-form-item>
      </span>
    </el-form>
  </div>
</template>
 
<script>
import { deepClone } from "../../utils";
export default {
  name: 'CstForm',
  props: {
    formData: { // 用于数据的双向绑定
      type: Object,
      default: function () {
        return {};
      },
    },
    formItems: { // 表单中包含的所有控件的数据
      type: Array,
      default: [],
    },
    isSearchBtn: {
      // 是否展示查询按钮
      type: Boolean,
      default: true,
    },
    formBtn: {
      // 查询按钮的自定义文字
      type: String,
      default: "查询",
    },
    isResetBtn: {
      // 是否展示重置按钮
      type: Boolean,
      default: true,
    },
    btnLoading: {
      // 查询按钮的loading效果
      type: Boolean,
      default: false,
    },
    loading: {
      // 表单加载的loading效果
      type: Boolean,
      default: false,
    },
    // 由inline属性决定form表单是普通表单，还是行内表单
    inline: {
      // 排列方式
      type: Boolean,
      default: true,
    },
    labelWidth: {
      // label宽度
      type: String,
      default: "120px",
    },
    formWidth: {
      // form表单宽度
      type: String,
      default: "200px",
    },
    // 用于控制该表单内组件的尺寸 medium / small / mini
    size: {
      type: String,
      default: "medium",
    },
  },
  computed: {},
  watch: {
    formData: {
      handler(val) {
        this.tempFormData = val;
      },
      deep: true,
      immediate: true,
    },
    formItems: {
      handler(val) {
        this.tempFormItems = deepClone(val);
      },
      deep: true,
      immediate: true,
    },
  },
  data() {
    return {
      show: true,
      tempFormData: {},
      tempFormItems: [],
    };
  },
  methods: {
    // 远程搜索
    remoteMethod(value, prop) {
      this.$emit("remoteMethod", value, prop);
    },
    // 行内表单搜索事件
    handleSearch() {
      this.$refs['form'].validate((valid) => {
        if (valid) { // 通过校验
          this.$emit("handleSearch");
        } else {
          return false;
        }
      });
    },
    // 清空form表单事件
    resetFields() {
      this.$refs.form.resetFields();
    },
  },
};
</script>
 