import axios from 'axios'

// 创建axios实例
const service = axios.create({
  // baseURL: 'http://park-cn.17disney.com/api/v3', // process.env.BASE_API, // api的base_url
  baseURL: 'http://api.17disney.com/',
  timeout: 3000 // 请求超时时间
})

// respone拦截器
service.interceptors.response.use(
  response => {
    const res = response
    const { status } = res

    if (status === 200) {
      return response.data
    } else {
      return Promise.reject('error')
    }
  },
  error => {
    console.log('err' + error) // for debug

    return Promise.reject(error)
  }
)

export default service



