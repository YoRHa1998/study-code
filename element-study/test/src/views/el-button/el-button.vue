<template>
  <div class="home">
    <el-row>
      <i class="el-icon-user"></i>
      <div class="divClass">边框</div>
    </el-row>
    <el-row>
      <div>默认按钮</div>
      <el-button>默认样式按钮</el-button>
      <el-button type="primary">primary按钮</el-button>
      <el-button type="success">success按钮</el-button>
      <el-button type="info">info按钮</el-button>
      <el-button type="warning">warning按钮</el-button>
      <el-button type="danger">danger按钮</el-button>
    </el-row>
    <el-row>
      <div>朴素按钮</div>
      <el-button type="primary" plain>加上plain的朴素按钮</el-button>
      <el-button type="success" plain>加上plain的success按钮</el-button>
      <el-button type="info" plain>加上plain的info按钮</el-button>
      <el-button type="warning" plain>加上plain的warning按钮</el-button>
      <el-button type="danger" plain>加上plain的danger按钮</el-button>
    </el-row>
    <el-row>
      <div>圆角按钮</div>
      <el-button type="primary" round>加上round的圆角按钮</el-button>
      <el-button type="success" round>加上round的success按钮</el-button>
      <el-button type="info" round>加上round的info按钮</el-button>
      <el-button type="warning" round>加上round的warning按钮</el-button>
      <el-button type="danger" round>加上round的danger按钮</el-button>
    </el-row>
    <el-row>
      <div>加上circle的圆角按钮</div>
      <el-button icon="el-icon-search" circle></el-button>
      <el-button type="primary" icon="el-icon-search" circle></el-button>
      <el-button type="success" icon="el-icon-search" circle></el-button>
      <el-button type="info" icon="el-icon-search" circle></el-button>
      <el-button type="warning" icon="el-icon-search" circle></el-button>
      <el-button type="danger" icon="el-icon-search" circle></el-button>
    </el-row>
    <el-row>
      <div>按钮的不可选中 disabled</div>
      <el-button type="primary" disabled>不可选中按钮</el-button>
      <el-button type="primary" disabled plain>不可选中朴素按钮</el-button>
      <el-button type="primary" disabled round>不可选中圆角按钮</el-button>
      <el-button type="primary" icon="el-icon-search" disabled circle></el-button>
    </el-row>
    <el-row>
      <div>图标按钮 加上icon</div>
      <el-button type="primary" icon="el-icon-search">图标按钮</el-button>
    </el-row>
    <el-row>
      <div>按钮组 el-button-group</div>
      <el-button-group>
        <el-button type="primary">普通</el-button>
        <el-button type="primary" plain>朴素</el-button>
        <el-button type="primary" round>圆角</el-button>
      </el-button-group>
    </el-row>
    <el-row>
      <div>加载中按钮 loading="true"</div>
      <el-button type="primary" loading="true">加载中按钮</el-button>
    </el-row>
    <el-row>
      <div>不同大小按钮 设置size</div>
      <el-button type="primary" size="medium">medium大小</el-button>
      <el-button type="primary" size="small">small大小</el-button>
      <el-button type="primary" size="mini">mini大小</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style>
.divClass {
  border: 1px solid black;
  border-radius: 30px;
  width: 100px;
  height: 50px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
</style>