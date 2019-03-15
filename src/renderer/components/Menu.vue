<template>
    <el-row>
        <el-col :span="4">
            <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    background-color="#409EFF"
                    text-color="#fff"
                    active-text-color="#ffd04b">
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>Shop</span>
                    </template>

                </el-submenu>
                <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span>Navigator Two</span>
                </el-menu-item>
                <el-menu-item index="3" disabled>
                    <i class="el-icon-document"></i>
                    <span>Navigator Three</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <span>Navigator Four</span>
                </el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "menu",
        methods:{
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
        }
    }

</script>

<style scoped>

</style>
