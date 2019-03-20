<template>
    <el-row>
        <el-col :span="8"  :offset="9">
            <el-card :body-style="{ padding: '50px' }">
                <img src="https://s.isanook.com/wo/0/rp/r/w700/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL3dvLzAvdWQvMjAvMTAxNTczL3AuanBn.jpg" class="image" width="250" height="250">
                <div style="padding: 20px">
                    <el-col :offset="8">
                        <span>{{this.Member[0].name}} </span> <br />
                        <span>{{this.Member[0].id}}</span>
                    </el-col>
                    <el-col :offset="10">
                        <div class="bottom clearfix" >
                            <el-button type="text" class="button">Edit</el-button>
                        </div>
                    </el-col>
                    <img src="https://pbbeautyschool.com/wp-content/uploads/2014/06/star-student.png" class="image" width="50" height="50" style="margin-left: 80px">
                </div>
            </el-card>
        </el-col>
        <el-col   style="margin: 200px 200px 300px 500px" >
            <el-button type="primary" round @click="goRegistermember()">Register</el-button>
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
        name: "Member",
        data() {
            return {
                currentDate: new Date(),
                Member:[]
            };
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
                vm.Member = rows
            });

            // console.log(this.getPro);
            console.log(this.Member,"member ");

            // con.end();
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
                console.log(row.id);
                this.getDelete(row.id);
            },
            goRegistermember () {
                this.$router.push({name:"register"})
            }
        }
    }
</script>

<style scoped>

</style>