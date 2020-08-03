<template>
  <div class="dataPicker">
<div>基本使用   el-data-picker</div>
<div>基本单位由type属性指定。快捷选项需配置picker-options对象中的shortcuts，禁用日期通过 disabledDate 设置，传入函数</div>
<el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
  </div>
</template>

<script>
export default {
data() {
    return {
        value1:""
    }
},
}
</script>

<style>

</style>