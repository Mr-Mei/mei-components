# Form 表单

基于element-ui的form表单进行二次封装

## 基本用法

由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据

::: demo
```vue
<template>
  <div>
    <CstForm
      :formData="formData"
      :formItems="formItems"
      :btnLoading="btnLoading"
      :inline="inline"
      @handleSearch="handleSearch"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      formItems: [],
      formData: {},
      btnLoading: true,
      inline: false
    };
  },
  created() {
    this.initFormItems();
  },
  methods: {
    initFormItems() {
      this.formItems = [
        {
          type: "Input",
          name: "keyName",
          prop: "keyName",
          label: "用户名",
          placeholder: "请输入用户名",
          disable: false,
          rules: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
          ]
        },
        {
          type: "InputNumber",
          name: "keyNumber",
          prop: "keyNumber",
          label: "年龄",
          placeholder: "请输入年龄",
          rules: [
            { required: true, message: '请输入年龄', trigger: 'blur' },
          ]
        },
        {
          type: "Select",
          name: "keyRole",
          prop: "keyRole",
          label: "角色",
          placeholder: "请选择角色",
          options:{
            data:[
              {
                key: 1, // 传给后台的value
                value: '游客', // 要展示的数据
              },
              {
                key: 2,
                value: '管理员',
              }
            ]
          },
          rules: [
            { required: true, message: '请选择角色'},
          ]
        },
        {
          type: "Date",
          name: "keyDate",
          prop: "keyDate",
          label: "日期",
          placeholder: "请选择日期",
        },
        {
          type: "Time",
          name: "keyTime",
          prop: "keyTime",
          label: "时间",
          placeholder: "请选择时间",
        },
        {
          type: "DateTime",
          name: "keyDateTime",
          prop: "keyDateTime",
          label: "日期",
          placeholder: "请选择日期时间",
          rules: [
            { required: true, message: '请选择日期时间'},
          ]
        },
        {
          type: "DateRange",
          name: "keyDateRange",
          prop: "keyDateRange",
          label: "日期范围",
          placeholder: "请选择日期范围",
          rules: [
            { required: true, message: '请选择日期范围'},
          ]
        },
        {
          type: "DateTimeRange",
          name: "keyDateTimeRange",
          prop: "keyDateTimeRange",
          label: "日期范围",
          placeholder: "请选择日期范围",
        },
        {
          type: "Radio",
          name: "keyRadio",
          prop: "keyRadio",
          border: false,
          size: 'mini' ,
          label: "性别",
          options:{
            data:[
              {
                key: 1,  // 传给后台的value
                value: '男', // 要展示的数据
              },
              {
                key: 2,
                value: '女',
              },
              {
                key: 3,
                value: '不确定',
              }
            ],
          },
          rules: [
            { required: true, message: '请选择性别'},
          ]
        },
        {
          type: "RadioButtom",
          name: "keyRadioButtom",
          prop: "keyRadioButtom",
          size: 'medium' ,
          options:{
            data:[
              {
                key: 1,  // 传给后台的value
                value: '第一', // 要展示的数据
              },
              {
                key: 2,
                value: '第二',
              },
              {
                key: 3,
                value: '第三',
              }
            ],
          }
        },
        {
          type: "Textarea",
          name: "keyTextarea",
          prop: "keyTextarea",
          row: 5,
          autosize: false,
          label: "备注",
          placeholder: "请输入文本"
        },
      ];
    },
    handleSearch() {},
  },
};
</script>
```
:::

## Attributes 属性

| 参数 | 说明               | 类型   | 可选项 | 默认值   |
| ---- | ------------------ | ------ | ------ | -------- |
| inline | 设定表单是普通表单还是行内表单，默认为true| Boolean |      | true |
| formData | 用于数据双向绑定，默认为对象 | Object |      | {} |
| formItems | 所含控件的配置数据，默认为数组 | Array |    | [] |
| isShowBtn | 控制是否展示查询按钮，默认为true | Boolean |    | true |
| formBtn | 查询按钮的自定义文字，默认为查询 | String |    | 查询 |
| btnLoading | 查询按钮的加载效果，默认为false | Boolean |    | false |
| loading | 表单的加载效果，默认为false | Boolean |    | false |
| formWidth | 表单宽度，默认为200px | String |    | 200px |
| labelWidth | lable宽度，默认为120px | String |    | 120px |
| size | 控制该表单内组件的尺寸，默认为medium | String | medium / small / mini   | medium |

## 组件封装
```js
// utils.js 中的 deepClone 方法

  /**
 * 深度克隆
 * @param {*} target 需要克隆的对象
 * @returns 
 */

export const deepClone = (target, map = new WeakMap())=> {
  if(typeof target === "object") {
    let cloneRes = Array.isArray(target) ? [] : {};
    // 防止循环调用导致栈内存溢出
    if(map.get(target)) {
      return map.get(target);
    }
    map.set(target, cloneRes);
    for (const key in target) {
      cloneRes[key] = deepClone(target[key], map)
    }
    return cloneRes
  }else {
    return target
  }
}
```
```vue
<template>
  <div :class="inline == true ? 'cst-form' : ''">
    <el-form
      :model="tempFormData"
      :label-width="labelWidth"
      :width="formWidth"
      :inline="inline"
      :loading="loading"
      ref="form"
      :size="size"
    >
      <el-form-item
        v-for="item in tempFormItems"
        :label="item.label ? item.label + '：' : ''"
        :key="item.prop"
        :prop="item.prop"
        :rules="item.rules"
      >
        <!-- 输入框 -->
        <el-input
          v-if="item.type === 'Input'"
          v-model="tempFormData[item.prop]"
          :style="{ width: item.width }"
          :disabled="item.disable"
          :placeholder="item.placeholder ? item.placeholder : '请输入' + item.label"
        >
        </el-input>
        <!-- 数字输入框 -->
        <el-input
          type="number"
          :min="1"
          v-if="item.type === 'InputNumber'"
          v-model.number="tempFormData[item.prop]"
          :style="{ width: item.width }"
          :disabled="item.disable"
          :placeholder="item.placeholder ? item.placeholder : '请输入' + item.label"
        >
        </el-input>
        <!-- 下拉框 filterable 是否可搜索 默认是false  multiple 是否多选 默认false-->
        <el-select
          v-if="item.type === 'Select'"
          :multiple="item.multiple"
          :filterable="item.filterable"
          v-model="tempFormData[item.prop]"
          :style="{ width: item.width }"
          :disabled="item.disable"
          :placeholder="item.placeholder ? item.placeholder : '请选择' + item.label"
          :remote="item.remote"
          :remote-method="
            (query) => {
              remoteMethod(query, item.prop);
            }
          "
          clearable
        >
          <el-option
            v-for="op in item.options.data"
            :label="op[item.options.value] || op.value"
            :value="op[item.options.key] || op.key"
            :key="op[item.options.key] || op.key"
          >
          </el-option>
        </el-select>
 
        <!-- 日期 -->
        <el-date-picker
          v-if="item.type === 'Date'"
          v-model="tempFormData[item.prop]"
          :disabled="item.disable"
          :placeholder="item.placeholder ? item.placeholder : '请选择日期'"
          clearable
        >
        </el-date-picker>
 
        <!-- 时间 -->
        <el-time-select
          v-if="item.type === 'Time'"
          v-model="tempFormData[item.prop]"
          :disabled="item.disable"
          :placeholder="item.placeholder ? item.placeholder : '请选择时间'"
          clearable
        >
        </el-time-select>
 
        <!-- 日期时间 -->
        <el-date-picker
          v-if="item.type === 'DateTime'"
          type="datetime"
          v-model="tempFormData[item.prop]"
          :disabled="item.disable"
          :placeholder="item.placeholder ? item.placeholder : '请选择日期'"
          clearable
        >
        </el-date-picker>
 
        <!-- 日期范围 -->
        <el-date-picker
          v-if="item.type === 'DateTimeRange'||item.type === 'DateRange'"
          :type="item.type === 'DateTimeRange'?'datetimerange':'daterange'"
          v-model="tempFormData[item.prop]"
          :disabled="item.disable"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          clearable
        >
        </el-date-picker>
 
        <!-- 单选框 普通的样式 Radio 的尺寸，仅在 border 为真时有效-->
        <!-- :border="tempFormData[item.border]" -->
        <template v-if="item.type === 'Radio'">
          <el-radio
            v-model="tempFormData[item.prop]"
            v-for="op in item.options.data"
            :disabled="item.disable"
            :border="item.border"
            :size="item.size"
            :label="op[item.options.value] || op.value"
            :value="op[item.options.key] || op.key"
            :key="op[item.options.key] || op.key"
          ></el-radio>
        </template>
 
        <!-- 单选框 按钮样式 -->
        <el-radio-group
          v-if="item.type === 'RadioButtom'"
          v-model="tempFormData[item.prop]"
          :size="item.size"
          :disabled="item.disable"
        >
          <el-radio-button
            v-for="op in item.options.data"
            :label="op[item.options.value] || op.value"
            :value="op[item.options.key] || op.key"
            :key="op[item.options.key] || op.key"
          ></el-radio-button>
        </el-radio-group>
 
        <!-- 文本框 -->
        <el-input
          v-if="item.type === 'Textarea'"
          v-model="tempFormData[item.prop]"
          type="textarea"
          :style="{ width: item.width }"
          :disabled="item.disable"
          :rows="item.row"
          :autosize="item.autosize"
          :placeholder="item.placeholder ? item.placeholder : '请输入' + item.label"
        >
        </el-input>
      </el-form-item>
      <!-- 查询按钮 de-->
      <span>
        <el-form-item v-show="isShowBtn">
          <el-button type="primary" @click="handleSearch" :btnLoading="btnLoading">
            {{ formBtn }}
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
    isShowBtn: {
      // 是否展示查询按钮
      type: Boolean,
      default: true,
    },
    formBtn: {
      // 查询按钮的自定义文字
      type: String,
      default: "查询",
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
    remoteMethod(value, type) {
      this.$emit("remoteMethod", value, type);
    },
    // 行内表单搜索事件
    handleSearch() {
      this.$emit("handleSearch");
    },
    // 清空form表单事件
    resetFields() {
      this.$refs.form.resetFields();
    },
  },
};
</script>
```
