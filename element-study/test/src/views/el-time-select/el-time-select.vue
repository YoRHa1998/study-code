<template>
  <div class="time">
    <div>基本使用 使用 el-time-select 标签，设置:picker-options，分别通过star、end和step指定可选的起始时间、结束时间和步长</div>
    <el-time-select
      v-model="value"
      placeholder="选择时间"
      :picker-options="{start:'07:00',step:'00:20',end:'21:00'}"
    ></el-time-select>
    <br />
    <br />
    <div>任意时间点 使用 el-time-picker 标签，通过selectableRange限制可选时间范围。提供了两种交互方式：默认情况下通过鼠标滚轮进行选择，打开arrow-control属性则通过界面上的箭头进行选择。</div>
    <el-time-picker
      v-model="value"
      arrow-control
      placeholder="选择时间"
      :picker-options="{selectableRange: '18:30:00 - 20:30:00'}"
    ></el-time-picker>
    <br />
    <br />
    <div>固定时间范围 在end的 :picker-options里设置minTime:startTime</div>
    <el-time-select
      v-model="startTime"
      arrow-control
      placeholder="起始时间"
      :picker-options="{start:'07:00',step:'00:20',end:'21:00'}"
    ></el-time-select>
    <el-time-select
      v-model="endTime"
      arrow-control
      placeholder="结束时间"
      :picker-options="{start:'07:00',step:'00:20',end:'21:00',minTime:startTime}"
    ></el-time-select>
    <br />
    <br />
    <div>任意时间范围 使用 el-time-picker 标签，添加is-range属性即可选择时间范围，同样支持arrow-control属性。</div>
    <div>
      三个属性：
      range-separator="至"
      start-placeholder="开始时间"
      end-placeholder="结束时间"
    </div>
    <el-time-picker
      v-model="value"
      is-range
      range-separator="至"
      start-placeholder="开始时间"
      end-placeholder="结束时间"
      arrow-control
      placeholder="选择时间"
      :picker-options="{selectableRange: '18:30:00 - 20:30:00'}"
    ></el-time-picker>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      startTime: "",
      endTime: ""
    };
  }
};
</script>

<style>
</style>