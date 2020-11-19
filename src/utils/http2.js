import axios from 'axios'
// import localcache from './localcache'
// import { Toast } from 'vant'
// import router from '@/router'

// 创建一个错误   这个 没有挂载原型链，而且没有申明 get post 的那些方法，只是很简单的处理了下，仅作为参考吧
function errorCreate(msg) {
  const error = new Error(msg)
  errorLog(error)
  throw error
}
 
// 记录和显示错误
function errorLog(error) {
  Toast.clear(true)
  // 显示提示
  Toast.fail({
    duration: 1500,       // 持续展示 toast
    message: error.message
  })
}

// 创建一个 axios 实例
const service = axios.create({ 
  // baseURL: 'https://jqyb.ynshuke.com/api/v1/',  
  baseURL: 'https://api.ysq.ynshuke.com/api/v1/',
  timeout: 50000 // 请求超时时间
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 在请求发送之前做一些处理
    const token = localcache.get('token') 
    const id = localcache.get('user')
    // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
    if(token) config.headers['token'] = token
    if(id) config.headers['user'] = id
    // config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    return config
  },
  error => {
    // 发送失败
    Promise.reject(error)
  }
)
// 响应拦截器
service.interceptors.response.use(
  response => {
    // dataAxios 是 axios 返回数据中的 data
    const dataAxios = response.data
    // stausCode 状态码（sixos）
    if (dataAxios.statusCode !== undefined ) {
      switch (dataAxios.statusCode) {
        case 100:
          errorCreate(`接口请求失败: ${response.data.msg}`)
          break
        case 200:
          return dataAxios
        case 400:
          errorCreate(`接口请求成功，但是业务处理失败: ${response.data.msg}`)
          break
        case 401:
          setTimeout(() => {
            window.location.href = 'https://api.ysq.ynshuke.com/api/v1/mp/users/auth?callback=https://ysq.ynshuke.com' + router.app.$route.fullPath
          }, 1200)
          errorCreate(`未授权,正在跳转...`)
          break
        case 202:
          errorCreate(`权限代码重复: ${response.data.msg}`)
          break
        case 150:
          errorCreate(`警告: ${response.data.msg}`)
          break
        case 404:
          errorCreate(`未找到资源: ${response.data.msg}`)
          break
        case 201:
          errorCreate(`创建制定资源成功: ${response.data.msg}`)
          break
        case 403:
          errorCreate(`禁止访问、无权限: ${response.data.msg}`)
          break
        case 405:
          errorCreate(`请求类型错误: ${response.data.msg}`)
          break
        case 500:
          errorCreate(`服务器错误: ${response.data.msg}`)
          break
        default:
          errorCreate(`${dataAxios.msg}: ${response.data.msg}`)
          break
      }
    }
  },
  error => {
    if (error && error.response) {
      switch (error.response.status) {
        case 400: error.message = '接口请求成功，但是业务处理失败:' + error.response.data.msg; break
        case 401:
          setTimeout(() => {
            window.location.href = 'https://api.ysq.ynshuke.com/api/v1/mp/users/auth?callback=https://ysq.ynshuke.com' + router.app.$route.fullPath
          }, 1200)
          errorCreate(`未授权,正在跳转...`)
          break
        case 403: error.message = '禁止访问、无权限:' + error.response.data.msg; break
        case 404: error.message = `未找到资源: ${error.response.config.url}`; break
        case 500: error.message = '服务器错误:' + error.response.data.msg; break
        case 100: error.message = '接口请求失败:' + error.response.data.msg; break
        case 150: error.message = '警告:' + error.response.data.msg; break
        case 201: error.message = '创建制定资源成功:' + error.response.data.msg; break
        case 202: error.message = '权限代码重复:' + error.response.data.msg; break
        case 405: error.message = '请求类型错误:' + error.response.data.msg; break
        default: break
      }
    }
    errorLog(error)
    return Promise.reject(error)
  }
)

export default service
