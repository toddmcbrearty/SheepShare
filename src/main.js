import Vue from 'vue';
import App from './App';
import LambShare from './components/LambShare';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#components');
