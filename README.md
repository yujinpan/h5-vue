# h5-vue

用 vue 写 h5 项目的基本结构与依赖整理，封装常用工具，快速开发 h5 的脚手架。<br>

[TOC]

## 简介

项目采用 Vue 的多页应用（multi-page）结构，增加 TypeScript 支持。

**在 vue-cli 基础上，增加了如下功能：**

- 增加 `vue-class-component`，`vue-property-decorator` 的 vue 支持 TypeScript 扩展。
- 增加多页打包，在`src/pages/`下的页面都是单独的页面，打包后生成每个文件夹名称的入口模版文件，vendor 是共享的。
- 增加 `fastclick.js`，解决移动端 300ms 问题（引发的 ios 上的输入标签点击不弹出键盘问题已解决）。
- 增加 `mock.js`，前后端分离必备，这里开发环境与生产环境也已做分离。
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

### Vue + TypeScript 文档

官方文档：[vue-class-component](https://github.com/vuejs/vue-class-component)

- `methods` 可以直接声明为类成员方法。
- 可以将计算属性声明为属性访问器。
- 初始化 `data` 可以声明为类属性。
- `data`, `render` 与 Vue 所有声明周期钩子都可以声明为成员方法。
- 对于其他类型，将它们传递给装饰器函数。

```
<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  props: {
    propMessage: String
  }
})
export default class App extends Vue {
  // initial data
  msg = 123

  // use prop values for initial data
  helloMsg = 'Hello, ' + this.propMessage

  // lifecycle hook
  mounted () {
    this.greet()
  }

  // computed
  get computedMsg () {
    return 'computed ' + this.msg
  }

  // method
  greet () {
    alert('greeting: ' + this.msg)
  }
}
</script>
```

#### 其他类型 - Mixins

```
// mixin.js
import Vue from 'vue'
import Component from 'vue-class-component'

// You can declare a mixin as the same style as components.
@Component
export default class MyMixin extends Vue {
  mixinValue = 'Hello'
}

// app.js
import Component, { mixins } from 'vue-class-component'
import MyMixin from './mixin.js'

// Use `mixins` helper function instead of `Vue`.
// `mixins` can receive any number of arguments.
@Component
export class MyComp extends mixins(MyMixin) {
  created () {
    console.log(this.mixinValue) // -> Hello
  }
}
```

#### 类属性使用注意事项

- `this` 指向问题，不要使用箭头函数定义类成员方法：

```
@Component
class MyComp extends Vue {
  foo = 123

  bar = () => {
    // Does not update the expected property.
    // `this` value is not a Vue instance in fact.
    this.foo = 456
  }
}

@Component
class MyComp extends Vue {
  foo = 123

  bar () {
    // Correctly update the expected property.
    this.foo = 456
  }
}
```

- `undefined` 不是响应式的

```
@Component
class MyComp extends Vue {
  // Will not be reactive
  foo = undefined

  // Will be reactive
  bar = null

  data () {
    return {
      // Will be reactive
      baz: undefined
    }
  }
}
```

### 装饰器扩展指南

官方文档：[vue-property-decorator](https://github.com/kaorun343/vue-property-decorator)

- @Prop(options: (PropOptions | Constructor[] | Constructor) = {})

```
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class YourComponent extends Vue {
  @Prop(Number) propA!: number
  @Prop({ default: 'default value' }) propB!: string
  @Prop([String, Boolean]) propC: string | boolean
}
```

相当于

```
export default {
  props: {
    propA: {
      type: Number
    },
    propB: {
      default: 'default value'
    },
    propC: {
      type: [String, Boolean]
    },
  }
}
```

- @Model(event?: string, options: (PropOptions | Constructor[] | Constructor) = {})

```
import { Vue, Component, Model } from 'vue-property-decorator'

@Component
export default class YourComponent extends Vue {
 @Model('change', { type: Boolean }) checked!: boolean
}
```

相当于：

```
export default {
 model: {
   prop: 'checked',
   event: 'change'
 },
 props: {
   checked: {
     type: Boolean
   },
 },
}
```

- @Watch(path: string, options: WatchOptions = {})

```
import { Vue, Component, Watch } from 'vue-property-decorator'

@Component
export default class YourComponent extends Vue {
 @Watch('child')
 onChildChanged(val: string, oldVal: string) { }

 @Watch('person', { immediate: true, deep: true })
 onPersonChanged(val: Person, oldVal: Person) { }
}
```

相当于：

```
export default {
 watch: {
   'child': {
     handler: 'onChildChanged',
     immediate: false,
     deep: false
   },
   'person': {
     handler: 'onPersonChanged',
     immediate: true,
     deep: true
   }
 },
 methods: {
   onChildChanged(val, oldVal) { },
   onPersonChanged(val, oldVal) { }
 }
}
```

- @Emit(event?: string)

```
import { Vue, Component, Emit } from 'vue-property-decorator'

@Component
export default class YourComponent extends Vue {
 count = 0

 @Emit()
 addToCount(n: number) {
   this.count += n
 }

 @Emit('reset')
 resetCount() {
   this.count = 0
 }

 @Emit()
 returnValue() {
   return 10
 }

 @Emit()
 promise() {
   return new Promise(resolve => {
     setTimeout(() => {
       resolve(20)
     }, 0)
   })
 }
}
```

相当于：

```
export default {
 data() {
   return {
     count: 0
   }
 },
 methods: {
   addToCount(n) {
     this.count += n
     this.$emit('add-to-count', n)
   },
   resetCount() {
     this.count = 0
     this.$emit('reset')
   },
   returnValue() {
     this.$emit('return-value', 10)
   },
   promise() {
     const promise = new Promise(resolve => {
       setTimeout(() => {
         resolve(20)
       }, 0)
     })

     promise.then(value => {
       this.$emit('promise', value)
     })
   }
 }
}
```

- @Provide(key?: string | symbol) / @Inject(options?: { from?: InjectKey, default?: any } | InjectKey)

```
import { Component, Inject, Provide, Vue } from 'vue-property-decorator'

const symbol = Symbol('baz')

@Component
export class MyComponent extends Vue {
@Inject() foo!: string
@Inject('bar') bar!: string
@Inject({ from: 'optional', default: 'default' }) optional!: string
@Inject(symbol) baz!: string


@Provide() foo = 'foo'
@Provide('bar') baz = 'bar'
}
```

相当于：

```
const symbol = Symbol('baz')

export const MyComponent = Vue.extend({

  inject: {
    foo: 'foo',
    bar: 'bar',
    'optional': { from: 'optional', default: 'default' },
    [symbol]: symbol
  },
  data () {
    return {
      foo: 'foo',
      baz: 'bar'
    }
  },
  provide () {
    return {
      foo: this.foo,
      bar: this.baz
    }
  }
})
```
