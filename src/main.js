import { createApp } from 'vue'
import App from './App.vue'
import router from './routes' // 특정 폴더에 있는 index라는 이름의 파일은 생략해도 된다. 원래는 './routes/index.js'
import store from './store'
import loadImage from './plugins/loadImage'

createApp(App)
  .use(router) // $route, $router
  .use(store) // $store
  .use(loadImage) // $loadImage
  .mount('#app')