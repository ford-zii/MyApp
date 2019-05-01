<template>
    <el-container >
        <el-aside width="200px"   style="background-color: rgb(238, 241, 246);height: auto ;" >
                <el-menu
                        default-active="2"
                        @open="handleOpen"
                        @close="handleClose">
                    <el-menu-item index="1" @click="goMember()">
                        <font-awesome-icon icon="address-card" size="lg" style="color: yellowgreen"/>
                        <span>Member</span>
                    </el-menu-item>
                    <el-menu-item index="2" @click="goProduct()">
                        <font-awesome-icon icon="store" size="lg" style="color: #d7c8f4"/>
                        <span>Product</span>
                    </el-menu-item>
                    <el-menu-item index="3" @click="goStaff()">
                        <font-awesome-icon icon="user" size="lg" style="color: #a8daf4" />
                        <span>Staff</span>
                    </el-menu-item>
                    <el-menu-item index @click="goSell()">
                        <font-awesome-icon icon="dollar-sign" size="2x" style="color: #f3b8d0" />
                        <!--<font-awesome-icon icon="shopping-cart" size="2x" />-->

                        <span> Sell</span>
                    </el-menu-item>
                    <el-submenu index="5">
                        <template slot="title">
                            <font-awesome-icon icon="clipboard" size="lg" style="color: #f3b4a4"/>
                            <span>Management</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1" @click="gomemberset">
                                <font-awesome-icon icon="address-card"/>
                                <span>Member Setting</span></el-menu-item>
                            <el-menu-item index="1-2" @click="gocategory">
                                <font-awesome-icon icon="file-signature" />
                                <span>Category Setting</span></el-menu-item>
                        </el-menu-item-group>

                    </el-submenu>
                    <el-menu-item index="6" @click="logout()">
                        <font-awesome-icon icon="sign-out-alt" size="lg" style="color: #f34e68"/>

                        <!--<i class="el-icon-goods"></i>-->
                        <span>Logout</span>
                    </el-menu-item>

                </el-menu>
        </el-aside>

        <el-container>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>

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
            goManagement(){
                this.$router.push({name:"management"})
            },
            gomemberset() {
                this.$router.push({name: "memberset"})
            },
            gocategory() {
                this.$router.push({name: "category"})
            },
            logout(){
               this.$swal({
                    title: "Are you sure?",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                    .then((willDelete) => {
                        if (willDelete) {
                            this.$swal("Logout Complete!", {
                                icon: "success",
                            });
                            this.$router.push({name:"Login"})
                        }
                    });

            }
        }
    }

</script>

<style scoped>


    .menu {
        max-height: 1000px;
    }
    .box-card {
        width: auto;
        /*padding-bottom: 300px;*/
    }
    .full-height {
        height: 100% ;
        background: yellow;
    }
</style>
