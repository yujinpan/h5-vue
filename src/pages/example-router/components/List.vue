<template>
  <div class="list">
    <router-link class="link" :to="'/'">返回</router-link>
    <ul>
      <li v-for="(item, index) in 10" :key="index">{{index + 1}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { getExample } from '@/api/example';

@Component
export default class Example extends Vue {}
</script>

<style lang="less" scoped>
.list {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: gray;
  .link {
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 20px;
  }
}
</style>
