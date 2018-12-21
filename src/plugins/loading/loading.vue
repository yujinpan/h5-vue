<!-- 加载状态组件 -->
<template>
  <transition name="fade">
    <div v-if="show" class="loading-mask">
      <div class="loading-spinner">
        <svg class="circular" viewBox="25 25 50 50">
          <circle class="path" cx="50" cy="50" r="20" fill="none"></circle>
        </svg>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Loading extends Vue {
  private show = false;

  mounted() {
    this.$nextTick(() => (this.show = true));
  }
}
</script>

<style scoped lang="less">
.loading-mask {
  position: fixed;
  z-index: 999;
  background-color: hsla(0, 0%, 100%, 0.9);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transition: opacity 0.3s;
  .loading-spinner {
    top: 50%;
    margin-top: -21px;
    width: 100%;
    text-align: center;
    position: absolute;
    .circular {
      height: 42px;
      width: 42px;
      animation: loading-rotate 2s linear infinite;
      @keyframes loading-rotate {
        100% {
          transform: rotate(360deg);
        }
      }
      .path {
        animation: loading-dash 1.5s ease-in-out infinite;
        stroke-dasharray: 90, 150;
        stroke-dashoffset: 0;
        stroke-width: 2;
        stroke: #409eff;
        stroke-linecap: round;
      }
    }
  }
}
</style>
