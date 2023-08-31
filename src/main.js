import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PaginatePanel from "../lib/vue3Paginate.js"
createApp(App).use(PaginatePanel).mount('#app')
