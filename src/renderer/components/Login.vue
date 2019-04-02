<template>
  <!--<div style="width: 200px " ></div>-->

  <el-row>
    <el-col :span="12" :offset="5">
      <el-form :model="form" status-icon  ref="form" label-width="120px" class="demo-ruleForm">
        <i class="fas fa-id-card"></i>
        <el-form-item label="User" prop="user" >
          <el-input type="text" v-model="form.username" autocomplete="off" ></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="pass" >
          <el-input type="password" v-model="form.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('form')">Login</el-button>

        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
    export default {
      data() {

        return {
          form: {
            username:'',
            password: ''
          },
        };
      },
      methods: {
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              alert('submit!');
              this.$router.push({name:"Product"});
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        }
      }
    }

</script>

<style scoped>

</style>