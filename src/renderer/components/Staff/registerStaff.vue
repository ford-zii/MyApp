<template>
    <el-form>
    <el-col style="margin: 100px 600px 50px 350px">
        <h1> <span> REGISTER STAFF </span></h1>
    </el-col>
    <!--กรอกข้อมูล-->
    <el-row :gutter="50" >
        <el-col :span="10" style="margin-left: 80px"><div class="grid-content bg-purple"></div>
            <el-input placeholder="Firstname" v-model="first" ></el-input>
        </el-col>
        <el-col :span="10"><div class="grid-content bg-purple-light" ></div>
            <el-input placeholder="Lastname" v-model="last"></el-input>
        </el-col>
    </el-row>
    <el-col :span="16" style="margin-left: 130px"><div class="grid-content bg-purple"></div>
        <el-input placeholder="ID" v-model="id"  style="margin-top: 20px"> </el-input>
    </el-col>
    <el-col :span="16" style="margin-left: 130px"><div class="grid-content bg-purple"></div>
        <el-input placeholder="telephone number" v-model="phone" style="margin-top: 20px"></el-input>
    </el-col>
    <el-col :span="16" style="margin-left: 130px"
                prop="email"
                label="Email"
                :rules="[
      { required: true, message: 'Please input email address', trigger: 'blur' },
      { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
    ]"
        ><el-input placeholder="Email" v-model="email" style="margin-top: 20px"></el-input><div class="grid-content bg-purple"></div>
    </el-col>
    <el-col :span="16" style="margin-left: 130px"><div class="grid-content bg-purple"></div>
            <el-input placeholder="Password" type="password" v-model="pass" autocomplete="off" style="margin-top: 20px">></el-input>
     </el-col>
    <el-col :span="16" style="margin-left: 130px"><div class="grid-content bg-purple"></div>
            <el-input placeholder="Check Password" type="password" v-model="checkPass" autocomplete="off" style="margin-top: 20px">></el-input>
    </el-col>
    <el-col style="margin: 20px 130px"> SEX
                <el-radio v-model="sex" label="1">Male</el-radio>
                <el-radio v-model="sex" label="2">Female</el-radio>
    </el-col>
    <el-col :span="16" style="margin: 20px  130px"><div class="grid-content bg-purple"></div>
            <el-button type="success" round @click="goStaff()">SAVE</el-button>
            <el-button round @click="goStaff()">CANCEL</el-button>
    </el-col>
    </el-form>
</template>
<script>

    export default {
        data() {
            return {

                first: '',
                last: '',
                id: '',
                phone: '',
                email: '',
                pass: '',
                checkPass: '',
                sex: '',

            };
        },
            async created() {
                con.connect(function (err) {
                    if (err) {
                        console.log(err.code);
                        console.log(err.fatal);
                    }
                });
                let vm = this;
                this.getPro(function (rows) {
                    vm.staff = rows
                });

                // console.log(this.getPro);
                console.log(this.staff,"member ");

                // con.end();
            },

        methods :{
            getPro: function (callback) {
                let $query = 'SELECT * FROM `staff` ';
                con.query($query, function (err, rows) {
                    if (err) {
                        console.log("An error ocurred performing the query.");
                        console.log(err);
                        return;
                    }
                    let data = JSON.parse(JSON.stringify(rows));
                    callback(data);
                    console.log("Query succesfully executed", rows, data);
                });
            },
            getDelete(res) {
                console.log(res);
                let $query = "DELETE FROM user WHERE id = ?";
                con.query($query, [res], function (err, rows) {
                    if (err) {
                        console.log("An error ocurred performing the query.");
                        console.log(err);
                        return;
                    }
                    // res.sent(rows);
                    console.log("Delete succesfully executed.", rows);
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
            handleDelete(index, row) {
                // console.log(index,row);
                console.log(row.ID);
                this.getDelete(row.ID);
            },
            goStaff() {
                this.$router.push({name: "staff"})
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
</style>