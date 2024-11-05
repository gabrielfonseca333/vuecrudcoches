import { createApp } from 'vue'
import App from './App.vue'
import router from './Routers'

var app = createApp(App)
app.use(router).mount('#app')
