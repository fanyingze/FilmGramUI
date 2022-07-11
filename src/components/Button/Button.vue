
<template>
  <!-- 没有图标的gbutton -->
  <div v-if="!icon" :style="colorStyle" class="btn-wrap">
    <button  class="g-button" :style="fontColor ">
    <slot></slot>
   </button>
  </div>
  <!-- 图标在左边的gbutton -->
  <div v-else-if="iconPosition == 'right'" class="btn-wrap" :style="colorStyle">
  <button class="g-button" @click="isLoading" :style="fontColor ">
    <slot></slot>
    <Icon class="loading-right" icon="loading" v-if="openLoading && startLoading"></Icon>
    <Icon class="icon-right" :icon="icon" v-else></Icon>
  </button>
  </div>
  
  <!-- 图标在右边的gbutton -->
  <div v-else class="btn-wrap" :style="colorStyle">
    <button  class="g-button" @click="isLoading" :style="fontColor ">
    <Icon class="loading" icon="loading" v-if="openLoading && startLoading"></Icon>
    <Icon class="icon" :icon="icon" v-else></Icon>
    <slot></slot>
  </button>
  </div>
  
</template>

<script lang="ts">

import { computed, ref, inject } from 'vue'
import Icon from 'components/Icon.vue'

export default {
  name: 'gButton',
  components: {
    Icon
  },
  props: {
    icon: {
      type: String
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator(value:String) {
        return value !== 'left' && value !== 'right' ? false : true
      }
    },
    openLoading: {
      type: Boolean,
      default: false
    },
    color:{
      type:String
    }
  },
  setup(props:any) {
    const icon: String = props.icon ? props.icon : null        //icon类型
    const iconPosition: String = props.iconPosition              //icon的位置
    const openLoading: String = props.openLoading ? props.openLoading : null   //是否打开loading
    const startLoading = ref(false)                            //控制点击后loading开启
    const isLoading = function () {                              //控制点击后loading开启
      startLoading.value = !startLoading.value
    }
    const colorStyle = computed({
      get() {
        if (!props.color) return {background:'#FFF'}
        else if (props.color == 'blue') return {background:'#409eff',fill:'#FFF',color:'#FFF',border:'1px solid #409eff'}
        else if (props.color == 'red') return {background:'#f56c6c',fill:'#FFF',color:'#FFF',border:'1px solid #f56c6c'}
        else if (props.color == 'green') return {background:'#67c23a',fill:'#FFF',color:'#FFF',border:'1px solid #67c23a'}
        else return {background:'#FFF'}
      },
      set() { }
    })
    const fontColor = computed({
      get() {
        if (!props.color) return {}
        else if(props.color == 'blue'||props.color == 'red'||props.color == 'green') return {color:'#FFF'}
        else return {}
      },
      set() { }
    })
    
    return {
      icon,
      iconPosition,
      openLoading,
      startLoading,
      isLoading,
      colorStyle,
      fontColor 
    }
  }
}
</script>

<style scoped>
.g-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid rgba(0,0,0,0);
  background-color: rgba(0,0,0,0);
  /* line-height: px; */
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  cursor: pointer;
}

.icon {
  margin-right: 3px;
}

.icon-right {
  margin-left: 3px;
}

/* .g-button:hover {
  border-color: var(--border-color-hover);
} */

.g-button:active {
  /* color: var(--font-color-active); */
  background: rgba(0,0,0,.05);
  /* border: 100px inset rgba(0,0,0,.05); */
}

/* 动画效果 */
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.loading {
  animation: spin 2s infinite;
  margin-right: 3px;
}

.loading-right {
  animation: spin 2s infinite;
  margin-left: 3px;
}
.btn-wrap{
  display: inline-flex;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
</style>
