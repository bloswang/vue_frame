<template>
  <div class="home clearfix">
    <top_menu></top_menu>
    <left_menu class="left_menu"></left_menu>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import left_menu from './left.vue'
  import top_menu from './top.vue'
  import one_content from './content.vue'
export default {
  name: 'home',
  components: {
    left_menu,
    top_menu,
    one_content
  }
}
</script>

<style scoped>
  .left_menu{
    float: left;
    overflow: auto;
    width: 20%;
  }
  .content{
    padding: 20px 20px 20px 20px;
    float: right;
    overflow: auto;
    width: 80%;
    height: calc(100% - 60px);
  }
</style>
