<template>

<el-row class="tac">
  <el-col :span="4">
    <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#409EFF"
            text-color="#fff"
            active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group title="Group One">
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item one</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">item four</template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span>Navigator Two</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span>Navigator Three</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span>Navigator Four</span>
      </el-menu-item>
    </el-menu>
  </el-col>

  <el-col :span="20">
    <el-table
            :data="this.User.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
            style="width: 100%">
      <el-table-column
              label="Date"
              prop="id">
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
                  @click="getDelete()">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
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

        console.log(this.getPro);
        console.log(this.User,"member ");

        // con.end();
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
        },
        getDelete () {
          // console.log(dataID);
          let $query = "DELETE FROM user WHERE id = 2";
          con.query($query,function (err,rows) {
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
          console.log(index, row);
        },
        handleDelete(index, row) {
          this.getDelete(index,row);
        }
      }
    }

</script>
<style>

</style>
