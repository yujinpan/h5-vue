import createServer from '@/utils/mock-creator';

/**
 * pv接口 mock 数据
 */
const data = {
  // pv/set
  pv: {
    state: true,
    total: 1
  }
};

// 创建pv服务
createServer({
  url: 'pv/set',
  response: data.pv
});
