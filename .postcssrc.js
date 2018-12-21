/**
 * 增加 pxtorem 插件
 * ** 注意基准值为 14 **
 */
module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 20,
      propList: ['*'],
      selectorBlackList: ['html', 'body']
    }
  }
};
