import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Register from '@/pages/Register'
import Login from '@/pages/Login'

/* 
所有静态路由配置的数组
*/
export default [
    {
        path: '/',
        component: Home
    },

    {
        path: '/search/:keyword?', // params参数可传可不传
        component: Search
    },
    

    {
        path: '/register',
        component: Register
    },

    {
        path: '/login',
        component: Login
    }
]
