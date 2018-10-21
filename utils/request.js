import axios from 'axios'

const instance = axios.create({
    baseURL: '',
    withCredentials: false,
    timeout: 50000,
    headers: {
        'content-type': 'application/json;charset=UTF-8',
    },
})

// request拦截器
instance.interceptors.request.use(
    config => {
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

// respone拦截器
instance.interceptors.response.use(
    response => response.data,
    error => {
        return Promise.reject(error.response)
    }
)

export default instance

/**
 * 封装的request方法
 * @param  {sgring} url    接口地址
 * @param  {string} method 请求方法为get 还是post
 * @param  {object} data   请求带的参数
 * @param  {string} origin 有时候需要直接拿到返回的res,有时候需要res.data更方便
 * @return {[type]}        [description]
 */

// export default (url = '', method = 'get', data = {}, origin = false) => {
//     const options =
//         method.toLowerCase() == 'get' ? { params: data } : JSON.stringify(data)
//     return instance[method](url, options)
//         .then(res => {
//             return origin ? res : res.data
//         })
//         .catch(err => {
//             return err
//         })
// }
