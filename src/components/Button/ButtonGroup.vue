
<template>
<div id="slot" ref="slot">
  <slot></slot>
</div>
</template>

<script lang="ts">
import { onMounted,ref } from "vue"

export default {
  name: 'gButtonGroup',
 
  setup():any{
    const slot = ref<HTMLElement | null>(null)
    onMounted(()=>{
      const item:any = slot.value!.children
      for(let node of item){
        if(node.nodeName !== 'BUTTON'){
          console.warn(`g-button-group的子元素应该全是g-button，不能出现${node.nodeName}`)
        }
      }
    })
    return {
      slot
    }
  }
}
</script>

<style scoped>
@import 'assets/css/basic.css';

  #slot :first-child{
    margin-right:-1px ;
    border-radius: 0;
    border-bottom-left-radius: var(--border-radius);
    border-top-left-radius: var(--border-radius);
  }
   #slot :last-child{
    border-radius: 0;
    border-bottom-right-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }
  #slot{
    display: inline-flex;
    vertical-align: middle;
    
  }
</style>
