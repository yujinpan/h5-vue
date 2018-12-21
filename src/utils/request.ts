/**
 * request.ts 适用于活动页面，当前版本适用于公交车查询页面。
 * 1. 封装 axios 的错误处理
 * 2. 添加加载状态
 * 3. requestNoLoading 是为了处理轮训接口，轮训接口需要一直展示加载状态
 */
import axios from 'axios';

import { toggleLoading } from '@/plugins/loading';
import { toggleMessage } from '@/plugins/message';

const options = {
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 20000
};

// 创建 axios 实例
const request = axios.create(options);
export default request;

// 请求拦截
request.interceptors.request.use((config) => {
  toggleLoading(true);
  return config;
});

// 返回拦截
// 如果返回的数据里面带有code参数，说明请求失败
request.interceptors.response.use(
  (response: any) => {
    toggleLoading(false);
    return backendErrorHandler(response);
  },
  (error) => {
    toggleLoading(false);
    return errorHandler(error);
  }
);

// 后端错误处理
function backendErrorHandler(response: any) {
  if (!response.data.state) {
    toggleMessage(`${response.data.error}`);
    return Promise.reject(response);
  } else {
    return response.data;
  }
}

// 其他错误处理
function errorHandler(error: any) {
  // 取消请求的不提示
  if (!axios.isCancel(error)) {
    toggleMessage(`出错了：${error}`);
  }
  return Promise.reject(error);
}
