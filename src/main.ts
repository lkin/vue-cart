import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './routes';
import App from './App.vue';
import { createI18n } from 'vue-i18n'

import './assets/styles/tailwind.css';

const i18n = createI18n({
    locale: 'ja',
    allowComposition: true, // you need to specify that!
    message: {
        en: {
            hello: 'hello!'
        },
        ja: {
            hello: 'こんにちは！'
        }
    }
})
const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(i18n);
app.mount('#app');

