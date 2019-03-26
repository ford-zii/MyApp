<template>
  <div id="app">
      <el-row class="tac">
        <el-col :span="4">
          <el-menu
                  default-active="1"
                  class="el-menu-vertical-demo"
                  @open="handleOpen"
                  @close="handleClose">
            <el-menu-item index="1" @click="goMember()">
                <i class="el-icon-location"></i>
                <span>Member</span>
            </el-menu-item>
            <el-menu-item index="2" @click="goProduct()">
              <i class="el-icon-menu"></i>
              <span>Product</span>
            </el-menu-item>
            <el-menu-item index="3" @click="goStaff()">
              <i class="el-icon-document"></i>
              <span>Staff</span>
            </el-menu-item>

          </el-menu>
        </el-col>
        <el-col :span="20">
          <router-view></router-view>
        </el-col>
      </el-row>
  </div>
  <!--<router-view></router-view>-->
</template>

<script>
  export default {
    name: 'Stockmarket',
    methods:{
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      goMember(){
        this.$router.push({name:"Member"})
      },
      goProduct(){
        this.$router.push({name:"Product"})
      },
      goStaff(){
        this.$router.push({name:"Staff"})
      }
    }
  }
</script>

<style>
#app{
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
  /* CSS */
</style>
