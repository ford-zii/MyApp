<template>
    <el-card>
        <el-container>
            <el-main>
                <el-form :model="productForm" ref="productForm" label-width="120px" class="demo-ruleForm">
                    <el-col :span="8" :offset="3">
                        <el-form-item label="ชื่อสินค้า" prop="Pname">
                            <el-input v-model="productForm.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="ราคา" prop="Sell_Price">
                            <el-input v-model="productForm.price"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8" :offset="3">
                        <el-form-item label="ประเภท" prop="category_id">
                            <el-select v-model="productForm.category_id" placeholder="Select">
                                <el-option
                                        v-for="item in category"
                                        :key="item.name"
                                        :label="item.name"
                                        :value="item.id">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="16" :offset="3">
                        <el-form-item label="จำนวน" prop="Unit_Price">
                            <el-input v-model="productForm.unit"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="16" :offset="3">
                        <el-form-item label="Barcode" prop="barcode">
                            <el-input v-model="productForm.barcode"></el-input>
                        </el-form-item>
                    </el-col>

                    <el-col :span="16" :offset="3">
                        <el-form-item>
                            <el-button type="primary" @click="submitForm(productForm)">บันทึก</el-button>
                            <!--<el-button @click="resetForm(productForm)">Reset</el-button>-->
                        </el-form-item>
                    </el-col>

                </el-form>
            </el-main>
        </el-container>
    </el-card>
</template>

<script>
    export default {
        name: "newImport",
        data() {
            return {
                productForm: {
                    name: '',
                    price: null,
                    category_id:'',
                    unit: null,
                    barcode: null,
                    // category: [{
                    //     value: 'Drink',
                    //     label: 'เครื่องดื่ม'
                    // }, {
                    //     value: 'Desert',
                    //     label: 'ของหวาน'
                    // }, {
                    //     value: '',
                    //     label: 'Option3'
                    // }, {
                    //     value: 'Option4',
                    //     label: 'Option4'
                    // }, {
                    //     value: 'Option5',
                    //     label: 'Option5'
                    // }],
                    // value: ''
                },
                category:[]
            }
        },

        async created() {
            conDB.connect(function (err) {

                if (err) {
                    console.log(err.code);
                    console.log(err.fatal);
                }
            });
        this.getCategory();
        },
        methods:{
            getCategory () {
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
                    // callback(data);
                    console.log("Query succesfully executed", rows, data);
                });
            },
            createProduct (product) {
                console.log(product);
                let $query = "INSERT INTO product SET ?";
                conDB.query($query,[product],function (err,rows) {
                    if (err) {
                        console.log("An error occurred performing the query.");
                        console.log(err);
                        return;
                    }
                    // res.sent(rows);
                    console.log("createProduct successfully executed.",rows);
                });
            },
            submitForm(formName) {
                console.log(formName.name);
                this.createProduct(formName);
                this.$swal('submit!');
                this.$router.push({name:"Product"})

            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped>

</style>