<template>

<el-row>
  <div style="margin: 300px;"></div>
  <el-col :span="24" >
    <el-card >

      <el-row>
        <el-table
                :data="this.User"
                style="width: 100%"
                >
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
                  prop="username"
                  label="Username">
          </el-table-column>
        </el-table>
      </el-row>
      <ul>
          <li v-for="(i,index) in this.User" :key="index"> {{i}}</li>
      </ul>
      <div style="margin: 20px;"></div>

    </el-card>

  </el-col>
</el-row>

</template>

<script>
  var mysql = require('mysql');
  var config = {
    host:"127.0.0.1",
    user: "root",
    password: "12345678",
    port: "3306",
    database:"testDB"
  };
  var con = new  mysql.createConnection(config);
    export default {
      data() {
        return {
        User:[]
        }
      },

      async created() {
        con.connect(function (err) {
          if (err) {
            console.log(err.code);
            console.log(err.fatal);
          }
        });
        let vm = this;
        this.getPro(function (rows) {
          vm.User = rows
        });

        console.log(this.getPro);
        console.log(this.User,"member ");

        con.end();
      },
      computed:{
        // getData() {
        //   let $query = 'SELECT * FROM `user` ';
        //   con.query($query, function (err, rows) {
        //     if (err) {
        //       console.log("An error ocurred performing the query.");
        //       console.log(err);
        //     }
        //     let data = JSON.parse(JSON.stringify(rows));
        //     this.member = rows;
        //     console.log("Query succesfully executed", rows, data);
        //     return data
        //   }); return con
        //   con.end();
        // }

      },
      methods: {
        getPro:function (callback) {
          let $query = 'SELECT * FROM `User` ';
          con.query($query, function (err, rows) {
            if (err) {
              console.log("An error ocurred performing the query.");
              console.log(err);
              return;
            }
            let data = JSON.parse(JSON.stringify(rows));
            callback(data);
            console.log("Query succesfully executed", rows, data);
          });
        }



      }
    }

</script>
<style>

</style>
