<template>
  <div id="app">
    <router-view/>
<!--    <router-link to="/vuex1">Vuex1</router-link> |-->
<main-tabbar></main-tabbar>
  </div>

</template>

<script>
import mainTabbar from "@/components/content/mainTabbar";
export default {
  components:{mainTabbar},
  name: "App"
}

</script>
<style lang="scss">
@import "assets/css/base.css";
</style>
