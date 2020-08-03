<template>
  <div class="switch">
    <div>开关基本用法 el-switch</div>
    <div>绑定v-model到一个Boolean类型的变量。可以使用active-color属性与inactive-color属性来设置开关的背景色。</div>
    <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
    <br />
    <br />
    <div>禁用状态 disabled</div>
    <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949" disabled></el-switch>
    <br />
    <br />
    <div>文字描述 使用active-text属性与inactive-text属性来设置开关的文字描述。</div>
    <el-switch v-model="value" active-text="月卡大佬" inactive-text="白嫖玩家"></el-switch>
    <br />
    <br />
    <div>扩展的 value 类型    设置active-value和inactive-value属性，接受Boolean, String或Number类型的值。</div>
    <el-switch v-model="value2" active-text="月卡大佬" inactive-text="白嫖玩家" active-value="100" inactive-value="0"></el-switch>
    <link rel="stylesheet" href="https://view.officeapps.live.com/op/view.aspx?src=/home/xinjf/文档/WeChat Files/LLF123-/FileStorage/File/2019-11/DISC性格测试分析.docx">
  </div>

</template>

<script>
export default {
  data() {
    return {
      value: true,
      value2:"100"
    };
  }
};
</script>

<style>
</style>