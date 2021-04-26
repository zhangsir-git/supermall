<template>
<div>
  <swiper>
    <swiper-item v-for ="item in banners" :key="item" animDuration="100">
      <a :href="item.link">
        <img :src="item.image" style="width: 350px" alt=""/>
      </a>
    </swiper-item>

  </swiper>
</div>
</template>

<script>
import {Swiper,SwiperItem} from "@/components/common/swiper/index";
export default {
  name: "HomeSwiper",
  props:{
    banners:{
      Object:Array,
      default:[],
    }
  },
  components:{
    SwiperItem,Swiper
  }
}
</script>

<style scoped>

</style>
