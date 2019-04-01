<template>
    <el-row >
        <el-form :model="sellForm" ref="sellForm" label-width="120px" class="demo-ruleForm">
            <el-col :span="8" :offset="3">
                <el-form-item label="รหัสลูกค้า" prop="CustomerNo">
                    <el-input v-model="sellForm.CustomerNo"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="8">
                <el-form-item label="ชื่อ" prop="Name">
                    <el-input v-model="sellForm.Name"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="8">
                <el-form-item label="ระดับ" prop="Rank">
                    <el-input v-model="sellForm.Rank"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="16" :offset="3">
                <el-form-item label="สินค้า" prop="Product">
                    <el-input v-model="sellForm.Product"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="16" :offset="3">
                <el-form-item label="จำนวน" prop="Unit">
                    <el-input v-model="sellForm.Unit"></el-input>
                </el-form-item>
            </el-col>
        </el-form>
        <el-col :span="16" :offset="3">
            <el-form-item align="right" >

                <el-button type="primary" @click="submitForm(sellForm)">คิดเงิน</el-button>
            </el-form-item>
        </el-col>

        <el-card class="box-card">
            <div v-for="o in 4" :key="o" class="text item">
                {{<el-table-column
                        prop="productID">
                </el-table-column>
                <el-table-column
                        label="ID"
                        prop="PID">
                </el-table-column>
                <el-table-column
                        label="ชื่อ"
                        prop="name">
                </el-table-column>
                <el-table-column
                        label="ประเภท"
                        prop="Type">
                </el-table-column>
                <el-table-column
                        label="จำนวน"
                        prop="Unit">
                </el-table-column>
                <el-table-column
                        label="ราคา"
                        prop="Price">
                </el-table-column>
                <el-table-column>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">ลบสินค้า
                    </el-button>
                </el-table-column>
            </div>
        </el-card>
    </el-row>
</template>

<script>
    export default {
        comments:{
        },
        data() {
            return {
                sellForm:{
                    CustomerNo: ' ',
                    Name : ' ',
                    Rank: ' ',
                    Product: ' ',
                    Unit: ' ',
                }
            }
        }
    }

</script>

<style scoped>
    .text {
        font-size: 14px;
    }

    .item {
        padding: 18px 0;
    }

    .box-card {
        width: 480px;
    }

</style>