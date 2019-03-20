<template>
    <el-col  >
        <!--ชื่อหัวเรื่อง-->
        <el-col style="margin: 100px 600px 50px 350px">
            <h1> <span>REGISTER MEMBER </span></h1>
        </el-col>
        <!--กรอกข้อมูล-->
        <el-row :gutter="50" >
            <el-col :span="10" style="margin-left: 80px"><div class="grid-content bg-purple"></div>
                <el-input placeholder="firstname" v-model="input1" ></el-input>
            </el-col>
            <el-col :span="10"><div class="grid-content bg-purple-light" ></div>
                <el-input placeholder="lastname" v-model="input2"></el-input>
            </el-col>
        </el-row>
        <el-col :span="16" style="margin-left: 130px"><div class="grid-content bg-purple"></div>
            <el-input placeholder="ID" v-model="input3"  style="margin-top: 20px"> </el-input>
        </el-col>
        <el-col :span="16" style="margin-left: 130px"><div class="grid-content bg-purple"></div>
            <el-input placeholder="telephone number" v-model="input4" style="margin-top: 20px"></el-input>
        </el-col>

        <!--เลือกเพศ-->

        <el-col style="margin:  20px 400px" > Sex :
            <el-radio v-model="radio" label="1">Male</el-radio>
            <el-radio v-model="radio" label="2">Female</el-radio>
        </el-col>


        <!--เลือกระดับ-->
        <div style="margin: 160px 100px 10px 350px">
            <el-checkbox-group v-model="checkboxGroup2" size="medium">
                <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
            </el-checkbox-group>
        </div>
        <!--ปุ่ม-->
        <br/>
        <el-row style="margin-left: 400px">
            <el-button type="success" round  @click="goMember()">SAVE</el-button>
            <el-button type="danger" round @click="goMember2()">CANCEL</el-button>
        </el-row>



    </el-col>

</template>

<script>
    const Customerlevel = ['SILVER', 'GOLD', 'PLATINUN'];
    export default {
        data() {
            return {
                input1: '',
                input2: '',
                input3: '',
                input4: '',
                radio: '',
                checkboxGroup1: [ ],
                checkboxGroup2: [ ],
                checkboxGroup3: [ ],
                cities:Customerlevel

            }
        },
        methods :{
            goMember() {
                this.$router.push({name:"Member"})
            },
            goMember2(){
                this.$router.push({name:"Member"})
            }

        }

    }

</script>

<style scoped>

</style>