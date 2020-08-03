<template>
  <div class="select">
    <div>基本使用 v-model的值为当前被选中的el-option的 value 属性值</div>
    <div>el-select里面嵌套一个el-option 有label和value</div>
    <el-select v-model="value" placeholder="请选择">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <br />
    <br />
    <div>禁用选项 在el-option中，设定disabled值为 true，即可禁用该选项</div>
    <el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
      ></el-option>
    </el-select>
    <br />
    <br />
    <div>禁用选项卡 在el-select中，设定disabled值为 true，即可禁用整个选项卡</div>
    <el-select v-model="value" placeholder="请选择" disabled>
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <br />
    <br />
    <div>可清空单选 在el-select中，设定clearable值为 true，则可将选择器清空。需要注意的是，clearable属性仅适用于单选。</div>
    <el-select v-model="value" placeholder="请选择" clearable>
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <br />
    <br />
    <div>基础多选 为el-select设置multiple属性即可启用多选，此时v-model的值为当前选中值所组成的数组。默认情况下选中值会以 Tag 的形式展现，你也可以设置collapse-tags属性将它们合并为一段文字。</div>
    <el-select v-model="value" placeholder="请选择" clearable multiple>
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <br />
    <br />
    <div>自定义模板 将自定义的 HTML 模板插入el-option的 slot区域（标签中） 中即可。</div>
    <el-select v-model="value" placeholder="请选择" clearable>
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        <span style="float: left">{{ item.label }}</span>
        <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
      </el-option>
    </el-select>
    <br />
    <br />
    <div>分组 使用el-option-group对备选项进行分组，它的label属性为分组名</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶",
          disabled: "true"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: ""
    };
  }
};
</script>

<style>
</style>