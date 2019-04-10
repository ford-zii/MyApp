    <template  >
        <el-col >
        <!--ชื่อหัวเรื่อง-->
        <el-col style="margin: 100px 600px 50px 450px">
            <h1> <span>REGISTER MEMBER </span></h1>
        </el-col>

        <!--กรอกข้อมูล-->
        <el-form ref="form" :model="formCUS" label-width="120px" style="margin: 100px 50px 100px 40px">
            <el-col :span="16" :offset="3" >
                <el-form-item  prop="Cus_name" >
                    <el-input placeholder="Name" v-model="formCUS.Cus_name"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="16" :offset="3">
                <el-form-item  prop="Cus_address">
                    <el-input placeholder="Address" v-model="formCUS.Cus_address"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="16" :offset="3">
                <el-form-item  prop="Contact_no">
                    <el-input placeholder="Contact" v-model="formCUS.Contact_no" ></el-input>
                </el-form-item>
            </el-col>

            <el-col :span="16" :offset="4" >
                <el-form-item style="margin: 50px 160px ">
                    <el-button type="success" round  @click="submitForm(formCUS)">SAVE</el-button>
                    <el-button type="danger" round @click="cancelForm()">CANCEL</el-button>
                </el-form-item>
            </el-col>
        </el-form>


        <!--&lt;!&ndash;เลือกเพศ&ndash;&gt;-->

        <!--<el-col style="margin:  20px 400px" > Sex :-->
            <!--<el-radio v-model="radio" label="1">Male</el-radio>-->
            <!--<el-radio v-model="radio" label="2">Female</el-radio>-->
        <!--</el-col>-->


        <!--&lt;!&ndash;เลือกระดับ&ndash;&gt;-->
        <!--<div style="margin: 160px 100px 10px 350px">-->
            <!--<el-checkbox-group v-model="checkboxGroup2" size="medium">-->
                <!--<el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>-->
            <!--</el-checkbox-group>-->
        <!--</div>-->
        <!--&lt;!&ndash;ปุ่ม&ndash;&gt;-->
        <!--<br/>-->
    
    </el-col>

</template>

<script>
    const Customerlevel = ['SILVER', 'GOLD', 'PLATINUN'];
    export default {
        data() {
            return {
                formCUS:{
                    rankID:1,
                    Cus_name:"",
                    Cus_address:"",
                    Contact_no:""
                },
            }
        },
        methods :{
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
    body{
        background-color: powderblue;
        background-size: cover;
    }
</style>