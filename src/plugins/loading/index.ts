/**
 * 增加全局的 $loading 服务
 * @method toggleLoading 切换加载状态
 * @method $loading.toggle 切换加载状态
 */
import loadingVue from './loading.vue';
import Vue from 'vue';

const LoadingContructor = Vue.extend(loadingVue);

let loadingInstance: any = null;

export const toggleLoading = (state?: boolean) => {
  // 过滤重复的
  if (typeof state !== 'undefined' && !!loadingInstance === state) {
    return;
  }
  if (loadingInstance) {
    loadingInstance.$destroy();
    loadingInstance.$el.remove();
    loadingInstance = null;
  } else {
    const parent = document.body;
    loadingInstance = new LoadingContructor({
      el: document.createElement('div')
    });
    parent.appendChild(loadingInstance.$el);
  }
};

export default {
  install(vue: any) {
    vue.prototype.$loading = {
      toggle: toggleLoading
    };
  }
};
