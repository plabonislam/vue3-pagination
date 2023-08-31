import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PaginatePanel from "../lib/test.js"
createApp(App).use(PaginatePanel).mount('#app')
