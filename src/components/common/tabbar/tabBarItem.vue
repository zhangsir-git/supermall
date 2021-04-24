<template>
    <div class="tab-bar-item" @click="itemClick" >
     <div v-if="!isActived"><slot  name="item-icon"></slot></div>
      <div v-else><slot name="item-icon_active"></slot></div>
      <div :class="{active:isActived}">  <slot name="item-text"></slot></div>

  </div>
</template>
<script>
export default {
  name: "tabBarItem",
  props:{
    path:{
      type:String
    }
  },
  data(){
    return{
      isActive:true
    }
  },
  computed:{
    isActived(){
      return this.$route.path.indexOf(this.path)!=-1
    }
},
  methods:{
    itemClick(){
      this.$router.replace(this.path)
    }
  },
  watch:{
    act(){
      this.isActive = this.act;
    }
  }

}
</script>

<style>

.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;

}
.tab-bar-item img{
  height: 24px;
  width: 24px;
  margin-top: 3px;
  vertical-align: middle;

}
.active{
  color: mediumvioletred;
}
</style>