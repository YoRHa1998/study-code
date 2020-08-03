<template>
  <div class="radio">
    <div>单选框 通过v-model绑定为同一组 label为选中所代表的值</div>
    <el-radio v-model="radio" label="1">选项一</el-radio>
    <el-radio v-model="radio" label="2">选项二</el-radio>
    <el-radio v-model="radio" label="3">选项三</el-radio>

    <div>单选组 el-radio-group 只需要绑定一个v-model</div>
    <el-radio-group v-model="radio">
      <el-radio label="4">选项四</el-radio>
      <el-radio label="5">选项五</el-radio>
      <el-radio label="6">选项六</el-radio>
    </el-radio-group>

    <div>不可选中 disabled</div>
    <el-radio label="7" disabled>选项七</el-radio>

    <div>按钮样式 把el-radio换成el-radio-button 同时可以调整size(同样是medium/small/mini)</div>
    <el-radio-group v-model="radio" size="medium">
      <el-radio-button label="8">选项八</el-radio-button>
      <el-radio-button label="9">选项九</el-radio-button>
      <el-radio-button label="10">选项十</el-radio-button>
    </el-radio-group>
    <br />
    <el-radio-group v-model="radio" size="small">
      <el-radio-button label="11">选项十一</el-radio-button>
      <el-radio-button label="12">选项十二</el-radio-button>
      <el-radio-button label="13">选项十三</el-radio-button>
    </el-radio-group>
    <br />
    <el-radio-group v-model="radio" size="mini">
      <el-radio-button label="14">选项十四</el-radio-button>
      <el-radio-button label="15">选项十五</el-radio-button>
      <el-radio-button label="16">选项十六</el-radio-button>
    </el-radio-group>

    <div>带边框的radio 设置border属性</div>
    <el-radio v-model="radio" label="17" border >选项一</el-radio>
    <el-radio v-model="radio" label="18" border>选项二</el-radio>
    <el-radio v-model="radio" label="19" border>选项三</el-radio>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: 1
    };
  }
};
</script>

<style>
</style>