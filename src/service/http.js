import axios from 'axios'
import service from './articleApi'

// service 循环遍历输出不同的请求方法
let instance = axios.create({
	withCredentials: true,
	baseURL: '/api',
	timeout: 1000,
})

const Http = {}; // 包裹请求方法的容器

// 请求参数统一
for (let key in service){
	let api = service[key]; // 包含url，method
	Http[key] = async function(
		params,		//请求参数
		isFormData = false,		//标识是否是表单
		config = {}	// 配置参数
	) {
		let newParams = {}
		// content-type是否为form-data
		if (params && isFormData) {
			newParams = new FormData()
			for (let i in params) {
				newParams.append(i, params[i])
			}
		} else {
			newParams = params
		}
		// 不同请求的判断
		let response = {}; //请求返回值
		if (api.method === 'post'){
			try {
				response = await instance[api.method](
					api.url, newParams, config)
			} catch (e) {
				response = e
			}
		} else if (api.method === 'get'){
			config.params = newParams
			try {
				response = await instance[api.method](
					api.url, config
				)
			} catch (e) {
				response = e
			}
		}
		return response;
	}
}

// 添加请求拦截器
instance.interceptors.request.use(config => {
	return config
}, () => {
	//请求错误
	alert("error")
})

// 响应拦截器
instance.interceptors.response.use(res => {
	return res.data
}, () => {
	alert("response error")
})

export default Http