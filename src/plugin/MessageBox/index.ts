import messageBox from './MessageBox.vue'
import { createApp, inject, provide } from 'vue'



function newMessageBox(detail,type){
  
  const Message_EXTEND = createApp(messageBox)
  const Message_CREARE_EL = Message_EXTEND.mount(
      document.createElement("div")
  )
  document.body.appendChild(Message_CREARE_EL.$el);
    
  // console.log(Message_CREARE_EL.config)
  
  Message_CREARE_EL.config.isShow = true
  Message_CREARE_EL.config.type = type
  Message_CREARE_EL.config.title = detail.title? detail.title : '';
  Message_CREARE_EL.config.content = detail.content? detail.content : '';
  Message_CREARE_EL.config.confirmButtonText = detail.confirmButtonText ? detail.confirmButtonText : '确定'
  Message_CREARE_EL.config.callback = detail.callback ? detail.callback : ()=>{}
  if(detail.cancelButtonText){
    Message_CREARE_EL.config.isOpenCancelButton = true,
    Message_CREARE_EL.config.cancelButtonText = detail.cancelButtonText,
    Message_CREARE_EL.config.cancelCallBack = detail.cancelCallBack ? detail.cancelCallBack : ()=>{}
  }
}

const MessageBox = {
  normal:(detail)=>{
    newMessageBox(detail,'normal')
  },
  success:(detail)=>{
    newMessageBox(detail,'success')
  },
  warn:(detail)=>{
    newMessageBox(detail,'warn')
  }
  // error:newToast
  
}

export default MessageBox