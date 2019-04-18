<template>
    <el-card>
        <el-container>
            <el-header>
                <el-form  :inline="true" class="demo-form-inline">
                       <el-form-item label="รหัสลูกค้า">
                           <el-input v-model="keyGet" @change="selectM()"></el-input>
                       </el-form-item>
                        <el-form-item label="ชื่อลูกค้า">
                            <el-input v-model="formCUS.firstname" ></el-input>
                        </el-form-item>
                        <el-form-item label="ระดับ">
                            <el-input v-model="formCUS.rankName" ></el-input>
                        </el-form-item>
                        <el-form-item >
                            <el-input v-model="Total" fontsize="20px"></el-input>
                        </el-form-item>
                </el-form>
            </el-header>
            <el-main >
                <el-form :inline="true">
                    <el-form-item label="รหัสสินค้า">
                        <el-input v-model="formPID" @change="selectP()"></el-input>
                    </el-form-item>
                    <el-form-item label="จำนวน">
                        <el-input v-model="Pcont" ></el-input>
                    </el-form-item>
                </el-form>

                    <el-table
                            :data="this.Psell"
                                style= "width: 50% ">
                        <el-table-column
                                prop="barcode"
                                label="BarCode">

                        </el-table-column>
                            <el-table-column
                                    prop="name"
                                    label="รายการ">

                            </el-table-column>
                            <el-table-column
                                    prop="cateName"
                                    label="Type">

                            </el-table-column>
                            <el-table-column
                                    prop="unit"
                                    label="Unit">

                            </el-table-column>
                            <el-table-column
                                    prop="price"
                                    label="Price">

                            </el-table-column>
                    </el-table>

                    <!--<el-form :inline="true" :model="Calculate" class="demo-form-inline"  >-->


                        <!--<el-col :span="5" :offset="17" >-->
                        <!--<el-form-item >ส่วนลด-->
                            <!--<el-input placeholder="0.00"  v-model="formInline.Discount" ></el-input>-->
                        <!--</el-form-item>-->
                        <!--</el-col>-->

                        <!--<el-col :span="5" :offset="17" >-->
                        <!--<el-form-item >จำนวนเงิน-->
                            <!--<el-input placeholder="0.00" v-model="formInline.money"></el-input>-->
                        <!--</el-form-item>-->
                        <!--</el-col>-->

                        <!--<el-col :span="5" :offset="17">-->
                        <!--<el-form-item >รับเงิน-->
                            <!--<el-input placeholder="0.00"  v-model="formInline.Getmoney" ></el-input>-->
                        <!--</el-form-item>-->
                        <!--</el-col>-->

                        <!--<el-col :span="5" :offset="17" >-->
                        <!--<el-form-item >เงินทอน-->
                            <!--<el-input placeholder="0.00"  v-model="formInline.Refund" ></el-input>-->
                        <!--</el-form-item>-->
                        <!--</el-col>-->
                    <!--</el-form>-->
            </el-main>

            <el-footer >
                <el-form style="margin-left: 350px">
                    <el-button  type="warning"  style="background-color: #f4736b" @click="submitForm(productForm)">คิดเงิน</el-button>
                </el-form>

            </el-footer>

        </el-container>
    </el-card>
</template>

<script>
    export default {
        data() {
            return {
                keyGet:'',
                formCUS:[],
                formPID:'',
                formProduct:{


                },
                Total :'0.00',
                Psell:[],
                Pcont: '0',

                // Calculate: {
                //     Discount: '',
                //     money: '',
                //     Getmoney: '',
                //     Refund: ''
                //
                // },
                // tableDate: {
                //     ID: this.formProduct.id,
                //     Item: this.formProduct.name,
                //     Type: this.formProduct.cateName,
                //     Unit: '1',
                //     Price: '1'
                //
                // },
                dialogFormVisible: false,
            }
        },
        created:function () {
            conDB.connect(function (err) {
                if (err) {
                    console.log(err.code);
                    console.log(err.fatal);
                }
            });
            // con.end();
            //this.getMember(8850161160851);
        },
        // mounted:function(){
        //     console.log(formInline,"test")
        // },
        // watch:{
        //     ketGet:function(val){
        //         this.getMember(val)
        //     }
        // },

        methods: {
            getProductbyBarcode(bc){
                let vm = this;
                let $query = 'SELECT p.id,p.name,p.barcode,p.price,p.unit,c.name as cateName FROM product p INNER JOIN category c ON p.category_id = c.id WHERE barcode = ? ';
                conDB.query($query,[bc], function (err, rows) {
                    if (err) {
                        console.log("An error occurred performing the query.");
                        console.log(err);
                        return;
                    }
                    let data = JSON.parse(JSON.stringify(rows));
                    vm.formProduct = data;
                    console.log("Query successfully executed", rows, data);
                });
            },
             getMember(ssn) {
                let vm = this;
                let $query = 'SELECT c.firstname,r.name AS rankName FROM customer c INNER JOIN customerrank r ON c.rank_id = r.id WHERE ssn = ? ';
                 conDB.query($query,[ssn], function (err, rows) {
                    if (err) {
                        console.log("An error occurred performing the query.");
                        console.log(err);
                        return;
                    }
                    let data = JSON.parse(JSON.stringify(rows));
                     vm.formCUS = data[0];
                    console.log("Query successfully executed", rows, data);
                });
            },
            async selectM(){
                let vm = this ;
                console.log(vm.keyGet);
                await vm.getMember(vm.keyGet);
                await console.log(vm.formCUS,"ggggggg");

            },
            async selectP(){
                let vm = this ;
                await vm.getProductbyBarcode(vm.formPID);
                //await vm.formProduct.unit = 1
                await vm.Psell.push(vm.formProduct);

                console.log(vm.Psell);
            }
        }
    }


</script>

<style scoped>
    el-footer {
        position: fixed;
        bottom: 0;
        width: 100%;
        background-color: black;
        color: aquamarine;
        text-align: center;
        line-height: 60px;


    }
</style>