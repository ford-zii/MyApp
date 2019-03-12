<template>

<el-row>
  <div style="margin: 300px;"></div>
  <el-col :span="24" >
    <el-card >

      <el-row>
        <el-table
                :data="member"
                style="width: 100%">
          <el-table-column
                  prop="id"
                  label="ID"
                  width="180">
          </el-table-column>
          <el-table-column
                  prop="name"
                  label="Name"
                  width="180">
          </el-table-column>
          <el-table-column
                  prop="user_name"
                  label="Usernam">
          </el-table-column>
        </el-table>
      </el-row>

      <div style="margin: 20px;"></div>

    </el-card>

  </el-col>
</el-row>

</template>

<script>
  var mysql = require('mysql');
  var config = {
    host:"localhost",
    user: "root",
    password: "1234",
    port: "3306",
    database:"testDB"
  };
  var con = new  mysql.createConnection(config);
    export default {

      data() {
        return {
          member: []
        }

      },
      async created() {
        con.connect(function (err) {
          if (err) {
            console.log(err.code);
            console.log(err.fatal);
          }
        });
        this.getData;
        console.log(this.member,"member ");
      },
      computed:{
        getData() {
          let $query = 'SELECT * FROM `user` ';
          con.query($query, function (err, rows) {
            if (err) {
              console.log("An error ocurred performing the query.");
              console.log(err);
            }
            this.member = JSON.parse(JSON.stringify(rows));

            console.log("Query succesfully executed", rows, this.member);
            return ;
          });
        }
      },
      methods: {


      }
    }

</script>
<style>

</style>
