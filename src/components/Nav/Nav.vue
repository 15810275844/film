<template>
    <div>
        <router-link to="home">首页</router-link>
        <router-link to="detail">详情</router-link>
        <router-link to="adminHome">admin首页</router-link>
        <router-link to="adminList">admin列表</router-link>
    </div>
</template>

<style lang="less" scoped>
    div{
        text-align: center;
        display: flex;
        width: 100%;
        a{
            flex:1;
        }
    }
    .router-link-active{
        color: red;
    }
</style>