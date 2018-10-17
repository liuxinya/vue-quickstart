import Vue from 'vue'
import App from './App.vue'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import { init } from './setup/init';

Vue.use(iView);

Vue.config.productionTip = false

init().then(() => {
  new Vue({
    render: h => h(App)
  }).$mount('#app')
}) 
