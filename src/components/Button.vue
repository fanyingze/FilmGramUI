
<template>
  <!-- 没有图标的gbutton -->
  <button v-if="!icon" class="g-button">
    <slot></slot>
  </button>
  <!-- 图标在左边的gbutton -->
  <button v-else-if="iconPosition == 'right'" class="g-button" @click="isLoading">
    <slot></slot>
    <Icon class="loading-right" icon="loading" v-if="openLoading && startLoading"></Icon>
    <Icon class="icon-right" :icon="icon" v-else></Icon>
  </button>
  <!-- 图标在右边的gbutton -->
  <button v-else class="g-button" @click="isLoading">
    <Icon class="loading" icon="loading" v-if="openLoading && startLoading"></Icon>
    <Icon class="icon" :icon="icon" v-else></Icon>
    <slot></slot>
  </button>
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
    return {
      icon,
      iconPosition,
      openLoading,
      startLoading,
      isLoading
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
  border: 1px solid var(--border-color);
  background-color: var(--button-bg);
  /* line-height: px; */
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}

.icon {
  margin-right: 3px;
}

.icon-right {
  margin-left: 3px;
}

.g-button:hover {
  border-color: var(--border-color-hover);
}

.g-button:active {
  color: var(--font-color-active);
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
</style>
