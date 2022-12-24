import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import router from './router'
import store from './store/store'

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')

import "bootstrap/dist/js/bootstrap.js"