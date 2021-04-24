import axios from "axios";
export function request1(config){
	const instance = axios.create({
		baseURL : "http://123.207.32.32:8000",
		timeout : 5000
	})
	instance.interceptors.request.use(config =>{
		// console.log(config);
		return config
	})

11
	instance.interceptors.response.use(res =>{
		console.log("respose");
		return  res.data
	},error => {
		console.log(error)
	})
	return instance(config)
}