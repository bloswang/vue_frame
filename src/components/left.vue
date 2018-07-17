<template>
    <div class="left">
      <el-row class="tac">
        <el-col :span="24" style="height:700px;">
          <el-menu
            :default-active="active"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <router-link to="/home/one">
                <el-menu-item index="1-1">选项1</el-menu-item>
                </router-link>
                <router-link to="/home/two">
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </router-link>
                <router-link to="/home/three">
                  <el-menu-item index="1-3">选项3</el-menu-item>
                </router-link>
                <router-link to="/home/four">
                <el-menu-item index="1-4">选项4</el-menu-item>
                </router-link>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航二</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
                <el-menu-item index="2-4">选项4</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="3">
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>
</template>

<script>
    export default {
      data(){
        return{
          active:'1-1'
        }
      },
      methods: {
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        },
        handleSelect(val){
          sessionStorage.setItem("active",val);

        }
      },
      mounted(){

        let msg = sessionStorage.getItem("active")
        console.log(msg)
        if(msg == null){
          this.active = '1-1'
        }else{
          this.active = msg
        }
      }
    }
</script>

<style>
  .left{
    height:800px;
  }
  .el-menu-vertical-demo{
    height:100%;
  }
  .el-menu-item-group a{
    color: white;
    text-decoration: none;
  }
  .el-submenu span{
    color: white;
    text-decoration: none;
  }
</style>
