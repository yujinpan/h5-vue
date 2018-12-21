/**
 * 根据环境启用 mock
 */
if (process.env.NODE_ENV === 'development') {
  require('@/mock/index.ts'); // tslint:disable-line:no-var-requires
}
