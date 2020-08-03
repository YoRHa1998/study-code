<template>
  <div class="navBar">
    <el-menu mode="horizontal">
      <el-submenu index="1">
        <template slot="title">basic</template>
        <router-link to="/button">
          <el-menu-item index="1-1">el-button</el-menu-item>
        </router-link>
        <router-link to="/link">
          <el-menu-item index="1-1">el-link</el-menu-item>
        </router-link>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">form</template>
        <router-link to="/radio">
          <el-menu-item index="2-1">el-radio</el-menu-item>
        </router-link>
        <router-link to="/checkbox">
          <el-menu-item index="2-2">el-checkbox</el-menu-item>
        </router-link>
        <router-link to="/Input">
          <el-menu-item index="2-3">el-Input</el-menu-item>
        </router-link>
        <router-link to="/inputNumber">
          <el-menu-item index="2-4">el-Input-number</el-menu-item>
        </router-link>
        <router-link to="/select">
          <el-menu-item index="2-5">el-select</el-menu-item>
        </router-link>
        <router-link to="/cascader">
          <el-menu-item index="2-6">el-cascader</el-menu-item>
        </router-link>
        <router-link to="/switch">
          <el-menu-item index="2-7">el-switch</el-menu-item>
        </router-link>
        <router-link to="/slider">
          <el-menu-item index="2-8">el-slider</el-menu-item>
        </router-link>
        <router-link to="/time">
          <el-menu-item index="2-9">el-time-select</el-menu-item>
        </router-link>
        <router-link to="/date">
          <el-menu-item index="2-10">el-date-picker</el-menu-item>
        </router-link>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">data</template>
        <el-menu-item index="3-1">Table</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>