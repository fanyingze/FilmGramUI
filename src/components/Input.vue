
<template>
  <div>
    <div class="input-wrap-noicon" v-if="!icon">
      <input v-if="!disabled" class="input" :class="size" :type="type" :placeholder="placeholder"
        @change="$emit('g-change',$event.target!['value'], $event)" @input="$emit('g-input',$event.target!['value'], $event)" @focus="$emit('g-focus', $event)"
        @blur="$emit('g-blur', $event)" :style="{ width: inputWidth + 'px' }" :value="value">
      <input v-else class="input disabled" :class="size" :type="type" :placeholder="placeholder" :value="value"
        disabled>
    </div>

    <div class="input-wrap-icon" v-else>
      <div :class="[iconSize, { 'disabled': disabled }]">
        <Icon :icon="icon"></Icon>
      </div>
      <input v-if="!disabled" class="input input-icon" :class="size" :type="type" :placeholder="placeholder"
        @change="$emit('g-change',$event.target!['value'], $event)" @input="$emit('g-input',$event.target!['value'], $event)" @focus="$emit('g-focus', $event)"
        @blur="$emit('g-blur', $event)" :style="{ width: inputWidth + 'px' }" :value="value">
      <input v-else class="input input-icon disabled" :class="size" :type="type" :placeholder="placeholder"
        :value="value" disabled>
    </div>


  </div>
</template>

<script lang="ts">
import { computed, onMounted } from "vue"
import Icon from 'components/Icon.vue'

export default {
  name: 'gInput',
  components: {
    Icon
  },
  props: {
    placeholder: {
      type: String
    },
    size: {
      type: String,
    },
    icon: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: String
    },
    width: {
      type: String
    }
  },

  setup(props: any, context) {
    onMounted(() => {
      if (props.size) {
        if (props.size !== 'small' && props.size !== 'large') {
          console.warn(`Filmgram-ui,Input的size值只能为small/large,不能为${props.size}`)
        }
      }
    })
    const inputWidth: String | null = props.width
    const disabled: String = props.disabled
    const size: String | null = props.size ? props.size : null
    const placeholder: String = props.placeholder
    const icon: String = props.icon

    const type: String = props.type
    const iconSize = computed({
      get() {
        if (!props.size) return 'icon-normal'
        if (props.size == 'small') return 'icon-small'
        if (props.size == 'large') return 'icon-large'
      },
      set() { }
    })


    return {
      placeholder,
      size,
      icon,
      iconSize,
      disabled,
      type,
      inputWidth,

    }
  }
}
</script>

<style scoped>
.input {
  height: var(--input-height);
  padding: 0 4px;
  font-size: var(--font-size);
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
}

.input-wrap-noicon {
  display: inline;
}

.input-wrap-icon {
  align-items: center;
  display: inline-flex;
}

.input-icon {
  border-left: none;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.input:focus {
  /* background-color: red; */
  outline: none;
}

.small {
  height: var(--input-small-height);
}

.large {
  height: var(--input-large-height);
  font-size: var(--font-large-size);
  /* padding-left: 30px; */
}

.icon-large {
  font-size: var(--icon-large-size);
  height: var(--input-large-height);
  fill: var(--icon-color);
  border: 1px solid var(--border-color);
  border-right: none;
  border-bottom-left-radius: var(--border-radius);
  border-top-left-radius: var(--border-radius);
  padding-left: 10px;
  display: flex;
  align-items: center;
}

.icon-small {
  fill: var(--icon-color);
  height: var(--input-small-height);
  border: 1px solid var(--border-color);
  border-right: none;
  border-bottom-left-radius: var(--border-radius);
  border-top-left-radius: var(--border-radius);
  padding-left: 10px;
  display: flex;
  align-items: center;
}

.icon-normal {
  fill: var(--icon-color);
  height: var(--input-height);
  border: 1px solid var(--border-color);
  border-right: none;
  border-bottom-left-radius: var(--border-radius);
  border-top-left-radius: var(--border-radius);
  padding-left: 10px;
  display: flex;
  align-items: center;
}

/* 禁用后 */
.disabled {
  cursor: not-allowed;
  background-color: var(--input-disabled-background);
}
</style>
