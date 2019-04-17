<template>
    <el-card>
        <el-container>
            <el-header>

                    <el-input v-model="ketGet" @change="selectM()"></el-input>

                <!--<el-input v-model="formInline.firstname" ></el-input>-->
                <!--<el-input v-model="formInline.rank_id" ></el-input>-->
            </el-header>
            <el-main >
                <el-form  :inline="true"  ref="formInline" class="demo-form-inline">

                    <!--<el-form-item label="ชื่อลูกค้า">-->

                    <!--</el-form-item>-->
                    <!--<el-form-item label="ระดับ">-->

                    <!--</el-form-item>-->
                </el-form>
                    <!--<el-form-item label="รหัสสินค้า">-->
                        <!--<el-input v-model="formInline.product" ></el-input>-->
                    <!--</el-form-item>-->
                    <!---->
                    <!--<el-table-->
                            <!--:data="this.loadData(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"-->
                                <!--style= "width: 50% ">-->
                            <!--<el-table-column-->
                                    <!--prop="ID"-->
                                    <!--label="ID">-->
                            <!--</el-table-column>-->
                            <!--<el-table-column-->
                                    <!--prop="Item"-->
                                    <!--label="รายการ">-->

                            <!--</el-table-column>-->
                            <!--<el-table-column-->
                                    <!--prop="Type"-->
                                    <!--label="Type">-->

                            <!--</el-table-column>-->
                            <!--<el-table-column-->
                                    <!--prop="Unit"-->
                                    <!--label="Unit">-->

                            <!--</el-table-column>-->
                            <!--<el-table-column-->
                                    <!--prop="Price"-->
                                    <!--label="Price">-->

                            <!--</el-table-column>-->
                    <!--</el-table>-->

                    <el-form :inline="true" :model="Calculate" class="demo-form-inline"  >


                        <el-col :span="5" :offset="17" >
                        <el-form-item >ส่วนลด
                            <el-input placeholder="0.00"  v-model="formInline.Discount" ></el-input>
                        </el-form-item>
                        </el-col>

                        <el-col :span="5" :offset="17" >
                        <el-form-item >จำนวนเงิน
                            <el-input placeholder="0.00" v-model="formInline.money"></el-input>
                        </el-form-item>
                        </el-col>

                        <el-col :span="5" :offset="17">
                        <el-form-item >รับเงิน
                            <el-input placeholder="0.00"  v-model="formInline.Getmoney" ></el-input>
                        </el-form-item>
                        </el-col>

                        <el-col :span="5" :offset="17" >
                        <el-form-item >เงินทอน
                            <el-input placeholder="0.00"  v-model="formInline.Refund" ></el-input>
                        </el-form-item>
                        </el-col>
                    </el-form>
            </el-main>

            <el-footer >
                <el-form style="margin-left: 350px">
                    <el-button  type="warning"  style="background-color: #f4736b" @click="submitForm(productForm)">คิดเงิน</el-button>
                </el-form>

            </el-footer>


            <el-dialog title="Members"  :visible.sync="dialogFormVisible">
                <el-card>
                    <el-form >
                        <el-col :span="16" :offset="3" >
                            <el-form-item  prop="firstname">
                                <el-input placeholder="First name" v-model="formCUS.firstname"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="16" :offset="3" >
                            <el-form-item  prop="lastname" >
                                <el-input placeholder="Last name" v-model="formCUS.lastname"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="16" :offset="3">
                            <el-form-item  prop="address">
                                <el-input
                                        placeholder="Address"
                                        v-model="formCUS.address"
                                        type="textarea"
                                        :autosize="{ minRows: 4, maxRows: 6}"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="16" :offset="3">
                            <el-form-item  prop="contact">
                                <el-input placeholder="Contact" v-model="formCUS.contact" ></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="16" :offset="3">
                            <el-form-item
                                    prop="email"
                                    :rules="[
                            { required: true, message: 'Please input email address', trigger: 'blur' },
                            { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
                            ]"
                            >
                                <el-input placeholder="Email" v-model="formCUS.email"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="16" :offset="3">
                            <el-form-item
                                    prop="ssn"
                                    :rules="[
                            { required: true, message: 'Please input ID card number', trigger: 'blur' },
                            { type: 'ssn', message: 'Please input correct ID card number', trigger: ['blur', 'change' ]}
                            ]"
                            >
                                <el-input placeholder="ID Card Number" v-model="formCUS.ssn"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="16" :offset="3">
                            <el-form-item>
                                <el-radio v-model="formCUS.rank_id" label="1">SILVER</el-radio>
                                <el-radio v-model="formCUS.rank_id" label="2">GOLD</el-radio>
                                <el-radio v-model="formCUS.rank_id" label="3">PLATINUM</el-radio>
                            </el-form-item>
                        </el-col>
                        <!--<el-col :span="16" :offset="3" >-->
                        <!--<el-form-item>-->
                            <!--<el-button type="success" round  @click="submitForm(formCUS)">SAVE</el-button>-->
                            <!--<el-button type="danger" round @click="cancelForm()">CANCEL</el-button>-->
                        <!--</el-form-item>-->
                    <!--</el-col>-->
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
                ketGet:'',
                formCUS:[],
                formInline:[],
                Calculate: {
                    Discount: '',
                    money: '',
                    Getmoney: '',
                    Refund: ''

                },
                tableDate: {
                    ID: '',
                    Item: '',
                    Type: '',
                    Unit: '',
                    Price: ''

                },
                dialogFormVisible: false,
            }
        },
        mounted:function () {
            conDB.connect(function (err) {
                if (err) {
                    console.log(err.code);
                    console.log(err.fatal);
                }
            });
            // con.end();
            this.getMember(8850161160851);
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
             getMember(ssn) {
                let vm = this;
                let $query = 'SELECT * FROM `customer` WHERE ssn = ? ';
                 conDB.query($query,[ssn], function (err, rows) {
                    if (err) {
                        console.log("An error occurred performing the query.");
                        console.log(err);
                        return;
                    }
                    let data = JSON.parse(JSON.stringify(rows));
                     vm.formCUS = data;
                    console.log("Query successfully executed", rows, data);
                });
            },
            async selectM(){
                let vm = this ;
                await vm.getMember(this.ketGet);

                await console.log(vm.formInline,"ggggggg");
                 this.dialogFormVisible = true;
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