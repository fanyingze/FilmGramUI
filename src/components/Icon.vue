
<template>
    <svg class="icon" ><use :xlink:href="`#i${icon}`"></use></svg>
</template>

<script lang="ts">
export default {
  name: 'gButton',
  props:{
    icon:{
      type:String
    }
  },
  setup(props:any) {
    const icon:String = props.icon
    return{
      icon
    }
  }
}
</script>

<style scoped>
.icon {
       width: 1.3em; height: 1.3em;
    }
</style>
