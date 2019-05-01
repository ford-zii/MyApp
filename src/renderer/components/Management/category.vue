<template>
    <el-card class="BG">
        <el-container>
            <el-main>
                <el-table
                        :data="this.category"
                        style="width: 100%">

                    <el-table-column
                            label="Category"
                            prop="name">
                    </el-table-column>
                    <el-table-column
                            align="right" >
                        <template slot-scope="scope">
                            <el-button type="warning" style="background-image: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);" icon="el-icon-edit" circle  @click="handleEdit(scope.$index, scope.row)"></el-button>
                            <el-button type="danger" icon="el-icon-delete" circle @click="handleDelete(scope.$index, scope.row)"></el-button>
                        </template>
                    </el-table-column>

                </el-table>
            </el-main>
            <el-dialog title="Category" :visible.sync="dialogFormVisible" v-if="editForm">
                <el-card>
                    <el-form :model="editForm[0]" ref="editForm"  class="demo-ruleForm">
                        <el-col :span="8" :offset="3">
                            <el-form-item label="Type" prop="name">
                                <el-input v-model="editForm.name"></el-input>
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
        data(){
            return{
                name: "category",
                dialogFormVisible: false,
                editForm:[],
                category:[]
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
            let $query = 'SELECT * FROM `category` ';
            conDB.query($query, function (err, rows) {
                if (err) {
                    console.log("An error occurred performing the query.");
                    console.log(err);
                    return;
                }
                let data = JSON.parse(JSON.stringify(rows));
                vm.category = data;
                console.log("Query successfully executed", rows, data);
            });
        }
        ,
        getByID(id) {
            let vm = this;
            console.log(id);
            let $query = 'SELECT * FROM `category` WHERE id = ?';
            conDB.query($query, [id], function (err, rows) {
                if (err) {
                    console.log("get error performing the query.");
                    console.log(err);
                    return;
                }
                let data = JSON.parse(JSON.stringify(rows));
                vm.editForm = data[0];
                console.log("get by id  succesfully executed.", rows);
                console.log(vm.editForm, "Form");
            });
        },
        getDelete (id) {
            console.log(id);
            let $query = "DELETE FROM category WHERE id = ?";
            conDB.query($query, [id], function (err, rows) {
                if (err) {
                    console.log("Delete error performing the query.");
                    console.log(err);
                    return;
                }
                // res.sent(rows);
                console.log("Delete succesfully executed.", rows);
                // $swal('Delete','Complete','success');

            });
        },
        Update(form) {
            let vm = this;
            console.log(form, "to SAVE");
            let $query = 'UPDATE category SET name = ? WHERE id = ?';
            conDB.query($query, [form.name,form.id], function (err, rows) {
                if (err) {
                    console.log("get error performing the query.");
                    console.log(err);
                    return;
                }
                // let data = JSON.parse(JSON.stringify(rows));
                // vm.editForm = data[0];
                console.log("update succesfully executed.", rows);
                // console.log(vm.editForm,"Form");
            });
        },
        async saveEdit(form, id) {
            await this.Update(form);
            await this.loadData();
            this.dialogFormVisible = false;
            this.$swal('', 'Edit success', 'success');
        },
        async handleEdit(index, row) {
            let vm = this;
            console.log(row,'ggd');
            await this.getByID(row.id);
            vm.dialogFormVisible = true;
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
                    this.$router.push({name:"category"})
                }
                });
            }

        }
    }
</script>

<style scoped>

</style>