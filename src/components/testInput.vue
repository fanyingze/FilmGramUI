
<template>
  <div>
    <input type="text"  :value="vvv" @input="$emit('t-input', $event.target['value'])" >
    {{vvv}}
  </div>
</template>

<script lang="ts">
import { watch,ref } from "vue"


export default {
  name: 'atInput',
  components: {

  },props:{
    vvv:{
      type:String
    }
  },
  setup(props) {
  
    
    return {
      
    }
  }
}
</script>

<style scoped>
</style>
