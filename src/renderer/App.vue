<template>
  <div id="app" >
          <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'stockmarket',
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
@import url("//unpkg.com/element-ui@1.3.6/lib/theme-default/index.css");
#app{
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}

  /* CSS */
</style>
