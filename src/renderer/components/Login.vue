<template>
<el-row class="tac">
 <menu></menu>
  <el-col :span="20">
    <el-table
            :data="this.User.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
            style="width: 100%">
      <el-table-column
              label="Date"
              prop="ID">
      </el-table-column>
      <el-table-column
              label="Name"
              prop="name">
      </el-table-column>
      <el-table-column
              align="right">
        <template slot="header" slot-scope="scope">
          <el-input
                  v-model="search"
                  size="mini"
                  placeholder="Type to search"/>
        </template>
        <template slot-scope="scope">
          <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
          <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-col>
</el-row>

</template>

<script>
  import menu from "../../renderer/components/Menu";
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
      comments:{
        menu : menu,
      },
      data() {
        return {
          User:[],
          search: ''
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

        // console.log(this.getPro);
        console.log(this.User,"member ");

        // con.end();
      },
      computed:{


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
        },
        getDelete (res) {
           console.log(res);
          let $query = "DELETE FROM user WHERE id = ?";
          con.query($query,[res],function (err,rows) {
            if (err) {
              console.log("An error ocurred performing the query.");
              console.log(err);
              return;
            }
            // res.sent(rows);
            console.log("Delete succesfully executed.",rows);
          });
        },
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        },
        handleEdit(index, row) {

        },
        handleDelete(index, row) {
          // console.log(index,row);
          console.log(row.ID);
          this.getDelete(row.ID);
        }
      }
    }

</script>
<style>

</style>
