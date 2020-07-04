import axios from "axios"
import store from "@/store"

// 请求拦截器
axios.interceptors.request.use(config => {
  store.dispatch("haoLoading", true)
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截器
axios.interceptors.response.use(response => {
  if (response.status === 200) {
    store.dispatch("haoLoading", false)
    return Promise.resolve(response)
  }
}, error => {
  return Promise.reject(error)
})

export default axios
