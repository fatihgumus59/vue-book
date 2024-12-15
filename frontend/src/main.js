import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/styles.css'

import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router/index'
import {createPinia} from 'pinia'
import axios from 'axios';

import Toast from 'vue-toastification'
import "vue-toastification/dist/index.css";

import { useBookStore } from '@/stores/bookStore';
import { useAuthStore } from '@/stores/authStore';

const pinia = createPinia();
const storedUser = localStorage.getItem('user');

if(storedUser){
    const userData = JSON.parse(storedUser);
    useAuthStore(pinia).user = userData;

  const token = userData.acces_token;

  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
}

const bookStore = useBookStore(pinia);

bookStore.fetchBooks().then(()=>{

    const app = createApp(App);
    
    app
    .use(router)
    .use(Toast)
    .mount('#app');
})

