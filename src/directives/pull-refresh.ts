/**
 * 下拉刷新
 * @callback binding.value 刷新回调
 */
import { DirectiveBinding } from 'vue/types/options';
import PullToRefresh from 'pulltorefreshjs';

export default {
  bind(el: Element, binding: DirectiveBinding) {
    const callback = binding.value;
    // 向下拉刷新列表
    PullToRefresh.init({
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
  },
  unbind() {
    PullToRefresh.destroyAll();
  }
};
