<template>
  <div class="example">
    <a class="link" href="./example-router.html">查看带router的实例</a>
    {{message}}
    <!-- pv组件 -->
    <Pv/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { getExample } from '@/api/example';

import Pv from '@/components/Pv.vue';

@Component({
  components: {
    Pv
  }
})
export default class Example extends Vue {
  message: string = '';

  created() {
    getExample(1).then((resp: any) => {
      this.message = resp.message;
    });
  }
}
</script>
<style lang="less" scoped>
.example {
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
