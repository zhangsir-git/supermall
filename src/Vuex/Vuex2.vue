<template>
<div>
  <h2>{{$store.state.counter}}</h2>
  <button @click="add">加一下</button>
  <button @click="addCount(5)">加5下</button>
  <button @click="sub">减一下</button>
  <h2> {{$store.getters.powerCounter}}</h2>
  <h2> {{$store.getters.compute}}</h2>
  <h2> {{$store.getters.compute1(30)}}</h2>
  <button @click="getStudent">修改学生</button>
  <button @click="updataIndo">action跟新学生</button>
  <button @click="updataIndo1">action跟新学生11</button>
  <h2>{{$store.state.student}}</h2>
</div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { INCREASEMENT ,DECREMENT} from "@/store/mutation-type";
export default {
name: "Vuex2",
  methods:{
  //普通的提交分割
    add(){
      this.$store.commit("increment")
    },
    sub(){
      this.$store.commit(DECREMENT)
    },
    addCount(count){
      // this.$store.commit("increaseFive",count)
      this.$store.commit({
        type:"increaseFive",
        count:count,
      })
    },
    getStudent(){
      this.$store.commit("updataStudent")
    },
    updataIndo(){
      this.$store.dispatch("aUpdataIno",{
        message:"我是message",
        sucess:()=>{
          console.log("回调成功");
        }
      });
    },
    updataIndo1(){
      this.$store
          .dispatch("aUpdataIno1","我是message")
          .then(res=>{
            console.log(res)
          });
    }

  }
}
</script>

<style scoped>

</style>
