import './assets/main.css'


import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { provide } from 'vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.provide('baseUrl','http://127.0.0.1:8000/api/');
app.provide('loggedIn','');

app.mount('#app')
