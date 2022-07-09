
<template>
    <div class="row-wrap" :style="{ marginLeft:'-'+gutter}">
      <slot></slot>
    </div>
</template>

<script lang="ts">
import { AnyNode } from "postcss"
import { onMounted,onBeforeMount,ref,defineComponent, VNodeChild, VNodeTypes } from "vue"

export default defineComponent({
  name: 'gRow',
  props:{
    gutter:{
      type:Number,
      default:0 
    }
  },
  setup(props:any,context) {
    const gutter = props.gutter + 'px'
    const children = context.slots.default!()
    children[0].type.props.gutter.default = gutter
    
    return {
      gutter
    }
  }
})
</script>

<style scoped>
.row-wrap {
       display: flex;
    }
</style>
