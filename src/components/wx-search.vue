<style lang="scss">
.search{
            background-color: rgb(247, 247, 247);
            width: 310px;
            height: 80px;
            justify-content: space-between;
            padding: 30px 14px 0;
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
                    /* margin-left: 20px; */
                    width: 220px;
                    height: 30px;
                    border-radius: 8px;
                    border: 0;
                    outline: 0;
/*                     &::placeholder{
                        
                    } */
                }

                input.aaa{
                    color: red;
                }
            }
            .right{
                align-items: center;
                justify-content: center;
                background-color: rgb(226, 226, 226);
                width: 30px;
                height: 30px;
                border-radius: 4px;
            }
        }
</style>

<template>
    <div class="flex search">
        <div class="flex left">
            <i class="iconfont">&#xe741;</i>
            <input type="text" placeholder="搜索" v-model="name" @keyup="test">
            <i style="font-style: normal; font-size: 30px;" v-if="name" @click="clearInput">x</i>
        </div>
        <div class="flex right">
            十
        </div>
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