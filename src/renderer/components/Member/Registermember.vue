<template  >
    <el-card>
        <el-container>
            <el-header >
                <h1> <span >REGISTER MEMBER </span><font-awesome-icon icon="user-plus" size="2x"/></h1>
            </el-header>
            <el-main>
                <!--กรอกข้อมูล-->
                    <el-form :model="formCUS">
                        <el-col :span="16" :offset="3">
                            <el-form-item :min="1" :max="13"
                                          prop="ssn"
                                          :rules="[
                            { required: true, message: 'Please input ID card number', trigger: 'blur' },
                            { type: 'number', message: 'Please input correct ID card number', trigger: ['blur', 'change' ]}
                            ]"
                            >
                                <el-input placeholder="ID Card Number" v-model.number="formCUS.ssn" :maxlength="13"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="16" :offset="3" >
                            <el-form-item  prop="firstname" >
                                <el-input placeholder="First name" v-model="formCUS.firstname"></el-input>

                            </el-form-item>
                        </el-col>
                        <el-col :span="16" :offset="3" >
                            <el-form-item  prop="lastname" >
                                <el-input placeholder="Last name" v-model="formCUS.lastname"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="16" :offset="3">
                            <el-form-item prop="SEX">
                                <el-radio v-model="formCUS.sex" label="MALE"></el-radio>
                                <el-radio v-model="formCUS.sex" label="FEMALE"></el-radio>
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
                            <el-form-item
                                    prop="contact"
                                    :rules="[
                            { required: true, message: 'Please input contact', trigger: 'blur' },
                            { type: 'string',message: 'Please input contact', trigger: ['blur', 'change'] }
                            ]"
                            >
                                <el-input placeholder="Contact" v-model="formCUS.contact" :maxlength="10"></el-input>
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
                            <el-form-item>
                                <el-radio v-model="formCUS.rank_id" label="1">SILVER</el-radio>
                                <el-radio v-model="formCUS.rank_id" label="2">GOLD</el-radio>
                                <el-radio v-model="formCUS.rank_id" label="3">PLATINUM</el-radio>
                            </el-form-item>
                        </el-col>
                        <el-col :span="16" :offset="3" >
                            <el-form-item>
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
    const Customerlevel = ['SILVER', 'GOLD', 'PLATINUM'];
    export default {
        data() {
            return {
                formCUS: {
                    rank_id: '',
                    firstname: '',
                    lastname: '',
                    address: '',
                    contact: '',
                    email: null,
                    sex: '',
                    ssn: ''

                },

            }

        },
        methods: {
            createCustomer(form) {
                console.log(form);
                let $query = "INSERT INTO customer SET ?";
                conDB.query($query, [form], function (err, rows) {
                    if (err) {
                        console.log("createCUS error occurred performing the query.");
                        console.log(err);
                        return;
                    }
                    // res.sent(rows);
                    console.log("createCUS successfully executed.", rows);
                });

            },
            cancelForm() {
                this.$router.push({name: "Member"})
            },
            async submitForm(form) {
                await this.createCustomer(form);
                await this.$swal('submit!');
                //this.createCustomer(form);
                this.$router.push({name: "Member"});

            },

        }
    }




</script>

<style scoped >

</style>