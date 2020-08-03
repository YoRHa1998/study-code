<template>
  <div>
    <div>基础用法 默认文本框长度是屏幕100%，可以通过el-row来控制文本框长度</div>
    <el-row>
      <el-col :span="3">
        <el-input v-model="input" placeholder="请输入文字"></el-input>
      </el-col>
    </el-row>
    <div>禁用状态 disabled</div>
    <el-row>
      <el-col :span="3">
        <el-input v-model="input" placeholder="请输入文字" disabled></el-input>
      </el-col>
    </el-row>
    <div>可清空文本框 clearable</div>
    <el-row>
      <el-col :span="3">
        <el-input v-model="input" placeholder="请输入文字" clearable></el-input>
      </el-col>
    </el-row>
    <div>密码框 show-password</div>
    <el-row>
      <el-col :span="3">
        <el-input v-model="input" placeholder="请输入文字" show-password></el-input>
      </el-col>
    </el-row>
    <div>文本框前后加图标 prefix-icon和suffix-icon</div>
    <el-row>
      <el-col :span="3">
        <el-input v-model="input" placeholder="请输入文字" prefix-icon="el-icon-date"></el-input>
        <el-input v-model="input" placeholder="请输入文字" suffix-icon="el-icon-search"></el-input>
      </el-col>
    </el-row>
    <div>文本域 通过将 type 属性的值指定为 textarea。文本域高度可通过 rows 属性控制</div>
    <div>通过设置 autosize 属性可以使得文本域的高度能够根据文本内容自动进行调整，并且 autosize 还可以设定为一个对象，指定最小行数和最大行数。</div>
    <el-row>
      <el-col :span="3">
        <el-input v-model="input" type="textarea" rows="2" placeholder="请输入文字"></el-input>
        <el-input
          v-model="input"
          type="textarea"
          rows="2"
          placeholder="设置了autosize"
          :autosize="{ maxRows: 4, minRows: 2}"
        ></el-input>
      </el-col>
    </el-row>
    <div>输入长度限制：maxlength 和 minlength 是原生属性，用来限制输入框的字符长度，其中字符长度是用 Javascript 的字符串长度统计的。</div>
    <div>对于类型为 text 或 textarea 的输入框，在使用 maxlength 属性限制最大输入长度的同时，可通过设置 show-word-limit 属性来展示字数统计。</div>
    <el-row>
      <el-col :span="3">
        <el-input v-model="input" placeholder="设置了autosize" maxlength="10" show-word-limit></el-input>
      </el-col>
    </el-row>
    <div>尺寸：可通过 size 属性指定输入框的尺寸，除了默认的大小外，还提供了 large、small 和 mini 三种尺寸。</div>
    <el-row>
      <el-col :span="3">
        <el-input v-model="input" placeholder="设置了autosize" size="large"></el-input>
        <el-input v-model="input" placeholder="设置了autosize" size="small"></el-input>
        <el-input v-model="input" placeholder="设置了autosize" size="mini"></el-input>
      </el-col>
    </el-row>
    <div>复合型输入框：可前置或后置元素，一般为标签或按钮</div>
    <div>可通过template(不一定是template，也可以是el-button之类的)中的 slot 来指定在 input 中前置或者后置内容。prepend为前置。append为后置</div>
    <div>template写在input里面</div>
    <el-row>
      <el-input v-model="input" placeholder="设置了autosize">
        <template slot="prepend">HTTPS://</template>
      </el-input>
      <el-input v-model="input" placeholder="设置了autosize">
        <template slot="append">.com</template>
      </el-input>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: ""
    };
  }
};
</script>

<style>
</style>