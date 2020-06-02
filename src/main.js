import Vue from 'vue'
import App from './App.vue'
import MQ from 'vue-match-media/src'
Vue.use(MQ);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  mq: {
    phone: '(max-width: 768px)',
    tablet: '(max-width: 1024px)',
    desktop: '(min-width: 1200px)'
  }
}).$mount('#app');
