import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import axios from "axios";
import {request1} from './network/request'
createApp(App).use(store).use(router).mount('#app')

// axios.defaults.baseURL = "http://123.207.32.32:8000"
// axios.defaults.timeout = 5000
// const ax1 = axios({
// 	url:'/home/multidata'
// })
// const ax2 = axios({
// 	url:'/home/data',
// 	params:{
// 		type:'sell',
// 		page:1,
// 	}
// })
// axios.all([ax1,ax2])
// 			.then(res =>{
// 				console.log(res);
// 			})
//
// axios.all([ax1,ax2])
// 		.then(axios.spread((res1,res2)=>{
// 			console.log(res1);
// 			console.log(res2);
// 		}))
// const axios1 = axios.create({
// 	baseURL : "http://123.207.32.32:8000",
// 	timeout : 5000
// })
// axios1({
// 	url:'/home/data',
// 	params:{
// 		type:'sell',
// 		page:1,
// 	}
// }).then(res =>{
// 	console.log(res);
// })
request1({
	url:'/home/multidata'
}).then(res =>{
	console.log("封装好的");
	console.log(res)
})
