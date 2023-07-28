<template>
  <div class="cst-input">
    <el-input v-bind="$attrs" v-model="inputVal" @input="handleInput"></el-input>
  </div>
</template>
<script>
  export default {
    name:"CstInput",
    // props: {
    //   // 输入框的值
    //   fieldValue: {
    //     type: String,
    //     default: ""
    //   }
    // },
    data() {
      return {
        inputVal: ""
      }
    },
    // watch: {
    //   fieldValue:  {
    //     handler(val) {
    //       console.log(val);
    //       this.inputVal = val;
    //     }
    //   },
    //   deep: true,
    //   immediate: true
    // },
    methods: {
      handleInput(value)  {
        this.$emit('handleInput',value)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .cst-input {
    transition: 0.3s;
    &:hover,&:focus-within {
      filter: drop-shadow( 0 0 3px rgba(0,0,0,0.3));
    }
  }
</style>