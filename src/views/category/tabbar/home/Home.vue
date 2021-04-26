<template>
  <div id="home">
    <navbar>
        <template v-slot:center><div>购物车</div></template>
    </navbar>
      <home-swiper :banners =banners></home-swiper>
    <home-recommand-view :recommends="recommends"></home-recommand-view>
    <h2>主页</h2>
  </div>

</template>
<script>
import Navbar from "@/components/common/navbar/Navbar";
import HomeSwiper from "@/views/category/tabbar/home/childrenComps/HomeSwiper";
import HomeRecommandView from "@/views/category/tabbar/home/childrenComps/HomeRecommandView";
import {getHomeData} from "@/network/home";

export default {

  name: "Home",
  components:{
    Navbar,HomeSwiper,HomeRecommandView
  },
  data(){
    return{
      banners:[],
      recommends:[],
      result:"",
    }
  },
  created() {
    getHomeData().then(res =>{
     this.banners = res.data.banner.list;
     this.recommends = res.data.recommend.list;
      console.log(this.banners);
    })

  }
}
</script>

<style scoped>

</style>
