<template  >
    <el-card>
        <el-container>
            <el-header>
                <h1> <span>REGISTER MEMBER </span></h1>
            </el-header>
            <el-main>
                <!--กรอกข้อมูล-->
                    <el-form ref="form" :model="formCUS" label-width="120px" >
                        <el-col :span="16" :offset="3" >
                            <el-form-item  prop="Cus_name" >
                                <el-input placeholder="Firstame" v-model="formCUS.firstname"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="16" :offset="3" >
                            <el-form-item  prop="Cus_name" >
                                <el-input placeholder="Lastname" v-model="formCUS.lastname"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="16" :offset="3">
                            <el-form-item  prop="Cus_address">
                                <el-input placeholder="Address" v-model="formCUS.address"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="16" :offset="3">
                            <el-form-item  prop="Contact_no">
                                <el-input placeholder="Contact" v-model="formCUS.contact" ></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="16" :offset="3">
                            <el-form-item>
                                <el-radio v-model="formCUS.rank_id" label="1">Option A</el-radio>
                                <el-radio v-model="formCUS.rank_id" label="2">Option B</el-radio>
                                <el-radio v-model="formCUS.rank_id" label="3">Option C</el-radio>
                            </el-form-item>
                        </el-col>

                        <el-col :span="16" :offset="4" >
                            <el-form-item style="margin: 50px 160px ">
                                <el-button type="success" round  @click="submitForm(formCUS)">SAVE</el-button>
                                <el-button type="danger" round @click="cancelForm()">CANCEL</el-button>
                            </el-form-item>
                        </el-col>
                    </el-form>

            </el-main>
        </el-container>
    </el-card>
</template>

<script>
    const Customerlevel = ['SILVER', 'GOLD', 'PLATINUN'];
    export default {
        data() {
            return {
                formCUS:{
                    firstname:"",
                    lastname:"",
                    address:"",
                    contact:"",
                    rank_id:""
                },
                rank:[]
            }
        },
        methods :{
            getRank () {
                let vm = this;
                let $query = 'SELECT * FROM `rank` ';
                conDB.query($query, function (err, rows) {
                    if (err) {
                        console.log("An error ocurred performing the query.");
                        console.log(err);
                        return;
                    }
                    let data = JSON.parse(JSON.stringify(rows));
                    vm.rank = data;
                    // callback(data);
                    console.log("Query succesfully executed", rows, data);
                });
            },
            createCustomer (form) {
                console.log(form);
                let $query = "INSERT INTO customer SET ?";
                conDB.query($query,[form],function (err,rows) {
                    if (err) {
                        console.log("createCUS error ocurred performing the query.");
                        console.log(err);
                        return;
                    }
                    // res.sent(rows);
                    console.log("createCUS succesfully executed.",rows);
                });
            },
            cancelForm() {
                this.$router.push({name:"Member"})
            },
            submitForm(form){
                this.createCustomer(form);
                this.$router.push({name:"Member"});
            }

        }

    }

</script>

<style >

</style>