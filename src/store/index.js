import { createStore } from 'vuex'
import { INCREASEMENT ,DECREMENT} from "@/store/mutation-type";
import getters from "@/store/getters";

//mutation action getters 中函数的第一个属性是自带的属性。module里面的这三个甚至第二个也是
//也可以把其他五个属性分别放入一个文件中，直接引用过来就好了
export default createStore({
  state: {
    counter:10000,
    student:{id:123,age:23,name:"小窝"}
  },
  mutations: {
    [INCREASEMENT](state){
      state.counter++;
    },
    increment(state){
    state.counter++;
    },

    [DECREMENT](state){
      state.counter--;
    },
    increaseFive(state,payload){

      setTimeout(()=>{
        state.counter += payload.count;
      },1000)
    },
    updataStudent(state){
      state.student.name = "cns";
      state.student.hobby ="dance"
      delete state.student.id;
    }
  },
  //和mutation操作一样，只是异步操作
  actions: {
   // context上下文,也可以弄个对象，里面放参数和回调函数，
    aUpdataIno(context1,payload){
     setTimeout(()=>{
           context1.commit('updataStudent')
     },1000)
      console.log(payload.message);
     payload.sucess()
    },
    aUpdataIno1(context1,payload){
     return  new Promise((resolve)=>{
        setTimeout(()=>{
               context1.commit('updataStudent')
           },1000)
               console.log(payload.message);
               resolve("异步已经处理好")
      })


    }
  },
  modules: {
  },
  getters
})
