# Vue + TypeScript

Vue 与 TypeScript 结合的基础用法。

[TOC]

## 组件基础

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

### 其他类型 - Mixins

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

### 类属性使用注意事项

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

## 装饰器扩展

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
