

<template>
  <div class="showdiv">
    <h2>按钮</h2>
    <gButton icon="setting" icon-position="left" :openLoading='true'>一个按钮</gButton>
    <gButton icon="setting" icon-position="right" :openLoading='true'>一个按钮</gButton>
    <gButton>一个按钮</gButton>
  </div>
  <div class="showdiv">
    <h2>按钮组</h2>
    <gButtonGroup>
      <gButton icon="arrow-left">一个按钮</gButton>
      <gButton icon="arrow-right" icon-position="right">一个按钮</gButton>
    </gButtonGroup>
  </div>
  <div class="showdiv">
    <h2>输入框</h2>
    <gInput placeholder="请输入内容"></gInput>
    <gInput placeholder="请输入内容" type="textarea"></gInput>
    <gInput placeholder="请输入内容" icon="setting" size="small"></gInput>
    <gInput placeholder="请输入内容" icon="setting"></gInput>
    <gInput placeholder="请输入内容" icon="setting" size="large"></gInput>
    <gInput value="Filmgram-UI" icon="setting" size="large"></gInput>
    <gInput placeholder="请输入内容" icon="setting" size="large" :disabled="true"></gInput>

  </div>

  <div class="showdiv">
    <h2>布局</h2>
    <g-row >
      <g-col ><div class="black"></div></g-col>
    </g-row>
    <g-row >
      <g-col :span="12" ></g-col>
      <g-col :span="12" ></g-col>
    </g-row>
    <g-row >
      <g-col :span="4" ></g-col>
      <g-col :span="4" ></g-col>
      <g-col :span="4" ></g-col>
      <g-col :span="4" ></g-col>
      <g-col :span="4" ></g-col>
      <g-col :span="4" ></g-col>
    </g-row>
    <h2>带间隙的布局</h2>
    <g-row :gutter="20">
      <g-col :span="12" ></g-col>
      <g-col :span="12" ></g-col>
    </g-row>
    <g-row :gutter="20">
      <g-col :span="6" ></g-col>
      <g-col :span="6" ></g-col>
      <g-col :span="6" ></g-col>
      <g-col :span="6" ></g-col>
    </g-row>
    
    <h2>缩进的布局</h2>
    <g-row >
      <g-col :span="12" ></g-col>
      <g-col :span="11" :offSet="1"></g-col>
    </g-row>
    <g-row >
      <g-col :span="8" ></g-col>
      <g-col :span="6" :offSet="2"></g-col>
      <g-col :span="8" ></g-col>
    </g-row>
  </div>

</template>

<script lang="ts">
import { onMounted, provide, reactive, ref, toRaw, toRefs, watch } from "vue"
import gButtonGroup from "./components/Button/ButtonGroup.vue"
import gButton from 'components/Button/Button.vue'
import gInput from 'components/Input/Input.vue'
import gRow from 'components/Layout/Row.vue'
import gCol from 'components/Layout/Col.vue'



export default {
  name: 'App',
  components: {
    gButton,
    gButtonGroup,
    gInput,
    gRow,
    gCol
  

  },
  setup() {



    return {


    }
  }
}
</script>

<style>
@import './assets/css/basic.css';

/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: var(--font-size)
} */

/* .wrap {
  width: 500px;
  margin: 0 auto;
  padding: 30px 20px;
  border: 1px solid rgba(0, 0, 0, .1);
  border-radius: 5px;
} */
.showdiv {
  margin-top: 20px;
}

.showdiv>* {
  margin-top: 10px;
}

.atinput {
  margin-left: 30px;
}
.red{
  background-color: #d3dce6;
  border-radius: 5px;
  width: 100%;
  height: 30px;
}
.blue{
  background-color: #e5e9f2;
  border-radius: 5px;
  width: 100%;
  height: 30px;
}
.black{
  background-color: #99a9bf;
  border-radius: 5px;
  width: 100%;
  height: 30px;
}
</style>
