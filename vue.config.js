/**
 * vue config
 * @description
 * vue构建配置文件，[文档地址](https://cli.vuejs.org/zh/config/#vue-config-js)
 * 1. 使用多页构建模式。
 * 2. 自动将 `src\pages\**\main.ts` 的页面提取文件夹名称（作为路由名称）及入口。
 * 3. 使用 devServer 的代理模式指向正式接口的域名。
 */
const fs = require('fs');

// 分页配置参数
const pagesDir = './src/pages';
const pagesEntry = (dir) => `${pagesDir}/${dir}/main.ts`;
const pagesCofig = {};

// 同步取出所有的 pages
fs.readdirSync(pagesDir)
  .filter((dir) => {
    return fs.statSync(pagesDir + '/' + dir).isDirectory();
  })
  .forEach((dir) => {
    pagesCofig[dir] = {
      entry: pagesEntry(dir),
      title: dir
    };
  });

// 打印出配置的分页
console.info(`pages config：${JSON.stringify(pagesCofig)}`);

module.exports = {
  baseUrl:
    process.env.NODE_ENV === 'production' ? process.env.VUE_APP_BASE_URL : '/',
  productionSourceMap: false,
  // multi-page 多页模式
  pages: pagesCofig,
  devServer: {
    // 将接口代理到正式的域名
    proxy: process.env.VUE_APP_BASE_HOST
  }
};
