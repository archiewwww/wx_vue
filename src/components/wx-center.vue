<style lang="scss">
/* 中间 */
.wx-center{
    width: 310px;
    height: 800px;
    flex-direction: column;
    /* 中间上方 */
    .search{
        flex-shrink: 0;
        background-color: rgb(247, 247, 247);
        width: 310px;
        height: 80px;
        justify-content: space-between;
        padding: 30px 14px 0;
        /* 搜索栏 */
        .left{
            background-color: rgb(226, 226, 226);
            width: 240px;
            height: 30px;
            border-radius: 8px;
            flex-direction: row;
            .iconfont{
                width: 20px;
                font-size: 20px;

            }
            input{
                background-color: transparent;
                width: 220px;
                height: 30px;
                border-radius: 8px;
                border: 0;
                outline: 0;
            }
        }
        /* 加号 */
        .right{
            align-items: center;
            justify-content: center;
            background-color: rgb(226, 226, 226);
            width: 30px;
            height: 30px;
            border-radius: 4px;
        }
    }
}
</style>

<template>
<!-- 中间 -->
<div class="flex wx-center">
    <!-- 中间上方 -->
    <div class="flex search">
        <!-- 搜索栏 -->
        <div class="flex left">
            <i class="iconfont">&#xe741;</i>
            <input type="text" placeholder="搜索" v-model="name" @keyup="test">
            <i style="font-style: normal; font-size: 30px;" v-if="name" @click="clearInput">x</i>
        </div>
        <!-- 加号 -->
        <div class="flex right">
            十
        </div>
    </div>
    <slot></slot>
    
</div>
</template>

<script>
export default {
    data(){
        return {
            name:''
        }
    }
}
</script>