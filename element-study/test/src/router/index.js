import Vue from 'vue'
import VueRouter from 'vue-router'
import ElButton from "../views/el-button/el-button";
import ElLink from "../views/el-link/el-link";
import ElRadio from "../views/el-radio/el-radio";
import ElCheckBox from "../views/el-checkbox/el-checkbox";
import ElInput from "../views/el-input/el-input";
import ElInputNumber from "../views/el-inputNumber/el-inputNumber";
import ElSelect from "../views/el-select/el-select";
import ElCascader from "../views/el-cascader/el-cascader";
import ElSwitch from "../views/el-switch/el-switch";
import ElSlider from "../views/el-slider/el-slider";
import ElTimeSelect from "../views/el-time-select/el-time-select";
import ElDatePicker from "../views/el-datePicker/el-datePicker";



Vue.use(VueRouter)

const routes = [
  {
    path:"",
    redirect:"/button"
  },
  {
    path:"/button",
    component:ElButton
  },
  {
    path:"/link",
    component:ElLink
  },
  {
    path:"/radio",
    component:ElRadio
  },
  {
    path:"/checkbox",
    component:ElCheckBox
  },
  {
    path:"/input",
    component:ElInput
  },
  {
    path:"/inputNumber",
    component:ElInputNumber
  },
  {
    path:"/select",
    component:ElSelect
  },
  {
    path:"/cascader",
    component:ElCascader
  },
  {
    path:"/switch",
    component:ElSwitch
  },
  {
  path: "/slider",
  component:ElSlider
  },
  {
    path:"/time",
    component:ElTimeSelect
  },
  {
    path:"/date",
    component:ElDatePicker
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
