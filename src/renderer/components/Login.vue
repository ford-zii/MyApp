<template >
  <div>
    <el-row  style="padding-top: 240px" >
      <el-col :span="16" :offset="6">
        <el-card class="box-card">
          <div :offset="3" slot="header" class="clearfix">
            <span >Login</span>
          </div>
          <div>

            <el-form :model="form" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
              <el-form-item label="Username" prop="username">
                <el-input v-model="form.username"></el-input>
              </el-form-item>
              <el-form-item label="Password" prop="password">
                <el-input v-model="form.password" type="password"  @change="submitForm(form)" ></el-input>
              </el-form-item>
              <el-form-item >
                <el-button  plain @click="submitForm(form)" style="padding-left: 5em;padding-right: 5em; background-color: #a8daf4">Login
                  <font-awesome-icon icon="hand-pointer"/></el-button>
              </el-form-item></el-form>


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
            username: '',
            password: ''
          },
          user: null,
          rules: {
            username: [
              {required: true, message: 'Please input Username', trigger: 'blur'},
              {min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur'}
              ],
            password: [
              {required: true, message: 'Please input Password', trigger: 'blur'},
              {min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur'}
              ]
          }
        };
      },
      methods: {
        async submitForm(formName) {
          let vm = this;
          //console.log(vm.username);
           await vm.getByuser(formName);
          //vm.check(formName)
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        },
        async getByuser(user) {
          let vm = this;
          console.log(user);
          let $query = `SELECT * FROM user WHERE username = ? and password = ?`;
          console.log($query, "SQL");
           await conDB.query($query,[user.username,user.password], function (err, rows) {
            if (err) {
              console.log("get error performing the query.");
              console.log(err);
            }
            let data = JSON.parse(JSON.stringify(rows));
            vm.user = data[0]
            console.log("get by user succesfully executed.", rows, vm.user);
            vm.check(vm.user)
            //return vm.user;
          });
          //console.log("cat",cat);
          //return cat;
          //vm.check();
        },
        async check(user){
          //let vm = this;
          //let inputUser = form.password ;

          // cnsole.log(inputUser,'input');
          if (user) {
            this.$swal(" ", "Login Complete", "success");
            this.$router.push({name: "Product"});
            console.log("A")

          }else {
            this.$swal('','Username or Password error!',"error");
            console.log("B",user)

          }
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