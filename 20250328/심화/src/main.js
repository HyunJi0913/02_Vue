import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'  // 라우터 import
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'



createApp(App).use(router).mount('#app')  // 라우터 연결