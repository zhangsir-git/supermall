<template>
  <div >
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item  path="/home">
        <template v-slot:item-icon> <img src="@/assets/img/tabbar/home.svg"></template>
        <template v-slot:item-icon_active> <img src="@/assets/img/tabbar/home_active.svg"></template>
        <template v-slot:item-text> <div>首页</div></template>

      </tab-bar-item >
      <tab-bar-item  path="/category">
        <template v-slot:item-icon> <img src="@/assets/img/tabbar/category.svg"></template>
        <template v-slot:item-icon_active> <img src="@/assets/img/tabbar/category_active.svg"></template>
        <template v-slot:item-text> <div>分类</div></template>
      </tab-bar-item>

      <tab-bar-item path="/shopcart">
        <template v-slot:item-icon> <img src="@/assets/img/tabbar/shopcart.svg"></template>
        <template v-slot:item-icon_active> <img src="@/assets/img/tabbar/shopcart_active.svg"></template>
        <template v-slot:item-text> <div>购物车</div></template>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <template v-slot:item-icon> <img src="@/assets/img/tabbar/profile.svg"></template>
        <template v-slot:item-icon_active> <img src="@/assets/img/tabbar/profile_active.svg"></template>
        <template v-slot:item-text> <div>我的</div></template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import tabBar from "@/components/common/tabbar/tabBar";
import tabBarItem from "@/components/common/tabbar/tabBarItem";
export default {
  name: "mainTabbar",
  components:{tabBar,tabBarItem},
  data(){
    return{

    }
  },
  methods:{

  }
}
</script>

<style>
@import "../../assets/css/base.css";

</style>
