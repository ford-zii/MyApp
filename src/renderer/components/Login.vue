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

    },
    computed: {

    },
    created() {
      let data =  this.$store.dispatch("member/getUser");
      console.log(data);
    }
    // var mysql = require('mysql');
    // var connection = mysql.createConnection({
    //   host: "localhost",
    //   user: "root",
    //   password: "1234",
    //   port:"3306",
    //   database:"testDB"
    // });
    //
    // connection.connect(function(err) {
    //   // in case of error
    //   if(err){
    //     console.log(err.code);
    //     console.log(err.fatal);
    //   }
    // });
    //
    // // Perform a query
    // var $query = 'SELECT * FROM `user` LIMIT 10';
    //
    // connection.query($query, function(err, rows, fields) {
    //   if(err){
    //     console.log("An error ocurred performing the query.");
    //     console.log(err);
    //     return;
    //   }
    //
    //   console.log("Query succesfully executed", rows);
    // });
    //
    // // Close the connection
    // connection.end(function(){
    //   // The connection has been closed
    // });

  }
</script>
<style>

</style>
