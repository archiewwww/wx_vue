import { createApp } from 'vue'
import { createRouter,createWebHashHistory} from 'vue-router'

import App from './App.vue'
import './index.scss'

import Home from './pages/Index.vue'
import tongxunlu from './pages/tongxunlu.vue'
import shoucang from './pages/shoucang.vue'


const akljdlks = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/',
            component:Home
        },
        {
            path:'/tongxunlu',
            component:tongxunlu,
        },
        {
            path:'/shoucang',
            component:shoucang,
        }
    ]
})



const app = createApp(App)


app.use(akljdlks)
app.mount('#app')

