
<template>
    <div class="col-wrap" :style="{width:span+'%' , marginLeft:offSet+'%',paddingLeft:gutter}">
      <slot></slot>
    </div>

</template>

<script lang="ts">
export default {
  name: 'gCol',
  props:{
    span:{
      type:Number,
      default:24
    },
    offSet:{
      type:Number,
      default:0
    },
    gutter:{
      type:String,
      default:0 + 'px'
    }
  },
  setup(props:any) {
    const span = props.span / 24 * 100
    const offSet = props.offSet/24 * 100
    
    return{
      span,
      offSet
    }
  }
}
</script>

<style scoped>

</style>
