/**
 * 根据环境启用 mock
 */
if (process.env.NODE_ENV === 'development') {
  const Mock = require('mockjs'); // tslint:disable-line:no-var-requires

  // options
  Mock.setup({
    // 请求返回的时间，用于测试
    timeout: 1000
  });

  // 加载业务中的 mock 服务
  require('@/mock'); // tslint:disable-line:no-var-requires
}
