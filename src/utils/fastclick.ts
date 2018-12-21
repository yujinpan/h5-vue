/**
 * 引入 fastclick
 */
import FastClick from 'fastclick';

/**
 * 兼容 ios 端的输入框点击不弹出问题
 */
FastClick.prototype.focus = (targetElement: any) => {
  targetElement.focus();
};

// 初始化
(FastClick as any).attach(document.body);
