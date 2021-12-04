import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
const app = createApp(App)

// 配置样式
import './styles/normalize.css'

app.use(router).mount('#app')
