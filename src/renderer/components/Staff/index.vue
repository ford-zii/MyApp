<template >
    <el-card class="BG">
        <el-container>
            <el-header>
                <el-button  type="success" plain round @click="$router.push({name:'registerStaff'})"><span class="iconify" data-icon="mdi:account" data-inline="false"></span>Register</el-button>
            </el-header>
            <el-main>
                <el-table
                        :data="this.staff.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
                        style="width: 100%">

                    <el-table-column
                            label="ชื่อผู้ใช้"
                            prop="username">
                    </el-table-column>
                    <el-table-column
                            label="ชื่อ"
                            prop="firstname">
                    </el-table-column>
                    <el-table-column
                            label="นามสกุล"
                            prop="lastname">
                    </el-table-column>
                    <el-table-column
                            label="Email"
                            prop="email">
                    </el-table-column>
                    <el-table-column
                            label="เพศ"
                            prop="sex">
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
                staff: [],
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
            console.log(this.staff," user ");

            // con.end();
        },
        methods: {
            loadData() {
                let vm = this;
                let $query = 'SELECT * FROM `user` ';
                conDB.query($query, function (err, rows) {
                    if (err) {
                        console.log("An error occurred performing the query.");
                        console.log(err);
                        return;
                    }
                    let data = JSON.parse(JSON.stringify(rows));
                    vm.staff = data;
                    console.log("Query successfully executed", rows, data);
                });
            },

            getDelete(res) {
                console.log(res);
                let $query = "DELETE FROM user WHERE id = ?";
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
            async handleDelete(index, row) {
                // console.log(index,row);
                console.log(row.id);
                await  this.getDelete(row.id);

                this.loadData();
            },
            goregisterStaff() {
                this.$router.push({name: "registerStaff"})
            },
            alert() {
                this.$swal("Good job!", "You clicked the button!", "success");
            },
        }
    }
</script>

<style scoped>

</style>