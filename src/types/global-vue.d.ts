/**
 * Vue实例全局参数与方法声明
 */
import Vue from 'vue';

interface Message {
  toggle<T = any>(message?: string): Promise<T>;
  diolog<T = any>(message?: string): Promise<T>;
}

interface Loading {
  toggle(): void;
}

declare module 'vue/types/vue' {
  interface Vue {
    _isDestroyed: boolean;
    $loading: Loading;
    $message: Message;
  }
}
