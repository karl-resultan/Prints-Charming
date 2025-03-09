import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from "primevue/config";
import Aura from '@primeuix/themes/aura';
// Primevue Components
import {Button} from 'primevue';
import Fluid from 'primevue/fluid';


import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(PrimeVue, {
    // Default theme configuration
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: 'system',
            cssLayer: false
        }
    }
 });
app.use(createPinia())
app.use(router)

app.component("Button", Button)
app.component("Fluid", Fluid)

app.mount('#app')


