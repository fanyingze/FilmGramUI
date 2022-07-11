
<template>
  <div class="messageBox-wrap" v-if="config.isShow">
  <!-- 成功的弹窗 -->
  
    <div class="message-success message-box">
      <div class="message-title">
        <span>{{ config.title }}</span>
        <a id="message-close" @click="MessageBoxClose" href="javascript:;">×</a>
      </div>
      <div class="message-content">
        <div v-if="config.type=='warn'"><svg t="1657508484195" class="message-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3031" width="200" height="200"><path d="M512 64C264.8 64 64 264.8 64 512s200.8 448 448 448 448-200.8 448-448S759.2 64 512 64z m32 704h-64v-64h64v64z m-64-128V256h64v384h-64z" p-id="3032" fill="#E6A23C"></path></svg></div>
        <div v-if="config.type=='success'"><svg t="1657509692938" class="message-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1058" width="200" height="200"><path d="M512 0a512 512 0 1 0 512 512A512 512 0 0 0 512 0z m232.777143 382.72l-310.857143 310.857143a18.285714 18.285714 0 0 1-25.965714 0l-129.28-129.28a18.285714 18.285714 0 0 1 0-25.965714L305.188571 512a18.285714 18.285714 0 0 1 25.782858 0l85.394285 85.394286a7.314286 7.314286 0 0 0 10.24 0L693.028571 330.971429a18.285714 18.285714 0 0 1 25.782858 0l25.965714 25.782857a18.285714 18.285714 0 0 1 0 25.965714z" fill="#67c23a" p-id="1059"></path></svg></div>
       {{ config.content }} 
      </div>
      <div class="message-btn">
        
        <g-button v-if="config.isOpenCancelButton" @click="config.cancelCallBack();MessageBoxClose()"  class="cancelBtn">{{ config.cancelButtonText}}</g-button>
        <g-button @click="config.callback();MessageBoxClose()"  color="blue">{{ config.confirmButtonText}}</g-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { reactive } from 'vue'
import gButton from 'components/Button/Button.vue'
export default {
  name: 'gMessageBox',
  props: {

  },
  components:{
    gButton
  },
  setup(props: any) {
    const config = reactive({
      isShow: false,
      type: '',
      title: '',
      content: '',
      confirmButtonText: '',
      callback: () => { },
      isOpenCancelButton:false,
      cancelButtonText:'',
      cancelCallBack:() =>{}
    })
    const MessageBoxClose = ()=>{
      config.isShow = false
    }
    return {
      config,
      MessageBoxClose
    }
  }
}
</script>

<style lang="css" scoped>
.messageBox-wrap {
  background: rgba(0, 0, 0, .2);
  position: fixed;
  top: 0px;
  left: 0px;
  height: 0px;
  width: 100%;
  height: 100%;
  z-index: 20;
}
.message-box{
  border-radius:5px;
  padding:15px;
  width:420px;
  background:#FFF;
  position:absolute;
  left:50%;
  top:30%;
  transform:translate(-50%,0%);
  box-shadow:0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.12);
}
.message-title{
  font-size:18px;
  display:flex;
  justify-content: space-between;
  margin-bottom: 15px;
}
#message-close{
  text-decoration: none;
  color: #888;
  font-weight: 300;
}
#message-close:hover{
  color: var(--message-hover-color);
}
.message-content{
  color: var(--message-content-color);
  /* line-height: 30px; */
  display: flex;
  align-items: flex-start;
}
.message-btn{
  margin-top: 15px;
  display: flex;
  justify-content: flex-end;
}
.cancelBtn{
  margin-right: 12px;
}

.message-icon{
  width: 2em; height: 2em;
  margin-right: 5px;
  margin-top: -5px;
}
</style>
