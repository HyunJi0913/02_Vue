import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);
app.config.unwrapInjectedRef = true;
createApp(App).mount('#app');
