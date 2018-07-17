<template>
  <div>
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
    margin-top: 0.5%;
    float: left;
    overflow: hidden;
    width: 20%;
  }
  .content{
    padding: 20px;
    margin: 0.5%;
    float: left;
    width: 79%;
  }
  </style>
