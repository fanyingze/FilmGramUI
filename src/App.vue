

<template>
  
  <!-- <g-toast></g-toast> -->

  <div class="showdiv">
    <h2>按钮</h2>
    <gButton icon="setting" icon-position="left" :openLoading='true' color="blue">一个按钮</gButton>
    <gButton icon="setting" icon-position="left" :openLoading='true' color="red">一个按钮</gButton>
    <gButton icon="setting" icon-position="left" :openLoading='true' color="green">一个按钮</gButton>
    <gButton icon="setting" icon-position="left" :openLoading='true' >一个按钮</gButton>
    <!-- <gButton icon="setting" icon-position="right" :openLoading='true' >一个按钮</gButton> -->
    <!-- <gButton color="green">一个按钮</gButton> -->
  </div>
  <div class="showdiv">
    <h2>按钮组</h2>
    <gButtonGroup>
      <gButton icon="arrow-left">一个按钮</gButton>
      <gButton icon="arrow-right" icon-position="right">一个按钮</gButton>
    </gButtonGroup>
  </div>
  <!-- <div class="showdiv">
    <h2>输入框</h2>
    <gInput placeholder="请输入内容"></gInput>
    <gInput placeholder="请输入内容" type="textarea"></gInput>
    <gInput placeholder="请输入内容" icon="setting" size="small"></gInput>
    <gInput placeholder="请输入内容" icon="setting"></gInput>
    <gInput placeholder="请输入内容" icon="setting" size="large"></gInput>
    <gInput value="Filmgram-UI" icon="setting" size="large"></gInput>
    <gInput placeholder="请输入内容" icon="setting" size="large" :disabled="true"></gInput>

  </div> -->

  <a href="javascript:;" @click="test">打开消息盒子</a>
  <a href="javascript:;" @click="test2">打开消息盒子2</a>

</template>

<script lang="ts">
import { onMounted, provide, reactive, ref, toRaw, toRefs, watch } from "vue"
import gButtonGroup from "./components/Button/ButtonGroup.vue"
import gButton from 'components/Button/Button.vue'
import gInput from 'components/Input/Input.vue'
import gRow from 'components/Layout/Row.vue'
import gCol from 'components/Layout/Col.vue'


import MessageBox from 'plugin/MessageBox/index'



export default {
  name: 'App',
  components: {
    gButton,
    gButtonGroup,
    gInput,
    gRow,
    gCol,
    
  

  },
  setup() {
    const output = () =>{
      console.log(ref)
    }
    const test = () =>{
      MessageBox.success({
      title:'我是带取消按钮的对话框',
      content:'我是带取消按钮的对话框内容',
      confirmButtonText:'好的',
      callback:output,
      cancelButtonText:'取消',
      cancelCallBack:()=>{}
    })
    }
    const test2 = () =>{
      MessageBox.warn({
      title:'我是一个对话框',
      content:'我是对话框的内容',
      confirmButtonText:'确定',
    })
    }
    return {
      test,
      test2

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
