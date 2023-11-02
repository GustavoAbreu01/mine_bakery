import './assets/base.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { FontAwesomeIcon } from './fontawesome'; // Importe o arquivo de configuração que você criou

const app = createApp(App)

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app')
