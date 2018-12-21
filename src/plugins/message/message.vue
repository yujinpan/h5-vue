<!-- 消息弹窗组件 -->
<template>
  <transition name="fade">
    <div v-if="show" class="message">
      <div class="wrapper">
        <div class="title">{{message}}</div>
        <button @click="close()" class="footer-btn mobile-btn">关闭</button>
        <button v-if="type === 'diolog'" @click="enter()" class="footer-btn mobile-btn enter">确认</button>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator';

@Component
export default class Message extends Vue {
  // 提示内容
  message: any;
  // 展示
  show = false;
  // 对话框模式
  type = 'default';

  // 关闭
  close() {
    this.show = false;
    this.$nextTick(this.onClose);
  }
  // 确认
  enter() {
    this.show = false;
    this.$nextTick(this.onEnter);
  }

  // 通知关闭
  @Emit('close')
  onClose() {
    // close
  }

  // 通知确认
  @Emit('enter')
  onEnter() {
    // enter
  }

  mounted() {
    this.$nextTick(() => (this.show = true));
  }
}
</script>

<style scoped lang="less">
.message {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center;
  .wrapper {
    position: relative;
    width: 70%;
    max-width: 300px;
    border-radius: 6px;
    padding: 10px;
    text-align: center;
    background: white;
    .title {
      margin: 0 auto;
      padding: 30px 0;
      line-height: 1.3em;
      font-size: 14px;
      color: #666;
    }
    .footer-btn {
      width: 64px;
      height: 26px;
      margin: 0 10px;
      border-radius: 26px;
      border: 1px solid #ddd;
      font-size: 12px;
      color: #666;
      background: #eee;
    }
  }
}
</style>
