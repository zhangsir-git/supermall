import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import axios from "axios";
// import {request1} from './network/request'
createApp(App).use(store).use(router).mount('#app')

// request1({
// 	url:'/home/multidata'
// }).then(res =>{
// 	console.log("封装好的");
// 	console.log(res)
// })
