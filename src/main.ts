import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import App from './App.vue'
import router from './router'
import hljs from 'highlight.js';

const app = createApp(App)

app.use(createPinia())
app.use(hljs.vuePlugin)
app.use(PrimeVue, {
  theme: {
    present: Aura
  }
})
app.use(router)

app.mount('#app')
