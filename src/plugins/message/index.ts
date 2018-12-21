/**
 * 增加全局的 $message 服务
 * @method toggleMessage 切换打开窗口
 * @method $message.open 切换打开窗口
 */
import messageVue from './message.vue';
import Vue from 'vue';

// vue实例
const MessageContructor = Vue.extend(messageVue);

// 弹窗实例参数
let messageInstance: any = null;

// 默认提示弹窗
export const toggleMessage = (message?: any) => create('default', message);

// 对话框
export const diologMessage = (message?: any) => create('diolog', message);

export default {
  install(vue: any) {
    vue.prototype.$message = {
      toggle: toggleMessage,
      diolog: diologMessage
    };
  }
};

type Types = 'default' | 'diolog';

function create(type: Types, message?: string) {
  return new Promise((resolve, reject) => {
    if (messageInstance) {
      messageInstance.$destroy();
      messageInstance.$el.remove();
      messageInstance = null;
    } else {
      const parent = document.body;
      messageInstance = new MessageContructor({
        el: document.createElement('div'),
        data: {
          message,
          type
        }
      });
      parent.appendChild(messageInstance.$el);
      messageInstance.$on('close', () => {
        toggleMessage();
        reject(false);
      });
      messageInstance.$on('enter', () => {
        toggleMessage();
        resolve(true);
      });
    }
  });
}
