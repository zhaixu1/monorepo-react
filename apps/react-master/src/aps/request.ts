import axios from 'axios'

const commonUrl = 'http://localhost:3010/api'

const instance = axios.create({
  baseURL: commonUrl,
  timeout: 5000,
})

instance.interceptors.request.use(
  (config) => {
    // 添加token
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

instance.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    return Promise.reject(error)
  },
)

interface ParamsGetList {
  url: string
  startNum?: number
  pageSize?: number
  params?: any
}

// type Obj<T> = T extends object ? ([key in keyof T])
// 写一个type类型，type是对象形式，里面不限制几个参数
export type ObjType<T> = { [key in keyof T]: T[key] }

export const apiGet = ({url, startNum, pageSize, params}: ParamsGetList) => {
    return instance.get(url, {
      params: {
        startNum: startNum || 0,
        pageSize: pageSize || 2,
        ...params,
      },
    })   
}