<template>
    <el-row>
        <!--<el-col :span="8"  :offset="9">-->
            <!--<el-card :body-style="{ padding: '0px' }">-->
                <!--<img src="https://www.thedailymash.co.uk/wp-content/uploads/40-something-man-2-1.jpg" class="image" width="350" height="250">-->
                <!--<div style="padding: 14px;">-->
                    <!--<el-col :offset="5">-->
                            <!--<span>{{this.staff[0].First_name}}</span><br/>-->
                            <!--<span>ID: 567890</span>-->
                        <!--<div class="bottom clearfix">-->
                            <!--<el-button type="text" class="button">edit</el-button>-->
                        <!--</div>-->
                    <!--</el-col>-->
                <!--</div>-->
            <!--</el-card>-->
        <!--</el-col>-->

        <!--<el-col :offset="6" style="margin: 200px 200px 300px 500px" >-->

                <!--<el-button type="success" round @click="goregisterStaff()">Register</el-button>-->
        <!--</el-col>-->

        <el-col :offset="3"  >
            <el-button type="primary" round @click="$router.push({name:'registerStaff'})"><span class="iconify" data-icon="mdi:account" data-inline="false"></span>Register</el-button>
        </el-col>
        <el-col :span="18" :offset="3">
            <el-table
                    :data="this.staff.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
                    style="width: 100%">
                <!--<el-table-column-->
                <!--label="Barcode"-->
                <!--prop="Cus_ID">-->
                <!--</el-table-column>-->
                <el-table-column
                        label="ชื่อผู้ใช้"
                        prop="Username">
                </el-table-column>
                <el-table-column
                        label="ชื่อ"
                        prop="frist_name">
                </el-table-column>
                <el-table-column
                        label="นามสกุล"
                        prop="last_name">
                </el-table-column>

                <!--<el-table-column-->
                <!--label="ประเภท"-->
                <!--&gt;-->
                <!--</el-table-column>-->
                <el-table-column
                        align="right" >
                    <template slot="header" slot-scope="scope">
                        <el-input
                                v-model="search"
                                size="mini"
                                placeholder="ค้นหา"/>
                    </template>
                    <template slot-scope="scope">
                        <!--<el-button-->
                        <!--size="mini"-->
                        <!--@click="handleEdit(scope.$index, scope.row)">Edit</el-button>-->
                        <el-button
                                size="mini"
                                type="danger"
                                @click="handleDelete(scope.$index, scope.row)">ลบข้อมูล</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-col>
    </el-row>



</template>

<script>
    export default {
        data() {
            return {
                currentDate: new Date(),
                staff: [],
                search:''
            };
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
            console.log(this.staff,"member ");

            // con.end();
        },
        methods: {
            loadData() {
                let vm = this;
                let $query = 'SELECT * FROM `users` ';
                conDB.query($query, function (err, rows) {
                    if (err) {
                        console.log("An error ocurred performing the query.");
                        console.log(err);
                        return;
                    }
                    let data = JSON.parse(JSON.stringify(rows));
                    vm.staff = data;
                    console.log("Query succesfully executed", rows, data);
                });
            },
            getDelete(res) {
                console.log(res);
                let $query = "DELETE FROM users WHERE userID = ?";
                conDB.query($query, [res], function (err, rows) {
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
                console.log(row.userID);
                this.getDelete(row.userID);
                this.loadData();
            },
            goregisterStaff(){
                this.$router.push({name:"registerStaff"})
            },
            alert() {
                this.$swal("Good job!", "You clicked the button!", "success");
            }


        }
    }
</script>

<style scoped>

</style>