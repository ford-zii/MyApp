<template>
    <el-card>
        <el-container>
            <!--<el-header>-->

            <!--</el-header>-->
            <el-main >

                    <el-col :sm="6" :md="8" :xl="10" :offset="14" >
                        <span v-text="currentTime"></span>
                         <span v-text="DMY"></span>
                        <el-divider direction="vertical" ></el-divider>
                        <span v-text="Total" style="color: lime;font-size: 80px"></span>
                    </el-col>



                    <el-col :xl="24" :md="18">
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

                        </el-form>
                    </el-col>



                    <el-col :xs="24">
                        <el-form :inline="true">
                            <el-form-item label="รหัสสินค้า">
                                <el-input v-model="formPID" @change="selectP()"></el-input>
                            </el-form-item>
                            <el-form-item label="จำนวน">
                                <el-input v-model="Pcont" ></el-input>
                            </el-form-item>
                        </el-form>
                    </el-col>


                    <el-col :xl="20" :md="18">
                        <el-table
                                :data="this.Psell"
                                style="width: 100%"
                                :row-class-name="tableRowClassName"
                                height="640">
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
                                    prop="price"
                                    label="Price">

                            </el-table-column>
                            <el-table-column
                                    prop="unit"
                                    label="Unit">

                            </el-table-column>
                            <el-table-column
                                    prop="Ptotal"
                                    label="Total">
                            </el-table-column>
                            <el-table-column>
                                <template slot-scope="scope">
                                    <el-button type="danger" icon="el-icon-delete" circle @click="handleDelete(scope.$index, scope.row)"></el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-col>
                    <el-col :xl="3" :md="5" :offset="1">
                        <el-form :inline="true" :model="Calculate" class="demo-form-inline"  >

                                <el-form-item >จำนวนเงิน
                                    <el-input placeholder="0.00" v-model="Calculate.money" :disabled="true"></el-input>
                                </el-form-item>


                                <el-form-item >รับเงิน
                                    <el-input placeholder="0.00"  v-model="Calculate.Getmoney" ></el-input>
                                </el-form-item>

                                <el-form-item >เงินทอน
                                    <el-input placeholder="0.00"  v-model="Calculate.Refund" ></el-input>
                                </el-form-item>

                        </el-form>
                    </el-col>


            </el-main>

            <!--<el-footer >-->
                <!--<el-form style="margin-left: 350px">-->
                    <!--<el-button  type="warning"  style="background-color: #f4736b" @click="submitForm(productForm)">คิดเงิน</el-button>-->
                <!--</el-form>-->

            <!--</el-footer>-->

        </el-container>
    </el-card>
</template>

<script>
    export default {
        data() {
            return {
                currentTime: null,
                DMY:null,
                keyGet:'',
                formCUS:[],
                formPID:'',
                formProduct:{Ptotal:0},
                Total :0,
                Psell:[],
                Pcont: '1',

                Calculate: {
                    Discount: '',
                    money: '',
                    Getmoney: '',
                    Refund: ''

                },

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

            this.currentTime = moment().format('LTS');
            this.DMY = moment().format('L');
            setInterval(() => this.updateCurrentTime(), 1 * 1000);
            // con.end();
            //this.getMember(8850161160851);
        },
         mounted:function(){

         },

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
                    vm.formProduct = data[0];
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
                vm.formProduct.unit = vm.Pcont;
                vm.formProduct.Ptotal = vm.Pcont * vm.formProduct.price;
                vm.Total = vm.Total + vm.formProduct.Ptotal ;
                await vm.Psell.push(vm.formProduct);
                this.formPID = '';
                console.log(vm.Psell);
            },
            tableRowClassName({row, rowIndex}) {
                return 'warning-row';
            },
            updateCurrentTime() {
                this.currentTime = moment().format('LTS');
            },
            handleChange(value) {
                console.log(value)
                //this.Psell[index].unit = value;
            },
            async handleDelete(index, row) {
                console.log(row.id,index);
                this.Psell.splice (index,1);
                console.log(this.Psell,"test")
            },
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