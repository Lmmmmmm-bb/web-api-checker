import { createApp } from 'vue';

import App from './app';

import 'uno.css';
import '@unocss/reset/tailwind.css';
import './index.css';

const app = createApp(App);

app.mount('#app');
