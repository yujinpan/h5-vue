import Vue from 'vue';

import Loading from '@/plugins/loading';
import Message from '@/plugins/message';
import Autofocus from '@/directives/autofocus';

import '@/utils/mock';
import '@/utils/fastclick';
import '@/styles/base.less';
import '@/styles/mobile.less';

// 路由组件
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

Vue.use(Loading);
Vue.use(Message);

// 指令注册
Vue.directive('focus', Autofocus);

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app');
