

<template>



  <div class="showdiv">
    <gButton icon="setting" icon-position="left" :openLoading='true'>一个按钮</gButton>
    <gButton icon="setting" icon-position="right" :openLoading='true'>一个按钮</gButton>
    <gButton>一个按钮</gButton>
  </div>
  <div class="showdiv">
    <gButtonGroup>
      <gButton icon="arrow-left">一个按钮</gButton>
      <gButton icon="arrow-right" icon-position="right">一个按钮</gButton>
    </gButtonGroup>
  </div>
  <div class="showdiv">
    {{ val }}
    <gInput placeholder="请输入内容"></gInput>
    <gInput placeholder="请输入内容" type="textarea"></gInput>
    <gInput placeholder="请输入内容" icon="setting" size="small"></gInput>
    <gInput placeholder="请输入内容" icon="setting"></gInput>
    <gInput placeholder="请输入内容" icon="setting" size="large"></gInput>
    <gInput value="Filmgram-UI" icon="setting" size="large"></gInput>
    <gInput placeholder="请输入内容" icon="setting" size="large" :disabled="true"></gInput>

  </div>

</template>

<script lang="ts">
import { onMounted, provide, reactive, ref, toRaw, toRefs, watch } from "vue"
import gButtonGroup from "./components/ButtonGroup.vue"
import gButton from 'components/Button.vue'
import gInput from 'components/Input.vue'
import testBar from 'components/testBar.vue'


export default {
  name: 'App',
  components: {
    gButton,
    gButtonGroup,
    gInput,
    testBar,

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
