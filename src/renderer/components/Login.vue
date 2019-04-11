<template>
  <!--<div style="width: 200px " ></div>-->

  <el-row  style="margin: 240px" >
    <el-col :span="16" :offset="6">
      <el-form :model="form" status-icon  ref="form" label-width="120px" class="demo-ruleForm">
        <i class="fas fa-id-card"></i>
        <el-form-item label="User"
                      prop="user" >
                      <!--:rules="[-->
      <!--{ required: true, message: 'Please input email address', trigger: 'blur' },-->
      <!--{ type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }-->
    <!--]" >-->

          <el-input placeholder="user" type="text" v-model="form.username" autocomplete="off" ></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="pass" >
        <!--:rules="[-->
        <!--{ required: true, message: 'Please input email address', trigger: 'blur' },-->
        <!--{ type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }-->
        <!--]" >-->
          <el-input placeholder="password" type="password" v-model="form.password" autocomplete="off"></el-input>
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

<style >
  body {
    background-color: lavender;
    background-size: cover;

  }

</style>