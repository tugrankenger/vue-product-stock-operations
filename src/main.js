import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import router from './router'
import store from './store/store'
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL : "https://product-operations-a1129-default-rtdb.firebaseio.com"
})

const app = createApp(App)
app.config.globalProperties.$axios = axiosInstance
app.use(store)
app.use(router)
app.mount('#app')

import "bootstrap/dist/js/bootstrap.js"