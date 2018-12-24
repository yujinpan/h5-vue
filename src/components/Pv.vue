<!-- IP浏览量共享组件 -->
<template>
  <div class="pv">
    <p v-if="total">第{{total}}位访客～</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { setPv } from '@/api/pv';

@Component
export default class Pv extends Vue {
  total: number = 0;

  created() {
    // pv/set
    setPv().then((resp: any) => {
      this.total = resp.total;
    });
  }
}
</script>

<style lang="less" scoped>
.pv {
  font-size: 16px;
  position: absolute;
  bottom: 10px;
  right: 10px;
}
</style>
