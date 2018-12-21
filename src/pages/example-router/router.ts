/**
 * 路由模块
 */
import Vue from 'vue';
import VueRouter, { RouteConfig, Route } from 'vue-router';

// 路由组件
import Example from './components/Example.vue';
import List from './components/List.vue';

Vue.use(VueRouter);

// 路由配置
const routes: RouteConfig[] = [
  {
    name: 'example',
    path: '/',
    component: Example,
    props: getQueryId
  },
  {
    name: 'list',
    path: '/list',
    component: List,
    props: getQueryId
  }
];

export default new VueRouter({ routes });

// 生成路由组件的 Prop 值
function getQueryId(route: Route) {
  return Object.assign(
    {
      id: route.query.id || ''
    },
    route.params
  );
}
