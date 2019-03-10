<template>

<el-row>
  <div style="margin: 300px;"></div>
  <el-col :span="8" :offset="8">
    <el-card >

      <el-row>
        <el-input v-model="user" placeholder="User"> </el-input>
      </el-row>

      <div style="margin: 20px;"></div>

      <el-row>
        <el-input v-model="pass" placeholder="Pass" show-password></el-input>
      </el-row>

      <div style="margin: 20px;"></div>

      <el-row :gutter="20">
        <el-col  :offset="12">
          <el-button  type="success" plain>Success</el-button>
        </el-col>
      </el-row>
    </el-card>

  </el-col>
</el-row>
  
</template>

<script>
  export default {
    data() {
      return {
        user: '',
        pass:''
      }
    }
}
</script>
<style>
 
</style>
