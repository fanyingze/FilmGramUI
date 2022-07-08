
<template>
  <div class="MainBar">
    测试

    <div class="firstMenu" v-for="(item,index) in menu.content">
      <a class="mainBarItemTitle" :href="item.herf">{{item.title}}</a>
      <!-- 子菜单栏 -->
      <div class="secondMenu" v-if="item.secondMenu" v-for="(seconditem,index) in item.secondMenu" >
        <a class="mainBarItemTitle" :href="seconditem.herf">{{seconditem.title}}</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive } from "vue"


export default{
  name:'testBar',
  setup(){
    let  menu = reactive({
      content:[
        {title:'新闻',herf:"www.baidu.com"},
        {title:'hao123',herf:"www.baidu.com"},
        {title:'更多',herf:"www.baidu.com",secondMenu:[{title:'翻译',herf:'www.baidu.com'}]},
      ],
      
    })

    return {
      menu
    }
  }
}
</script>

<style scoped>
.secondMenu{
  display: none;
}

.firstMenu:hover .secondMenu{
  display: block;
}
.mainBarItemTitle{
  display: flex;
  margin-left: 10px;
}
.mainBarItem{
  text-decoration: none;
  color: #666;
  font-size: var(--font-size);
}
</style>
