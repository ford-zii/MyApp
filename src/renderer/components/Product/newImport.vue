<template>
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
        <!--<el-col :span="8" :offset="3">-->
        <!--<el-form-item label="ประเภท" prop="category">-->
        <!--<el-input v-model="productForm.category"></el-input>-->
        <!--</el-form-item>-->
        <!--</el-col>-->
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
</template>

<script>
    export default {
        name: "newImport",
        data(){
          return{
              productForm:{
                  name: '',
                  price: null,
                  category_id: '2',
                  unit: null,
                  barcode: null
              },
          }
        },
        async created() {
            conDB.connect(function (err) {

                if (err) {
                    console.log(err.code);
                    console.log(err.fatal);
                }
            });

        },
        methods:{
            createProduct (product) {
                console.log(product);
                let $query = "INSERT INTO product SET ?";
                conDB.query($query,[product],function (err,rows) {
                    if (err) {
                        console.log("An error ocurred performing the query.");
                        console.log(err);
                        return;
                    }
                    // res.sent(rows);
                    console.log("createProduct succesfully executed.",rows);
                });
            },
            submitForm(formName) {
                console.log(formName.name);
                this.createProduct(formName);
                alert('submit!');
                this.loadData();

            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped>

</style>