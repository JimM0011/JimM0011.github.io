<script lang="ts" setup>

import { ElIcon } from 'element-plus'
import { HomeFilled, SuccessFilled } from '@element-plus/icons-vue'

const home ={
    name: "Home",
    link: "https://jimm0011.github.io/"
}


</script>



<template>
    <el-affix 
        :offset="0"
        :position="fixed" 
        :z-index="1000" 
        class="header-container"
    >
        <div class="header-name">
            <div class="header-name-text">
                Jing Ma (马靖)
            </div>
        </div>

        <div class="el-menu-container">
            <el-menu
                defalut-active="1"
                class="el-menu-context"
                mode="horizontal"
                :ellipsis="false"
            >
                <el-menu-item 
                    index="0"
                    class="el-menu-item"
                >
                    <el-icon :size="20"><HomeFilled /></el-icon>
                    <a :href=home.link>{{ home.name }} </a>
                </el-menu-item>

                <!-- <el-menu-item 
                    index="1"
                    class="el-menu-item"
                >

                </el-menu-item>

                <el-menu-item 
                    index="2"
                    class="el-menu-item"
                >

                </el-menu-item> -->
            </el-menu>
        </div>

        <div class="header-blank">

        </div>

    </el-affix>
</template>

<style>

div {
    width: 100%;
    height: 100%;
    display: flex;
}

.el-affix--fixed {
	box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
	background-image: radial-gradient(#ffffffca 1px,#ffffff 1px);
	background-size: 3px 3px;
}

</style>


<style scoped>

.header-blank {
    width: 10%;
    height: 100%;
}

.header-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    /* background-color: white; */
}

.header-name {
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.header-name-text {
    width: 100%;
    height: 100%;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: white;
}

.el-menu-container {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.el-menu-context {
    background: none;
    border: none;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
}

.el-menu-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 16px
}

</style>
