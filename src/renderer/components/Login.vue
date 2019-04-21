<template >
  <div>
    <el-row  style="padding-top: 240px" >
      <el-col :span="16" :offset="6">
        <el-card class="box-card">
          <div :offset="3" slot="header" class="clearfix">
            <span >Login</span>
          </div>
          <div>
            <el-form :model="form" status-icon  ref="form"  class="demo-ruleForm">
              <i class="fas fa-id-card"></i>
              <el-form-item prop="Username" >
                <el-input placeholder="Username" type="text" v-model="form.username" autocomplete="off" ></el-input>
              </el-form-item>
              <el-form-item  prop="Password" >
                <el-input placeholder="Password" type="password" v-model="form.password" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item >
                <el-button  plain @click="submitForm('form')" style="padding-left: 5em;padding-right: 5em; background-color: #a8daf4">Login
                  <font-awesome-icon icon="hand-pointer"/></el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>

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
              this.$swal("",'Login Complete',"success");
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
  /*body {*/
    /*background-color: #3D5B96;*/
    /*!*background-image: linear-gradient(to top, #4fb576 0%, #44c489 30%, #28a9ae 46%, #28a2b7 59%, #4c7788 71%, #6c4f63 86%, #432c39 100%);*!*/
    /*background-size: cover;*/
  /*}*/

  .box-card {
    width: 480px;

  }




</style>