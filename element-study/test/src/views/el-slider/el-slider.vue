<template>
  <div class="slider">
    <el-row>
      <div>滑块基本用法 el-slider 通过设置绑定值自定义滑块的初始值</div>
      <el-col :span="10">
        <el-slider v-model="value"></el-slider>
      </el-col>
    </el-row>
    
    <el-row>
      <div>自定义初始值   v-model绑定初始值</div>
      <el-col :span="10">
        <el-slider v-model="value1"></el-slider>
      </el-col>
    </el-row>

    <el-row>
      <div>隐藏tooltip   :show-tooltip="false"</div>
      <el-col :span="10">
        <el-slider v-model="value2" :show-tooltip="false"></el-slider>
      </el-col>
    </el-row>

    <el-row>
      <div>格式化tooltip      :format-tooltip="处理函数名"</div>
      <el-col :span="10">
        <el-slider v-model="value2"  :format-tooltip="tooltip"></el-slider>
      </el-col>
    </el-row>

    <el-row>
      <div>禁用  disable</div>
      <el-col :span="10">
        <el-slider v-model="value2"  :format-tooltip="tooltip" disabled></el-slider>
      </el-col>
    </el-row>

    <el-row>
      <div>离散  改变step的值可以改变步长，通过设置show-stops属性可以显示间断点</div>
      <el-col :span="10">
        <el-slider v-model="value2" :step="10" show-stops></el-slider>
      </el-col>
    </el-row>

    <el-row>
      <div>显示输入框   设置show-input属性会在右侧显示一个输入框</div>
      <el-col :span="10">
        <el-slider v-model="value2"  show-input></el-slider>
      </el-col>
    </el-row>

    <el-row>
      <div>范围显示     设置range即可开启范围选择，此时绑定值是一个数组，其元素分别为最小边界值和最大边界值</div>
      <el-col :span="10">
        <el-slider v-model="value3" range max="10"></el-slider>
      </el-col>
    </el-row>

    <el-row>
      <div>竖向显示    设置vertical可使 Slider 变成竖向模式，此时必须设置高度height属性</div>
      <el-col :span="10">
        <el-slider v-model="value" vertical height="200px"></el-slider>
      </el-col>
    </el-row>

    <el-row>
      <div>展示标记    设置 marks 属性可以展示标记</div>
      <el-col :span="10">
        <el-slider v-model="value" range  :marks="marks"></el-slider>
      </el-col>
    </el-row>





  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 0,
      value1:50,
      value2:0,
      value3:[4,8],
      marks:{
          0:"0°C",
          20:"20°C",
          50:"50°C"
      }
    };
  },
  methods: {
    tooltip(val){
        return val/100
    }
}
}

</script>

<style>
</style>