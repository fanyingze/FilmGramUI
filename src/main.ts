import { createApp } from 'vue'
import App from './App.vue'

const script = document.createElement("script")
script.type = 'text/javascript'
script.src = "http://at.alicdn.com/t/font_3455135_g7o0v0181z5.js"
document.getElementsByTagName('body')[0].appendChild(script)


createApp(App).mount('#app')

