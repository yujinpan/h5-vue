/**
 * 封装创建 mock 服务。
 * @description
 * 在业务中只需配置 ServerOptions 的几个参数。
 * @method createServer(serverOptions) 创建一个 mock 服务。
 */
import Mock from 'mockjs';

// 默认 Api 前缀
const baseApi = process.env.VUE_APP_BASE_API;

interface ServerOptions {
  url: string;
  method?: 'get' | 'post';
  response: any;
}

export default function createServer(serverOptions: ServerOptions) {
  Mock.mock(
    new RegExp(baseApi + serverOptions.url),
    serverOptions.method || 'get',
    serverOptions.response
  );
}
