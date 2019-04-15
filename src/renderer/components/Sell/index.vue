<template>
    <el-card>
        <el-container>
            <el-main >
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item label="รหัสลูกค้า">
                        <el-input v-model="formInline.No" ></el-input>
                    </el-form-item>
                    <el-form-item label="ชื่อลูกค้า">
                        <el-input v-model="formInline.Name" ></el-input>
                    </el-form-item>
                    <el-form-item label="ระดับ">
                        <el-input v-model="formInline.Rank" ></el-input>
                    </el-form-item>
                    <el-form-item >
                        <el-input placeholder="0.00" v-model="input"></el-input>
                    </el-form-item>
                    <el-form :inline="true" :model="Calculate" class="demo-form-inline" style="margin-left: 150px">
                        <el-form-item label="ส่วนลด">
                            <el-input v-model="formInline.Discount" ></el-input>
                        </el-form-item>
                        <el-form-item label="รับเงิน">
                            <el-input v-model="formInline.Getmoney" ></el-input>
                        </el-form-item>
                        <el-form-item label="เงินทอน">
                            <el-input v-model="formInline.Refund" ></el-input>
                        </el-form-item>
                    </el-form>

                </el-form>
                <el-form style="margin-left: 200px">
                    <el-table
                            :data="tableData"
                            border
                            style="width: 75%" >
                        <el-table-column
                                prop="ID"
                                label="ID"
                                width="100">
                        </el-table-column>
                        <el-table-column
                                prop="Item"
                                label="รายการ"
                                width="280">
                        </el-table-column>
                        <el-table-column
                                prop="Type"
                                label="Type"
                                width="130">
                        </el-table-column>
                        <el-table-column
                                prop="Unit"
                                label="Unit"
                                width="50">
                        </el-table-column>
                        <el-table-column
                                prop="Price"
                                label="Price"
                                width="70">
                        </el-table-column>
                    </el-table>
                </el-form>

            </el-main>

            <el-footer>
                <el-form style="margin-left: 500px">
                    <el-button  type="primary" @click="submitForm(productForm)">คิดเงิน</el-button>
                </el-form>

            </el-footer>

        </el-container>
    </el-card>
</template>

<script>
    export default {
        data() {
            return {
                formInline:{
                    No:'',
                    Name:'',
                    Rank:'',
                    input:''
                },
                Calculate:{
                    Discount:'',
                    Getmoney:'',
                    Refund:''

                },
                tableDate:{
                    ID:'',
                    Item:'',
                    Type:'',
                    Unit:'',
                    Price:''

                }
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