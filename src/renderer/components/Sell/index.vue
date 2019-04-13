<template>
    <el-card>
        <el-container>
            <el-main>
                Main
            </el-main>
            <el-footer >
                Footer
            </el-footer>
        </el-container>
    </el-card>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>
    el-footer {
        position: fixed;
        bottom: 0;
        width: 100%;
        background-color: black;
        color: aquamarine;
        text-align: center;
        line-height: 60px;
    }
</style>