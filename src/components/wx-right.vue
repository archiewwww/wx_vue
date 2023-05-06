<template>
    <div class="flex right">
        <div class="flex top">
            <div>
                {{title}}
            </div>
        </div>
        <div class="center">

        </div>
        <!-- 输入栏 -->
        <div class="flex bottom">
            <!-- 输入栏上方图标 -->
            <div class="flex iconfont">
                <div class="flex iconfont-left">
                    <div class="lefticon"></div>
                    <div class="lefticon"></div>
                    <div class="lefticon"></div>
                    <div class="lefticon"></div>
                </div>
                <div class="flex iconfont-right">
                    <div class="righticon"></div>
                    <div class="righticon"></div>
                </div>
            </div>
            <!-- 输入框 -->
            <input type="text" v-model="text">
            <!-- 发送按钮 -->
            <button @click="sendText">發送(S)</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    props:['title','cardID'],
    created(){
        axios.get('http://13.213.37.194/api/chat/message/' + this.cardID).then(response =>{
            console.log(response.data)
            this.message = response.data
        })
    },
    data(){
        return {
            title2:'',
            text:'',
            message:'',
        }
    },
    methods:{
        sendText(){
            console.log(this.text)
        }
    },
}
</script>