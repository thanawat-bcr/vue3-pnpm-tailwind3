import { createApp } from 'vue';
import App from './App.vue';

// eslint-disable-next-line
import router from './router';

import './assets/main.css';

const app = createApp(App);

app.use(router);

app.mount('#app');
