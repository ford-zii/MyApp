<template>
    <el-card>
        <el-container>
            <el-header>
                <el-button  type="primary" round @click="goImport()">Add</el-button>
            </el-header>
            <el-main >
                <el-col  >
                    <el-table
                        :data="this.product.filter(data => !search || data.Pname.toLowerCase().includes(search.toLowerCase()))"
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
                                <el-button
                                        size="mini"
                                        @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                                <el-button
                                        size="mini"
                                        type="danger"
                                        @click="handleDelete(scope.$index, scope.row)">ลบสินค้า</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-col>
            </el-main>
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
                User:[],
                search: '',
                product:[],


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
            // console.log(this.getPro);
            console.log(this.User,"member ");

            // con.end();
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
                    this.$swal('Delete','Complete','success');

                });
            },
            getByID (id){
                console.log(id);
                let $query = 'SELECT * FROM `product` WHERE id = ?';
                conDB.query($query,[id],function (err,rows) {
                    if (err) {
                        console.log("get error performing the query.");
                        console.log(err);
                        return;
                    }
                    // res.sent(rows);
                    console.log("get by id  succesfully executed.",rows);

                });
            },

            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            handleEdit(index, row) {
                console.log(row.id);
                this.getByID(row.id);
                this.loadData();
            },
            async  handleDelete(index, row) {
                console.log(row.id);
                await this.getDelete(row.id);
                await this.$swal("Your imaginary file is safe!");
                this.loadData();
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
