import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/styles.css'

import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router/index'
import {createPinia} from 'pinia'

import { useBookStore } from './stores/bookStore';

const pinia = createPinia();
const bookStore = useBookStore(pinia);

bookStore.fetchBooks().then(()=>{

    const app = createApp(App);
    
    app
    .use(router)
    .mount('#app');
})

