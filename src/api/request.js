//二次封装axios
import axios from "axios";
//创建axios实例
const requests = axios.create({
    //配置对象
    //基础路径
    baseURL:"/api",
    //请求超时的时间
    timeout :5000
})
//请求拦截器:发送请求前可以做一些事
requests.interceptors.request.use((config)=>{
    //config：配置对象 属性header很重要
    return config
})
//响应拦截器
requests.interceptors.response.use((res)=>{
    //成功的回调函数：服务器响应数据回来，拦截器可以做一些事
    return res.data
},(error)=>{
    //失败的回调函数
    return Promise.reject(new Error('false'))
}
)
//对外暴露
export default requests