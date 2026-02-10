import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/_typography.scss'
import '@/styles/_base.scss'

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
