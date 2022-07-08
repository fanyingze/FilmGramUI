
<template>
  <div>
    {{userContent}}
    {{userInfo}}
    <div class="atInput-wrap">
      <gInput @g-input="inputChange" width="300" class="gInput" :value="value" id="gInput"> </gInput>
      <div class="userMenu" v-if="isOpen">
        <div v-for="(item, index) in userInfo.user" class="userMenuItem" @click="selectName(index)">
          <img class="icon" :src="item.icon" alt="">
          <span>{{ item.name }}</span>
        </div>
      </div>
    </div>
  </div>


</template>

<script lang="ts">
import { onMounted, reactive, ref , readonly } from "vue"
import gInput from 'components/Input.vue'



export default {
  name: 'atInput',
  components: {
    gInput
  },
  props:{
    userContent:{
      type:Object
    },
    test:{
      type:String,
      default:undefined
    }
  },
  setup(props) {
    
    const userInfo = reactive(props.userContent)
    const ol = props.userContent

    const isOpen = ref(false)
    const value = ref('')
    const inputChange = function (e: string) {
      console.log(e)
      value.value = e
      let curInput = e.slice(-1)
      console.log(curInput)
      if (curInput === '@') {
        // console.log('打开了')
        isOpen.value = true
      }else if(isOpen.value){
        let curAllInput = e.split('@')
        let AllInput = curAllInput[curAllInput.length-1]

        userInfo.user = ol.user.find(item=>{
          console.log(item.name,AllInput,item.name.indexOf(AllInput))
          if(item.name.indexOf(AllInput) == 0) return true
          
        })
      }
    }
    const selectName = function (index) {
      value.value = value.value + userInfo.user[index].name+' '
      isOpen.value = false

      // console.log(gInput.value)
    }

   
    return {
      inputChange,
      isOpen,
      userInfo,
      selectName,
      value
      
    }
  }
}
</script>

<style scoped>
.atInput-wrap {
  width: 300px;
  position: relative;
}

.icon {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 8px;
  margin-left: 10px;
}

.userMenu {
  background-color: white;
  position: absolute;
  width: 300px;
  border-left: 1px solid var(--border-color);
  border-right: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
  border-bottom-left-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);
  max-height: 225px;
  overflow-y: scroll;
}

.userMenuItem {
  border-top: 1px solid var(--border-color);
  /* border-left: 1px solid rgba(0,0,0,.1); */
  /* border-right: 1px solid rgba(0,0,0,.1); */
  font-size: 14px;
  display: flex;
  height: 45px;
  align-items: center;
}
</style>
