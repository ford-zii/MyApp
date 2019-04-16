<template>
    <el-card>
        <el-container >
            <el-header>
                <el-button type="success" plain round @click="goRegistermember()"><span class="iconify" data-icon="mdi:account" data-inline="false"></span>Register</el-button>
            </el-header>
            <el-main>
                <el-table
                        :data="this.Member.filter(data => !search || data.firstname.toLowerCase().includes(search.toLowerCase()))"
                        style="width: 100%">

                    <el-table-column
                            label="ชื่อ"
                            prop="firstname">
                    </el-table-column>
                    <el-table-column
                            label="นามสกุล"
                            prop="lastname">
                    </el-table-column>
                    <el-table-column
                            label="เบอร์โทร"
                            prop="contact">
                    </el-table-column>
                    <el-table-column
                            label="ที่อยู่"
                            prop="address">
                    </el-table-column>
                    <el-table-column
                            label="เพศ"
                            prop="sex">
                    </el-table-column>
                    <el-table-column
                            label="email"
                            prop="email">
                    </el-table-column>
                    <el-table-column
                            label="Rank"
                            prop="rank_name">
                    </el-table-column>
                    <el-table-column
                            align="right" >
                        <template slot="header" slot-scope="scope">
                            <el-input
                                    v-model="search"
                                    size="mini"
                                    placeholder="ค้นหา"/>
                        </template>
                        <template slot-scope="scope">
                            <el-button type="primary" icon="el-icon-edit" circle  plain @click="handleEdit(scope.$index, scope.row)"></el-button>
                            <!--<el-button-->
                            <!--size="mini"-->

                            <el-button type="danger" icon="el-icon-delete" circle @click="handleDelete(scope.$index, scope.row)"></el-button>
                            <!--size="mini"-->
                            <!--type="danger"-->
                            <!--@click="handleDelete(scope.$index, scope.row)">ลบสมาชิก</el-button>-->

                            <!--<el-button-->
                            <!--size="mini"-->
                            <!--type="danger"-->
                            <!--@click="handleDelete(scope.$index, scope.row)">ลบข้อมูล</el-button>-->
                        </template>
                    </el-table-column>

                </el-table>
            </el-main>
        </el-container>
    </el-card>

</template>

<script>

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
                let $query = 'SELECT C.id,C.firstname,C.lastname,C.address,C.contact,C.email,C.sex,C.ssn,R.name as rank_name FROM customer C INNER JOIN customerRank R ON C.rank_id = R.id;';
                conDB.query($query, function (err, rows) {
                    if (err) {
                        console.log("An error occurred performing the query.");
                        console.log(err);
                        return;
                    }
                    let data = JSON.parse(JSON.stringify(rows));
                    vm.Member = data;
                    console.log("Query successfully executed", rows, data);
                });
            },
            getDelete (res) {
                console.log(res);
                let $query = "DELETE FROM customer WHERE Cus_ID = ?";
                conDB.query($query, [res], function (err, rows) {
                    if (err) {
                        console.log("An error occurred performing the query.");
                        console.log(err);
                        return;
                    }
                    // res.sent(rows);
                    console.log("Delete successfully executed.", rows);
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

<style >
    body{
        background-color: powderblue;
        background-size: cover;
    }

</style>
