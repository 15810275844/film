<template>
    <div>
        <router-link to="/home">首页</router-link>
        <router-link to="/adminHome">admin首页</router-link>
        <router-link to="/adminList">admin列表</router-link>
    </div>
</template>

<style lang="less" scoped>
    div{
        text-align: center;
        display: flex;
        width: 100%;
        line-height:50px;
        height:50px;
        background:#fff;
        a{
            flex:1;
        }
    }
    .router-link-active{
        color: red;
    }
</style>