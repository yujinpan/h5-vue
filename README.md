# h5-vue

用 vue 写 h5 项目的基本结构与依赖整理，封装常用工具，快速开发 h5 的脚手架。

[TOC]

## 简介

项目采用 Vue 的多页应用（multi-page）结构，增加 TypeScript 支持。

**在 vue-cli 基础上，增加了如下功能：**

- 增加 `vue-class-component`，`vue-property-decorator` 的 vue 支持 TypeScript 扩展。
- 增加多页打包，在`src/pages/`下的页面都是单独的页面，打包后生成每个文件夹名称的入口模版文件，vendor 是共享的。
- 增加 `fastclick.js`，解决移动端 300ms 问题（引发的 ios 上的输入标签点击不弹出键盘问题已解决）。
- 增加 `mock.js`，前后端分离必备，这里开发环境与生产环境也已做分离。
- 增加 `unit-jest` 单元测试插件。
- 增加 `postcss-pxtorem`，开发中只需写实际尺寸，编译后会比转换为 rem 单位。
- 增加 `axios`，使用 promise 进行接口交互，axios。
- 增加 `local-storage` 工具函数，方便且独立操作本地存储。
- 增加 `src/utils/request.ts` 工具函数封装 axios，加入常用的错误处理与加载效果。
- 增加 `src/utils/router.ts` 工具函数处理链接上的参数（在你不使用 vue-router 时可以用工具函数）。
- 增加 `src/directives/autofoucs.ts` 指令，自动聚焦，这是一个小实例，指令都可以在这里扩展。
- 增加 `src/api/example.ts` 实例接口方法，接口都在这个文件夹里扩展。
- 增加`vue-router`可选配置，以及路由左右切换的过渡动效。
- 增加全局的默认样式，响应式适配手机屏幕（`unit(@base-size / 375 * 100, vw)`）。
- 增加移动端常用样式，半像素边框与点击效果。
- 增加默认的左右切换与渐隐过渡效果。
- 增加全局的 vue 插件 - `$message`弹窗提示，在 vue 实例中使用`this.$message.toggle(message: string)`快速调用弹窗。
- 增加全局的 vue 插件 - `$loading`加载状态，在 vue 实例中使用`this.$loading.toggle(state?: boolean)`快速调用加载。
- 增加 vue 全局参数与方法的 TypeScript 声明文件`src/types/global-vue.d.ts`，易于扩展。
- 增加开发服务器环境变量配置`.env`，支持正式服务器的域名与接口路径配置（利用代理与 node 环境变量）。
- 增加编辑器 VSCode 配置文件，格式化与检查代码符合 tslint 标准。

**开发之前务必阅读的文档：**

- Vue 官方的脚手架[@vue/cli](https://cli.vuejs.org/) 。
- @vue/cli 的配置文件文档 [vue.config.js](https://cli.vuejs.org/zh/config/#vue-config-js)。
- [TypeScript 文档](https://www.w3cschool.cn/typescript/typescript-basic-types.html)。
- 支持 TypeScript 类式（class-style）组件的依赖 [vue-class-component](https://github.com/vuejs/vue-class-component)。
- 扩展 Vue 装饰器的依赖 [vue-property-decorator](https://github.com/kaorun343/vue-property-decorator)。
- HTTP: [axios](https://cn.vuejs.org/v2/cookbook/using-axios-to-consume-apis.html)。

## 项目结构

- src: 主业务代码。
  - api: 接口处理
  - assets: 公共资源
  - components: 公共组件
  - directives: 公共指令
  - local-storage: 本地存储
  - mock: 模拟接口数据
  - pages: 所有的多页面应用
  - plugins: vue 的公共插件
  - styles: 公共的可选样式
  - types: TypeScript 声明文件
  - utils: 工具函数
- tests/unit: 单元测试用例。
- .env: 环境变量配置。
- .postcssrc.js: postcss 配置文件。
- tsconfig.json: TypeScript 的配置文件。
- tslint.json: TSlint 的配置文件。
- vue.config.js: @vue/cli 的配置文件。

## 注意事项

- 样式文件除了 `html` 与 `body` 标签，所有其他标签的 `px` 单位都会在编译时自动转化为 `rem`，所以样式里只需要写真实的像素尺寸。
- 在 `./src/base.less` 中使用的基准 `@base-size=20` 与 `./.postcssrc.js` 中的 `rootValue: 20` 对应。
- `./src/pages/example` 这是一个分页实例，并且打包会忽略此分页，利用这个文件夹可以快速复制一个带基本结构与依赖的分页项目。
- `./src/pages/example-router` 这是一个带 router 的分页实例。

## 开始

- 安装: `npm install`
- 开发（mock）: `npm start`
- 开发（接口）: `npm start -production`
- 生产: `npm run build`
- 规范: `npm run lint`
- 开始: [http://localhost:8080/example.html](http://localhost:8080/example.html)

## 附录

- [Vue + TypeScript 的基础用法](./docs/vue-typescript.md)
