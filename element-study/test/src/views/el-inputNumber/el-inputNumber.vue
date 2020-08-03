<template>
  <div class="inputNumber">
    <el-row>
      <div>基本用法 el-input-number标签</div>
      <div>要使用它，只需要在el-input-number元素中使用v-model绑定变量即可，变量的初始值即为默认值。</div>
      <div>:min设置最小值 :max设置最大值 @change设置事件</div>
      <div>disabled设置禁用状态</div>
      <el-input-number v-model="num" label="计数器" :min="1" :max="10"></el-input-number>
      <br />
      <br />
      <el-input-number v-model="num" label="计数器" :min="1" :max="10" disabled></el-input-number>
      <br />
      <br />
      <div>step设置间隔的步数 设置step属性可以控制步长，接受一个Number。</div>
      <el-input-number v-model="num" label="计数器" :min="1" :max="10" step="2"></el-input-number>
      <br />
      <br />
      <div>精度 设置 precision 属性可以控制数值精度，表示后面小数点的位数，接收一个 Number。</div>
      <el-input-number v-model="num" label="计数器" :min="1" :max="10" precision="2" step="0.1"></el-input-number>
      <br />
      <br />
      <div>按钮位置 设置 controls-position 属性可以控制按钮位置。</div>
      <el-input-number v-model="num" label="计数器" :min="1" :max="10" precision="2" step="0.1" controls-position="right"></el-input-number>
      <br />
      <br />
      <div>大小  同样用size控制大小  有medium small mini三种</div>
      <el-input-number v-model="num" label="计数器" :min="1" :max="10" precision="2" step="0.1" size="medium"></el-input-number>
      <el-input-number v-model="num" label="计数器" :min="1" :max="10" precision="2" step="0.1" size="small"></el-input-number>
      <el-input-number v-model="num" label="计数器" :min="1" :max="10" precision="2" step="0.1" size="mini"></el-input-number>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 1
    };
  }
};
</script>

<style>
</style>