<template>
    <el-card>
        <el-container>
            <el-main>
            <el-table
                    border
                    :data="this.customerrank"
                    style="width: 100%">
                <el-table-column
                        label="Name"
                        prop="name">
                </el-table-column>
                <el-table-column
                        label="Percent"
                        prop="divident">
                </el-table-column>
                <el-table-column
                        label="Edit"
                        prop="edit"
                        align="right" >
                    <template slot-scope="scope">
                        <el-button type="warning" style="background-image: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);" icon="el-icon-edit" circle  @click="handleEdit(scope.$index, scope.row)"></el-button>
                        <el-button type="danger" icon="el-icon-delete" circle @click="handleDelete(scope.$index, scope.row)"></el-button>
                    </template>
                </el-table-column>
            </el-table>
            </el-main>
            <el-dialog title="Shipping address"  :visible.sync="dialogFormVisible" v-if="editForm">
                <el-card>
                    <el-form :model="editForm[0]" ref="editForm"  class="demo-ruleForm">
                        <el-col :span="8" :offset="3">
                            <el-form-item label="Name" prop="name">
                                <el-input v-model="editForm.name"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="16" :offset="3">
                            <el-form-item label="percent" prop="divident">
                                <el-input v-model="editForm.divident"></el-input>
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
                name: "member settings",
                dialogFormVisible: false,
                editForm: [],
                customerrank:[]
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
            console.log(this.customerrank, " name ");

            // con.end();
        },
        methods: {
            loadData() {
                let vm = this;
                let $query = 'SELECT * FROM `customerrank` ';
                conDB.query($query, function (err, rows) {
                    if (err) {
                        console.log("An error occurred performing the query.");
                        console.log(err);
                        return;
                    }
                    let data = JSON.parse(JSON.stringify(rows));
                    vm.customerrank = data;
                    console.log("Query successfully executed", rows, data);
                });
            },
            getByID (id){
                let vm = this;
                console.log(id);
                let $query = 'SELECT * FROM `customerrank` WHERE id = ?';
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
                let $query = 'UPDATE customerrank SET name = ?, divident = ? WHERE id = ?';
                conDB.query($query,[form.name,form.divident,form.id],function (err,rows) {
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
            async saveEdit(form,id){
                await this.Update(form);
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


            },

    }

</script>

<style scoped>

</style>