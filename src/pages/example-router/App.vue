<template>
  <div id="app">
    <transition :name="transitionName" mode="out-in">
      <router-view class="slide-child-view"></router-view>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Route } from 'vue-router';

@Component
export default class App extends Vue {
  // 定义路由优先级
  // 用于判断动画向左向右
  routes: string[] = ['example', 'list'];
  transitionName = 'slide-left';

  @Watch('$route')
  onRouteChange(to: Route, from: Route) {
    const toIndex = this.routes.indexOf(to.name as string);
    const fromIndex = this.routes.indexOf(from.name as string);
    this.transitionName = toIndex < fromIndex ? 'slide-right' : 'slide-left';
  }
}
</script>

<style lang="less" scoped>
#app {
  font-size: 14px;
}
</style>



