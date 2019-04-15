<template>
    <el-card>
        <el-container>
            <el-header>
                <h1> <span class="Text" style="..."> REGISTER STAFF </span></h1>
            </el-header>
            <el-main>
                <el-form :model="formStaff">
                    <el-col :span="16" :offset="3">
                        <el-form-item  prop="Username">
                            <el-input placeholder="Username" v-model="formStaff.username"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="16" :offset="3">
                        <el-form-item  prop="Password">
                            <el-input placeholder="Password" v-model="formStaff.password" show-password></el-input>
                         </el-form-item>
                    </el-col>
                    <el-col :span="16" :offset="3">
                        <el-form-item  prop="First name">
                            <el-input placeholder="First name" v-model="formStaff.firstname" ></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="16" :offset="3">
                        <el-form-item  prop="Last name">
                            <el-input placeholder="Last name" v-model="formStaff.lastname" ></el-input>
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
                                <el-input placeholder="Email" v-model="formStaff.email"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="16" :offset="3">
                        <el-form-item prop="SEX">
                            <el-radio v-model="formStaff.sex" label="MALE"></el-radio>
                            <el-radio v-model="formStaff.sex" label="FEMALE"></el-radio>
                        </el-form-item>
                    </el-col>
                    <el-col :span="16" :offset="3">
                        <el-form-item>
                            <el-button type="success" round  @click="submitForm(formStaff)">SAVE</el-button>
                            <el-button type="danger" round @click="cancelForm()">CANCEL</el-button>
                        </el-form-item>
                    </el-col>
    <!--กรอกข้อมูล-->
    <!--<el-row :gutter="50" >-->
        <!--<el-col :span="10" style="margin-left: 80px"><div class="grid-content bg-purple"></div>-->
            <!--<el-input placeholder="Firstname" v-model="first" ></el-input>-->
        <!--</el-col>-->
        <!--<el-col :span="10"><div class="grid-content bg-purple-light" ></div>-->
            <!--<el-input placeholder="Lastname" v-model="last"></el-input>-->
        <!--</el-col>-->
    <!--</el-row>-->
    <!--<el-col :span="16" style="margin-left: 130px"><div class="grid-content bg-purple"></div>-->
        <!--<el-input placeholder="ID" v-model="id"  style="margin-top: 20px"> </el-input>-->
    <!--</el-col>-->
    <!--<el-col :span="16" style="margin-left: 130px"><div class="grid-content bg-purple"></div>-->
        <!--<el-input placeholder="telephone number" v-model="phone" style="margin-top: 20px"></el-input>-->
    <!--</el-col>-->


    <!--<el-col :span="16" style="margin-left: 130px"><div class="grid-content bg-purple"></div>-->
            <!--<el-input placeholder="Password" type="password" v-model="pass" autocomplete="off" style="margin-top: 20px">></el-input>-->
     <!--</el-col>-->
    <!--<el-col :span="16" style="margin-left: 130px"><div class="grid-content bg-purple"></div>-->
            <!--<el-input placeholder="Check Password" type="password" v-model="checkPass" autocomplete="off" style="margin-top: 20px">></el-input>-->
    <!--</el-col>-->
    <!--<el-col style="margin: 20px 130px"> SEX-->
                <!--<el-radio v-model="sex" label="1">Male</el-radio>-->
                <!--<el-radio v-model="sex" label="2">Female</el-radio>-->
    <!--</el-col>-->
    <!--<el-col :span="16" style="margin: 20px  130px"><div class="grid-content bg-purple"></div>-->
            <!--<el-button type="success" round @click="goStaff()">SAVE</el-button>-->
            <!--<el-button round @click="goStaff()">CANCEL</el-button>-->
    <!--</el-col>-->
                </el-form>
            </el-main>
        </el-container>
    </el-card>

</template>
<script>


    export default {
        data() {
            return {
                formStaff:{
                    username:'',
                    password:'',
                    firstname:'',
                    lastname:'',
                    email:'',
                    sex:''

                },
            }
        },
        created ()
        {
            console.log("in Created")

        }   ,

        methods :{
            createStaff (form) {
                console.log(form);
                let $query = "INSERT INTO user SET ?";
                conDB.query($query,[form],function (err,rows) {
                    if (err) {
                        console.log("createCUS error occurred performing the query.");
                        console.log(err);
                        return;
                    }
                    // res.sent(rows);
                    console.log("createCUS successfully executed.",rows);
                });
            },
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            handleEdit(index, row) {

            },


            cancelForm() {
                this.$router.push({name:"Staff"});
            },
            async submitForm(form) {
                console.log("submit Action");
                await this.createStaff(form);
                await this.$swal('REGISTER SUCCESS');
                this.$router.push({name: "Staff"})



            }
        },
        rules2: {
            pass: [
                { validator: validatePass, trigger: 'blur' }
            ],
            checkPass: [
                { validator: validatePass2, trigger: 'blur' }
            ],


        }

    };
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('Please input the password'));
            } else {
                if (this.Form.checkPass !== '') {
                    this.$refs.Form.validateField('checkPass');
                }
                callback();
            }

    };
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('Please input the password again'));
            } else if (value !== this.Form.pass) {
                callback(new Error('Two inputs don\'t match!'));
            } else {
                callback();
            };

    }
</script>
<style scoped>

    .Text{
        font-size: 20px;
        text-align: center;

    }


</style>