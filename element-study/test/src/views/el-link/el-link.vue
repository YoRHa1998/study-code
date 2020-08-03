<template>
  <div class="link">
    <el-row>
        <div>el中的a标签  el-link 样式同样有5种</div>
        <el-link href="https://www.baidu.com" target="_blank">默认链接</el-link>
        <el-link type="primary" href="https://www.baidu.com" target="_blank">默认链接</el-link>
        <el-link type="success" href="https://www.baidu.com" target="_blank">默认链接</el-link>
        <el-link type="info" href="https://www.baidu.com" target="_blank">默认链接</el-link>
        <el-link type="warning" href="https://www.baidu.com" target="_blank">默认链接</el-link>
        <el-link type="danger" href="https://www.baidu.com" target="_blank">默认链接</el-link>
    </el-row>

    <el-row>
        <div>禁用状态  disabled</div>
        <el-link type="primary" disabled>禁用状态链接</el-link>
    </el-row>

    <el-row>
        <div>无下划线链接  :underline="false"</div>
        <el-link type="primary" :underline="false">禁用状态链接</el-link>
    </el-row>
    <el-row>
        <div>带图标链接  icon</div>
        <el-link type="primary" icon="el-icon-search">带图标链接</el-link>
    </el-row>
    
    
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>