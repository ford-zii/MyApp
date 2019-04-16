<template>
    <el-card>
        <el-container>
            <el-main >
                <el-form :inline="true" :model="formInline" :span="6" :offset="3" class="demo-form-inline">
                    <el-form-item label="รหัสลูกค้า">
                        <el-input v-model="formInline.No" ></el-input>
                    </el-form-item>
                    <el-form-item label="ชื่อลูกค้า">
                        <el-input v-model="formInline.Name" ></el-input>
                    </el-form-item>
                    <el-form-item label="ระดับ">
                        <el-input v-model="formInline.Rank" ></el-input>
                    </el-form-item>
                    
                    <el-table
                            :data="this.loadData(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
                                style= "width: 70% ">
                            <el-table-column
                                    prop="ID"
                                    label="ID">
                            </el-table-column>
                            <el-table-column
                                    prop="Item"
                                    label="รายการ">

                            </el-table-column>
                            <el-table-column
                                    prop="Type"
                                    label="Type">

                            </el-table-column>
                            <el-table-column
                                    prop="Unit"
                                    label="Unit">

                            </el-table-column>
                            <el-table-column
                                    prop="Price"
                                    label="Price">

                            </el-table-column>
                    </el-table>

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


                </el-form>


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
                formInline: {
                    No: '',
                    Name: '',
                    Rank: '',

                },
                Calculate: {
                    Discount: '',
                    money: ' ',
                    Getmoney: '',
                    Refund: ''

                },
                tableDate: {
                    ID: '',
                    Item: '',
                    Type: '',
                    Unit: '',
                    Price: ''

                }
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
            console.log(this.loadData, " sellproduct ");

            // con.end();
        },
        methods: {
            loadData() {
                let vm = this;
                let $query = 'SELECT * FROM `sellproduct` ';
                conDB.query($query, function (err, rows) {
                    if (err) {
                        console.log("An error occurred performing the query.");
                        console.log(err);
                        return;
                    }
                    let data = JSON.parse(JSON.stringify(rows));
                    vm.staff = data;
                    console.log("Query successfully executed", rows, data);
                });
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