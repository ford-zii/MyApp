<template>
    <el-row>
        <el-col :span="8"  :offset="9">
            <el-card :body-style="{ padding: '0px' }">
                <img src="https://www.thedailymash.co.uk/wp-content/uploads/40-something-man-2-1.jpg" class="image" width="350" height="250">
                <div style="padding: 14px;">
                    <el-col :offset="5">
                            <span>{{this.staff[0].First_name}}</span><br/>
                            <span>ID: 567890</span>
                        <div class="bottom clearfix">
                            <el-button type="text" class="button">edit</el-button>
                        </div>
                    </el-col>
                </div>
            </el-card>
        </el-col>

        <el-col :offset="6" style="margin: 200px 200px 300px 500px" >

                <el-button type="success" round @click="goregisterStaff()">Register</el-button>
        </el-col>
    </el-row>



</template>

<script>
    export default {
        data() {
            return {
                currentDate: new Date(),
                staff: []
            };
        },
        async created() {
            conDB.connect(function (err) {
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
        methods: {
            getPro: function (callback) {
                let $query = 'SELECT * FROM `users` ';
                conDB.query($query, function (err, rows) {
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
                console.log(row.ID);
                this.getDelete(row.ID);
            },
            goregisterStaff(){
                this.$router.push({name:"registerStaff"})
            }


        }
    }
</script>

<style scoped>

</style>