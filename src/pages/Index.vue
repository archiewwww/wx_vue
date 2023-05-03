<style lang="scss">
/* 首页 */
.page-index{      
    /* 聊天列表 */  
    .chat{
        background-color: plum;
        width: 310px;
        height: 720px;
        flex-direction: column;
        overflow: scroll;
        overflow-x: hidden;
        .chat-box{
            background-color: rgb(230, 229, 227);
            width: 310px;
            height: 80px;
            flex-direction: row;
            /* 聊天列表头像 */
            .portrait{
                padding: 14px;
                img{
                    background-color: darkorange;
                    width: 52px;
                    height: 52px;
                }
            }
            /* 聊天列表文字 */
            .word{
                user-select: none;
                width: 220px;
                flex-direction: column;
                padding: 10px 18px 12px 0;
                .top{
                    justify-content: space-between;
                    padding: 6px 0;
                    .name{
                        font-size: 18px;
                    }
                    .time{
                        font-size: 12px;
                        /* letter-spacing: -2px; */
                    }
                }
                .bottom{
                    overflow: hidden;
                    font-size: 14px;
                }
            }
            &:hover{
                background-color: rgb(216, 216, 216);
            }
            &.active{
                background-color: rgb(196, 196, 196);
            }
        }

    }
    /* 右侧 */
    .right{
        width: 667px;
        height: 800px;
        flex-direction: column;
        .top{
            background-color: rgb(245, 245, 245);
            width: 667px;
            height: 80px;
            border-bottom-style:solid;
            border-width: 1px;
            border-color: rgb(232, 232, 232);
            align-items: center;
            padding-left: 30px;
            div{
                font-size: 26px;
            }
        }
        .center{
            background-color: rgb(245, 245, 245);
            width: 667px;
            height: 660px;
        }
        .bottom{
            background-color: rgb(251, 251, 251);
            width: 667px;
            height: 60px;
            flex-direction: row;
            .word{
                color: rgb(149, 150, 155);
                align-items: center;
                justify-content: center;
                width: 302px;
                border-right-style: solid;
                border-width: 1px;
                border-color: rgb(232, 232, 232);
            }
            .icon{
                width: 63px;
                font-size: 30px;
                align-items: center;
                justify-content: center;
            }
        }
    }
}
</style>

<template>
<!-- 首页 -->    
<div class="flex page-index">
    <wx-center>
        <!-- 聊天列表 -->
        <div class="flex chat">
            <div class="flex chat-box" v-for="(item,index) in chatList" :key="'a'+index"  @click="openCard(index)" :class="{'active':cardId == index}">
                <!-- 聊天列表头像 -->
                <div class="portrait">
                    <img :src="item.portrait" alt="">
                </div>
                <!-- 聊天列表文字 -->
                <div class="flex word">
                    <div class="flex top">
                        <div class="flex name">
                            {{item.name}}
                        </div>
                        <div class="flex time">
                            {{item.time/*  | formatDate  */}}
                        </div>
                    </div>
                    <div class="bottom">
                        {{item.content}}
                    </div>
                </div>
            </div>
        </div>
    </wx-center>
    <!-- 右侧 -->
    <div class="flex right">
        <div class="flex top">
            <div>
                {{title}}
            </div>
        </div>
        <div class="center">

        </div>
        <div class="flex bottom">
            <div class="flex word" v-html="title2">
                
            </div>
            <div class="flex word">
                支付服务
            </div>
            <div class="flex icon">
                <i class="iconfont">&#xe706;</i>
            </div>
        </div>
    </div>
</div>

</template>

<script>
import wxCenter from '../components/wx-center.vue'
import axios from 'axios'
export default {
    created(){
        axios.get('http://13.213.37.194/api/chat/list').then(response =>{
            console.log(response.data)
            this.chatList = response.data
        })
    },
    data(){
        return{
            cardId:-1,
            portrait:'',
            title:"微信支付",
            title2:"<div style=\"color:red\">我的账单</div>",
            chatList:[
                {
                    name:'',
                    beizhu:'',
                    time:'',
                    content:'',
                    portrait:"",
                },
            ]
        }
    },
    /* filters:{
        formatDate:(value)=>{
            let date = new Date(value);
            let y = date.getFullYear();
            let MM = date.getMonth() + 1;
            MM = MM < 10 ? "0" + MM : MM;
            let d = date.getDate();
            d = d < 10 ? "0" + d : d;
            let h = date.getHours();
            h = h < 10 ? "0" + h : h;
            let m = date.getMinutes();
            m = m < 10 ? "0" + m : m;
            let s = date.getSeconds();
            s = s < 10 ? "0" + s : s;
            return y + "-" + MM + "-" + d + " " + h + ":" + m + ":" + s;
        }
    }, */
    methods:{
        clearInput:function(){
            app.name=""
        },
        openCard(index){
            this.cardId = index
        }
    },
    components:{
        'wx-center':wxCenter
    },
}
</script>