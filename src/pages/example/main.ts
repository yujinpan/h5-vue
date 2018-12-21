import Vue from 'vue';
import App from './App.vue';

import Loading from '@/plugins/loading';
import Message from '@/plugins/message';

import '@/utils/mock';
import '@/utils/fastclick';
import '@/styles/base.less';
import '@/styles/mobile.less';

Vue.config.productionTip = false;

Vue.use(Loading);
Vue.use(Message);

new Vue({
  render: (h) => h(App)
}).$mount('#app');
