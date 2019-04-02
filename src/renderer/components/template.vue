<template>
    <el-row class="tac">
        <el-col :span="4">
            <el-menu
                    default-active="1"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose">
                <el-menu-item index="1" @click="goMember()">
                    <i class="el-icon-location"></i>
                    <span>Member</span>
                </el-menu-item>
                <el-menu-item index="2" @click="goProduct()">
                    <i class="el-icon-menu"></i>
                    <span>Product</span>
                </el-menu-item>
                <el-menu-item index="3" @click="goStaff()">
                    <font-awesome-icon icon="coffee" />
                    <i class="el-icon-document"></i>
                    <span>Staff</span>
                </el-menu-item>
                <el-menu-item index="4" @click="goSell()">
                    <font-awesome-icon icon="tags" />
                    <i class="el-icon-goods"></i>
                    <span>Sell</span>
                </el-menu-item>
                <el-menu-item index="5" @click="logout()">
                    <font-awesome-icon icon="sign-out" />

                    <!--<i class="el-icon-goods"></i>-->
                    <span>Logout</span>
                </el-menu-item>
            </el-menu>
        </el-col>
        <el-col :span="20">
        <router-view></router-view>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name:'marketTM',
        methods:{
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            goMember(){
                this.$router.push({name:"Member"})
            },
            goProduct(){
                this.$router.push({name:"Product"})
            },
            goStaff(){
                this.$router.push({name:"Staff"})
            },
            goSell(){
                this.$router.push({name:"sell"})
            },
            logout(){
                this.$router.push({name:"Login"})
            }
        }
    }

</script>

<style scoped>

</style>
