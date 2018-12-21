import createServer from './create';

/**
 * example接口 mock 数据
 */
const data = {
  // example
  example: {
    state: true,
    message: 'Hello world!'
  }
};

// 创建example服务
createServer({
  url: 'api/example',
  response: data.example
});
