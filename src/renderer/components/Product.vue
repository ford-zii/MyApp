<template>
    <el-row >
        <el-form :model="productForm" ref="productForm" label-width="120px" class="demo-ruleForm">
            <el-col :span="8" :offset="3">
                <el-form-item label="ชื่อสินค้า" prop="name">
                    <el-input v-model="productForm.name"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="8">
                <el-form-item label="ราคา" prop="price">
                    <el-input v-model="productForm.price"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="8" :offset="3">
                <el-form-item label="ประเภท" prop="category">
                    <el-input v-model="productForm.category"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="8">
                <el-form-item label="จำนวน" prop="unit">
                    <el-input v-model="productForm.unit"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="16" :offset="3">
                <el-form-item label="Barcode" prop="barcode">
                    <el-input v-model="productForm.barcode"></el-input>
                </el-form-item>
            </el-col>
            <!--<el-col :span="6">-->
                <!--<el-form-item>-->
                    <!--<el-button type="primary" @click="submitForm('ruleForm')">Generate</el-button>-->
                <!--</el-form-item>-->
            <!--</el-col>-->
            <!--<el-col :span="16" :offset="3">-->
                <!--<el-form-item label="รายละเอียดสินค้า" prop="desc">-->
                    <!--<el-input type="textarea" v-model="ruleForm.desc"></el-input>-->
                <!--</el-form-item>-->
            <!--</el-col >-->
            <el-col :span="16" :offset="3">
                <el-form-item>
                    <el-button type="primary" @click="submitForm(productForm)">บันทึก</el-button>
                    <el-button @click="resetForm(productForm)">Reset</el-button>
                </el-form-item>
            </el-col>

        </el-form>
        <el-col :span="18" :offset="3">
            <el-table
                    :data="this.product.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
                    style="width: 100%">
                <el-table-column
                        label="ID"
                        prop="id">
                </el-table-column>
                <el-table-column
                        label="ชื่อสินค้า"
                        prop="name">
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
                        label="ประเภท"
                        prop="category">
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

        comments:{

        },
        data() {
            return {
                User:[],
                search: '',
                product:[],
                productForm:{
                    name: '',
                    price: null,
                    category: '',
                    unit: null,
                    barcode: ''
                },

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
                vm.product = rows
            });

            // console.log(this.getPro);
            console.log(this.User,"member ");

            // con.end();
        },
        computed:{


        },
        methods: {
            getPro:function (callback) {
                let $query = 'SELECT * FROM `product` ';
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
                let $query = "DELETE FROM product WHERE id = ?";
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
            createProduct (product) {
                console.log(product);
                let $query = "INSERT INTO product SET ?";
                con.query($query,[product],function (err,rows) {
                    if (err) {
                        console.log("An error ocurred performing the query.");
                        console.log(err);
                        return;
                    }
                    // res.sent(rows);
                    console.log("createProduct succesfully executed.",rows);
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
                console.log(row.id);
                this.getDelete(row.id);
            },
            submitForm(formName) {
                console.log(formName.name);
                this.createProduct(formName);
                alert('submit!');
                window.location.reload(true);

            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }

</script>
<style>

</style>
