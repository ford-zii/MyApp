<template>
    <el-card>
        <el-container>
            <el-header>
                <el-button  type="success" plain round @click="goImport()">Add
                    <font-awesome-icon icon="cart-plus"/></el-button>
            </el-header>
            <el-main >
                <el-col  >
                    <el-table
                        :data="this.product.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
                        style="width: 100%">
                        <el-table-column
                                label="Barcode"
                                prop="barcode">
                        </el-table-column>
                        <el-table-column
                                label="ชื่อสินค้า"
                                prop="name">
                        </el-table-column>
                        <el-table-column
                                label="ประเภท"
                                prop="cateName">
                        </el-table-column>
                        <el-table-column
                                label="จำนวน"
                                prop="unit">
                        </el-table-column>
                        <el-table-column
                                label="ราคา"
                                prop="price">
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
                                <el-button type="warning" style="background-image: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);" icon="el-icon-edit" circle  @click="handleEdit(scope.$index, scope.row)"></el-button>


                                <el-button type="danger" icon="el-icon-delete" circle @click="handleDelete(scope.$index, scope.row)"></el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-col>
            </el-main>
            <el-dialog title="Product" :visible.sync="dialogFormVisible" v-if="editForm">
                <el-card>
                    <el-form :model="editForm[0]" ref="editForm"  class="demo-ruleForm">
                        <el-col :span="8" :offset="3">
                            <el-form-item label="ชื่อสินค้า" prop="name">
                                <el-input v-model="editForm.name"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="ราคา" prop="Price">
                                <el-input v-model="editForm.price"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8" :offset="3">
                            <el-form-item label="ประเภท" prop="category">
                                <el-select v-model="editForm.category_id" placeholder="Select">
                                    <el-option
                                            v-for="item in category"
                                            :key="item.id"
                                            :label="item.name"
                                            :value="item.id">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="16" :offset="3">
                            <el-form-item label="จำนวน" prop="Unit">
                                <el-input v-model="editForm.unit"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="16" :offset="3">
                            <el-form-item label="Barcode" prop="barcode">
                                <el-input v-model="editForm.barcode"></el-input>
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
        name:'Product',
        comments:{
        },
        data() {
            return {
                category:[],
                search: '',
                product:[],
                dialogFormVisible: false,
                editForm:[],

            }
        },

        async created() {
            conDB.connect(function (err) {

                if (err) {
                    console.log(err.code);
                    console.log(err.fatal);
                }
            });
            this.loadData();
            this.getCategory();
            // console.log(this.getPro);
            console.log(this.product,"member ");

            // con.end();
        },
        mounted(){

            // this.getByID();
            // console.log(this.editForm,"form ");
        },
        computed:{


        },
        methods: {
            loadData () {
                let vm = this;
                let $query = 'SELECT p.id,p.name,p.barcode,p.price,p.unit,c.name as cateName FROM product p INNER JOIN category c ON p.category_id = c.id ';
                conDB.query($query, function (err, rows) {
                    if (err) {
                        console.log("An error ocurred performing the query.");
                        console.log(err);
                        return;
                    }
                    let data = JSON.parse(JSON.stringify(rows));
                    vm.product = data;
                    // callback(data);
                    console.log("Query succesfully executed", rows, data);
                });
            },
            getDelete (id) {
                console.log(id);
                let $query = "DELETE FROM product WHERE id = ?";
                conDB.query($query,[id],function (err,rows) {
                    if (err) {
                        console.log("Delete error performing the query.");
                        console.log(err);
                        return;
                    }
                    // res.sent(rows);
                    console.log("Delete succesfully executed.",rows);
                    // $swal('Delete','Complete','success');

                });
            },
            getCategory () {
                let vm = this;
                let $query = 'SELECT * FROM `category` ';
                conDB.query($query, function (err, rows) {
                    if (err) {
                        console.log("An error ocurred performing the query.");
                        console.log(err);
                        return;
                    }
                    let data = JSON.parse(JSON.stringify(rows));
                    vm.category = data;
                    // callback(data);
                    console.log("Query succesfully executed", rows, data);
                });
            },
             getByID (id){
                let vm = this;
                console.log(id);
                let $query = 'SELECT * FROM `product` WHERE id = ?';
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
                let $query = 'UPDATE product SET name = ?,price = ?,unit = ?,barcode = ?,category_id = ? WHERE id = ?';
                conDB.query($query,[form.name,form.price,form.unit,form.barcode,form.category_id,form.id], function (err,rows) {
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
                            this.$router.push({name:"Product"})
                        }
                    });
            },
            goImport(){
                this.$router.push({name:"NImport"});
            }

        }
    }

</script>
<style scoped>
    .box-card{
        width:2000px;
        height: 769px;
    }
</style>
