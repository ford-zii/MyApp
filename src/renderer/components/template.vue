<template>
    <el-container >
        <el-aside width="200px"   style="background-color: rgb(238, 241, 246);height: auto">
                <el-menu
                        default-active="2"
                        @open="handleOpen"
                        @close="handleClose">
                    <el-menu-item index="1" @click="goMember()">
                        <font-awesome-icon icon="address-card" size="lg" style="color: yellowgreen"/>
                        <span>Member</span>
                    </el-menu-item>
                    <el-menu-item index="2" @click="goProduct()">
                        <font-awesome-icon icon="store" size="lg"/>
                        <span>Product</span>
                    </el-menu-item>
                    <el-menu-item index="3" @click="goStaff()">
                        <font-awesome-icon icon="user" size="lg" />
                        <span>Staff</span>
                    </el-menu-item>
                    <el-menu-item index="4" @click="goSell()">
                        <font-awesome-icon icon="dollar-sign" size="2x" />
                        <!--<font-awesome-icon icon="shopping-cart" size="2x" />-->

                        <span> Sell</span>
                    </el-menu-item>
                    <el-menu-item index="5" @click="goManagement()">
                        <font-awesome-icon icon="cogs" size="lg" />
                        <span>Management</span>
                    </el-menu-item>
                    <el-menu-item index="6" @click="logout()">
                        <font-awesome-icon icon="sign-out-alt" size="lg"/>

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
