<template>
  <div class="check">
    <div>单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。</div>
    <div>在el-checkbox元素中定义v-model绑定变量，单一的checkbox中，默认绑定变量的值会是Boolean，选中为true。</div>
    <el-checkbox v-model="checked" label="1">备选项</el-checkbox>

    <div>多选框组：checkbox-group元素能把多个 checkbox 管理为一组，只需要在 Group 中使用v-model绑定Array类型的变量即可。数组初始内容为默认选中元素</div>
    <div>el-checkbox 的 label属性是该 checkbox 对应的值，若该标签中无内容，则该属性也充当 checkbox 按钮后的介绍。</div>
    <div>label与数组中的元素值相对应，如果存在指定的值则为选中状态，否则为不选中。</div>
    <el-checkbox-group v-model="checklist">
      <el-checkbox label="复选框A"></el-checkbox>
      <el-checkbox label="复选框B"></el-checkbox>
      <el-checkbox label="复选框C"></el-checkbox>
      <el-checkbox label="复选框D"></el-checkbox>
      <el-checkbox label="禁选disabled" disabled></el-checkbox>
    </el-checkbox-group>

    <div>数量限制 通过max和min属性设置</div>
    <el-checkbox-group v-model="checklist" min="1" max="3">
      <el-checkbox label="复选框A"></el-checkbox>
      <el-checkbox label="复选框B"></el-checkbox>
      <el-checkbox label="复选框C"></el-checkbox>
      <el-checkbox label="复选框D"></el-checkbox>
      <el-checkbox label="禁选disabled" disabled></el-checkbox>
    </el-checkbox-group>

    <div>样式el-checkbox-button</div>
    <el-checkbox-group v-model="checklist">
      <el-checkbox-button label="按钮复选框A"></el-checkbox-button>
      <el-checkbox-button label="按钮复选框B"></el-checkbox-button>
      <el-checkbox-button label="按钮复选框C"></el-checkbox-button>
      <el-checkbox-button label="按钮复选框D"></el-checkbox-button>
    </el-checkbox-group>

    <div>带边框 设置border</div>
    <el-checkbox-group v-model="checklist">
      <el-checkbox label="边框复选框A" border></el-checkbox>
      <el-checkbox label="边框复选框B" border></el-checkbox>
      <el-checkbox label="边框复选框C" border></el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
      checklist: ["复选框A", "复选框B"]
    };
  }
};
</script>

<style>
</style>