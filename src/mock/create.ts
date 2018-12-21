import Mock from 'mockjs';

// 配置请求返回的时间
Mock.setup({
  timeout: 1000
});

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
