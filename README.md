## 使用 vite 构建 vue 工程化项目

```
yarn create vite 项目名 --template vue
cd 项目名
yarn
yarn dev
```

## vue 工程化项目

> 入口文件

```
/src/main.js
```

## 配置 vue-router

> 安装

```
yarn add vue-router@4
```

> 部署

* 取出插件的关键函数, createRouter,createWebHashHistory

```
import { createRouter,createWebHashHistory} from 'vue-router'
```

* 新建pages目录，存放页面文件
* 执行 createRouter 函数， 取得返回值

```
<!-- createRouter 是一个函数，它要求一个指定若干键名的对象作为参数 -->
const router = createRouter({
    history:createWebHashHistory(),
    routes:[]
})
```

* 它要求必须有以下两个键：

history ： 固定值为 createWebHashHistory() \
routes: 要求包含若干 vue 文件的 数组

* routes 要求成员必须有若干键

```
routes:[
    {
        path:'这一页vue文件映射到 url 的哪里',
        component: 这一页的资源文件
    }
]
```

* 主组件 (App.vue) 需要有 router-view 标签
* 执行 app.use () 方法，让 vue 激活 router

## 怎么在工程化使用 scss
```
yarn add sass 
```


## 怎么自定义组件
- 1: 在components 目录中（其实在任何目录都可以）编写 .vue 文件
- 2: 在需要引入的页面中   import  这个文件对象
- 3: 在这个页面的 vue 对象中（export default {})  , 必须有 components 这个键 (属性)
- 4: components 这个键 的 值， 要求必须是一个对象。 例：

```
export defualt {
    components:{
        'wx-search': 之前引入的文件对象
    }
}
```

-5: 这个对象的键名，就是可以使用的标签名

