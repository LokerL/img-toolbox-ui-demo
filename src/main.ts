import { createApp } from 'vue'
import App from './App.vue'

import '../src/style/global.scss'

import './demos/ipc'
// If you want to use Node.js, the`nodeIntegration` needs to be enabled in the Main process.
// import './demos/node'

createApp(App)
  .mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
  })
