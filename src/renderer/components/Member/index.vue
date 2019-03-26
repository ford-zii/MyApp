<template>
    <el-row>
        <!--<el-col :span="8"  :offset="9">-->
            <!--<el-card :body-style="{ padding: '50px' }">-->
                <!--<img src="https://s.isanook.com/wo/0/rp/r/w700/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL3dvLzAvdWQvMjAvMTAxNTczL3AuanBn.jpg" class="image" width="250" height="250">-->
                <!--<div style="padding: 20px">-->
                    <!--<el-col :offset="8">-->
                        <!--<span>{{this.Member[0].name}} </span> <br />-->
                        <!--<span>{{this.Member[0].id}}</span>-->
                    <!--</el-col>-->
                    <!--<el-col :offset="10">-->
                        <!--<div class="bottom clearfix" >-->
                            <!--<el-button type="text" class="button">Edit</el-button>-->
                        <!--</div>-->
                    <!--</el-col>-->
                    <!--<img src="https://pbbeautyschool.com/wp-content/uploads/2014/06/star-student.png" class="image" width="50" height="50" style="margin-left: 80px">-->
                <!--</div>-->
            <!--</el-card>-->
        <!--</el-col>-->
        <!--<el-col   style="margin: 200px 200px 300px 500px" >-->
            <!--<el-button type="primary" round @click="goRegistermember()"><span class="iconify" data-icon="mdi:account" data-inline="false"></span>Register</el-button>-->
        <!--</el-col>-->
        <el-col :offset="3"  >
        <el-button type="primary" round @click="goRegistermember()"><span class="iconify" data-icon="mdi:account" data-inline="false"></span>Register</el-button>
        </el-col>
        <el-col :span="18" :offset="3">
            <el-table
                    :data="this.Member.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
                    style="width: 100%">
                <!--<el-table-column-->
                        <!--label="Barcode"-->
                        <!--prop="Cus_ID">-->
                <!--</el-table-column>-->
                <el-table-column
                        label="ชื่อ-นามสกุล"
                        prop="Cus_name">
                </el-table-column>
                <el-table-column
                        label="เบอร์โทร"
                        prop="Contact_no">
                </el-table-column>
                <el-table-column
                        label="ที่อยู่"
                        prop="Cus_address">
                </el-table-column>
                <!--<el-table-column-->
                <!--label="ประเภท"-->
                <!--prop="cateName">-->
                <!--</el-table-column>-->
                <el-table-column
                        align="right" >
                    <template slot="header" slot-scope="scope">
                        <el-input
                                v-model="search"
                                size="mini"
                                placeholder="ค้นหา"/>
                    </template>
                    <template slot-scope="scope">
                        <!--<el-button-->
                        <!--size="mini"-->
                        <!--@click="handleEdit(scope.$index, scope.row)">Edit</el-button>-->
                        <el-button
                                size="mini"
                                type="danger"
                                @click="handleDelete(scope.$index, scope.row)">ลบสินค้า</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-col>
    </el-row>

</template>

<script>
    // var mysql = require('mysql');
    // var config = {
    //     host:"localhost",
    //     user: "root",
    //     password: "1234",
    //     port: "3306",
    //     database:"testDB"
    // };
    // var con = new  mysql.createConnection(config);
    //
    export default {
        data() {
            return {
                currentDate: new Date(),
                Member:[],
                search:''
            };
        },
        async created() {
            conDB.connect(function (err) {
                if (err) {
                    console.log(err.code);
                    console.log(err.fatal);
                }
            });

            this.loadData();
            // console.log(this.getPro);
            console.log(this.loadData,"member ");

            // con.end();
        },
        methods: {
            loadData() {
                let vm = this;
                let $query = 'SELECT * FROM `customer` ';
                conDB.query($query, function (err, rows) {
                    if (err) {
                        console.log("An error ocurred performing the query.");
                        console.log(err);
                        return;
                    }
                    let data = JSON.parse(JSON.stringify(rows));
                    vm.Member = data;
                    console.log("Query succesfully executed", rows, data);
                });
            },
            getDelete (res) {
                console.log(res);
                let $query = "DELETE FROM customer WHERE Cus_ID = ?";
                conDB.query($query,[res],function (err,rows) {
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
                console.log(row.Cus_ID);
                this.getDelete(row.Cus_ID);
                this.loadData();
            },
            goRegistermember () {
                this.$router.push({name:"registerMember"})
            }
        }
    }
</script>

<style scoped>

</style>
