<template >
    <el-card class="BG">
        <el-container>
            <el-header>
                <el-button type="success" plain round @click="goregisterStaff()"><span class="iconify" data-icon="mdi:account" data-inline="false"></span>Register
                    <font-awesome-icon icon="user-plus"/></el-button>
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
                                <el-button type="warning" style="background-color: #f4f0c1" icon="el-icon-edit" circle  plain @click="handleEdit(scope.$index, scope.row)"></el-button>
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
            <el-dialog title="Shipping address"  :visible.sync="dialogFormVisible" v-if="editForm">
                <el-card>
                    <el-form :model="editForm[0]" ref="editForm"  class="demo-ruleForm">
                        <el-col :span="8" :offset="3">
                            <el-form-item label="ชื่อผู้ใช้" prop="username">
                                <el-input v-model="editForm.username"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="16" :offset="3">
                            <el-form-item label="ชื่อ" prop="firstname">
                                <el-input v-model="editForm.firstname"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="16" :offset="3">
                            <el-form-item label="นามสกุล" prop="lastname">
                                <el-input v-model="editForm.lastname"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="16" :offset="3">
                            <el-form-item label="email" prop="email">
                                <el-input v-model="editForm.email"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="16" :offset="3">
                            <el-form-item label="เพศ" prop="sex">
                                <el-input v-model="editForm.sex"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="16" :offset="3">
                            <el-form-item>

                                <el-button @click="dialogFormVisible = false">Cancel</el-button>
                                <el-button type="primary" @click="saveEdit(editForm,editForm.id)">Confirm</el-button>

                            </el-form-item>
                        </el-col>
                    </el-form>
                </el-card>
            </el-dialog>
        </el-container>
    </el-card>
</template>

<script>
    export default {
        data() {
            return {
                currentDate: new Date(),
                staff: [],
                search:'',
                dialogFormVisible: false,
                editForm:[]
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
            getByID (id){
                let vm = this;
                console.log(id);
                let $query = 'SELECT * FROM `user` WHERE id = ?';
                conDB.query($query,[id], function (err,rows) {
                    if (err) {
                        console.log("get error performing the query.");
                        console.log(err);
                        return;
                    }
                    let data = JSON.parse(JSON.stringify(rows));
                    vm.editForm = data[0];
                    console.log("get by id  succesfully executed.",rows);
                    console.log(vm.editForm,"Form");
                });
            },
            Update(form){
                let vm = this;
                console.log(form,"to SAVE");
                let $query = 'UPDATE user SET username = ?,firstname = ?,lastname = ?,email = ?,sex = ? WHERE id = ?';
                conDB.query($query,[form.username,form.firstname,form.lastname,form.email,form.sex,form.id],function (err,rows) {
                    if (err) {
                        console.log("get error performing the query.");
                        console.log(err);
                        return;
                    }
                    // let data = JSON.parse(JSON.stringify(rows));
                    // vm.editForm = data[0];
                    console.log("update succesfully executed.",rows);
                    // console.log(vm.editForm,"Form");
                });
            },
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            async saveEdit(form,id){
                await this.Update(form,id);
                await this.loadData();
                this.dialogFormVisible = false;
                this.$swal('','Edit success','success');
            },
            async handleEdit(index, row) {
                let vm = this;
                console.log(row);
                await this.getByID(row.id);
                this.dialogFormVisible = true;
            },
            async handleDelete(index, row) {
                // console.log(index,row);
                 console.log(row.id);

                swal({
                    title: "Are you sure?",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                    .then( async (willDelete) => {
                        if (willDelete) {
                            await  this.getDelete(row.id);
                            this.loadData();

                            swal("Delete Complete", {
                                icon: "success",
                            });
                            this.$router.push({name:"Staff"})
                        }
                    });

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