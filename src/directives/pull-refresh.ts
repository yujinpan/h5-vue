/**
 * 下拉刷新
 * @callback binding.value 刷新回调
 */
import { DirectiveBinding } from 'vue/types/options';
import PullToRefresh from 'pulltorefreshjs';

let counter = 1;

export default {
  inserted(el: Element, binding: DirectiveBinding) {
    const callback = binding.value;
    let query = `pull_refresh_trigger_${counter++}`;
    el.classList.add(query);
    query = '.' + query;
    setTimeout(() => {
      PullToRefresh.init({
        triggerElement: query,
        instructionsPullToRefresh: '下拉刷新',
        instructionsReleaseToRefresh: '松开刷新',
        instructionsRefreshing: '加载中',
        passive: true,
        onRefresh: () => {
          return callback && callback();
        },
        shouldPullToRefresh() {
          return !document.body.scrollTop && !window.scrollY;
        }
      });
    }, 0);
  },
  unbind() {
    PullToRefresh.destroyAll();
  }
};
