<template>
  <div class="recommend">
    <div v-for="rec in recommends" :key="rec" class="recommend-item">
        <a :href="rec.link">
          <img :src="rec.image" style="width: 65px">
          <div>{{rec.title}}</div>
        </a>
    </div>
  </div>
</template>

<script>

export default {
  name: "HomeRecommandView",
  props:{
    recommends:{
      type:Array,

    }
  }
}
</script>

<style >
.recommend{
  display: flex;
  text-align: center;
}
.recommend-item{
  flex: 1;
  font-size: 13px;
  font-width: 400;
  padding: 10px 0 20px;
  border-bottom: 8px solid #eee;
}
</style>
