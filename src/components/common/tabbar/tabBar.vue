<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>
<script>
import tabBarItem from "@/components/tabbar/tabBarItem";
export default {
name: "tabBar",
  components:{ tabBarItem}
}
</script>
<style >
#tab-bar{
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -3px 1px rgba(100,100,100,0.1);
}
</style>