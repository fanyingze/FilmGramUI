

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
    
  </div>

</template>

<script lang="ts">
import { onMounted, provide, reactive, ref, toRaw, toRefs, watch } from "vue"
import gButtonGroup from "./components/Button/ButtonGroup.vue"
import gButton from 'components/Button/Button.vue'
import gInput from 'components/Input/Input.vue'



export default {
  name: 'App',
  components: {
    gButton,
    gButtonGroup,
    gInput,
  

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
</style>
