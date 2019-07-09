import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './firebase';

import Buefy from 'buefy';
// import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/scss/solid.scss';
import '@fortawesome/fontawesome-free/scss/brands.scss';
import '@fortawesome/fontawesome-free/scss/fontawesome.scss';
Vue.use(Buefy, { defaultIconPack: 'fas' });
import config from 'buefy/src/utils/config';
config.defaultIconPack = 'fas';

import './main.scss';
import './fonts.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
