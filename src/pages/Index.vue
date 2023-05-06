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
            &.chat-top{
                background-color: rgb(216, 216, 216);
            }
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
                background-color: rgb(206, 207, 209);
                
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
            width: 100%;
            height: 11.8%;
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
        /* 输入栏 */
        .bottom{
            background-color: rgb(245, 245, 245);
            width: 100%;
            height: 27.5%;
            flex-direction: column;
            justify-content: space-between;
            border-top-style: solid;
            border-width: 1px;
            border-color: rgb(232, 232, 232);
            /* 输入栏上方图标 */
            .iconfont{
                justify-content: space-between; 
                width: 100%;
                height: 15%;
                margin-top: 15px;
                .iconfont-left{
                    width: 30%;
                    height: 100%;
                    margin-left: 30px;
                    .lefticon{
                        margin: 0 10px;
                        display: flex;
                        justify-content: space-between;
                        height: 100%;
                        width: 25px;
                        background-color: rgb(205, 146, 110);
                    }
                }
                .iconfont-right{
                    width: 15%;
                    height: 100%;
                    margin-right: 30px;
                    .righticon{
                        margin: 0 10px;
                        display: flex;
                        justify-content: space-between;
                        height: 25px;
                        width: 25px;
                        background-color: rgb(114, 146, 110);
                    }
                }
            }
            输入栏
            input{
                width: 100%;
                height: 50%;
            }
            // .word{
            //     color: rgb(149, 150, 155);
            //     align-items: center;
            //     justify-content: center;
            //     width: 302px;
            //     border-right-style: solid;
            //     border-width: 1px;
            //     border-color: rgb(232, 232, 232);
            // }
            // .icon{
            //     width: 63px;
            //     font-size: 30px;
            //     align-items: center;
            //     justify-content: center;
            // }
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
            <div class="flex chat-box" v-for="(item,index) in chatList2" :key="'a'+index"  @click="openCard(index)" :class="{'active':cardId == index,'chat-top':item.top}">
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
                            {{formatDate(item.time)}}
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
    <wx-right :title="test"></wx-right>
</div>

</template>

<!-- 之前跟你説，改成一個方法，你沒理解 -->

<script>
import wxCenter from '../components/wx-center.vue'
import wxRight from '../components/wx-right.vue'
import axios from 'axios'
export default {
    created(){
        axios.get('http://13.213.37.194/api/chat/list').then(response =>{
            console.log(response.data)
            this.chatList = response.data
        })

        this.$parent.$parent.changePageId('')
    },

    data(){
        return{
            cardId:-1,
            portrait:'',
            title:"微信支付",
            title2:"<div style=\"color:red\">我的账单</div>",
            chatList:[],
            

            test:'',
        }
    },
    methods:{
        clearInput:function(){
            app.name=""
        },
        openCard(index){

            const card = this.chatList2[index]
            this.test = card.name

            this.cardId = index
        },
        formatDate(value){

            /* // 服務器時間戳
            const timestamp1 = (value * 1000)

            // 當前時間戳
            const timestamp2 = new Date().getTime()

            // 取得時間差
            const timestamp3 = timestamp2 - timestamp1
 */
            // 判斷時間差
            // console.log('當前時間是:'+timestamp1)
            // if((1000 * 60 * 60 * 24) > timestamp3){
            //     this.getMMDD()
            // }else{
            //     this.getHHSS()
            // }
            let date = new Date(value);
            // let y = date.getFullYear();
            // let MM = date.getMonth() + 1;
            // MM = MM < 10 ? "0" + MM : MM;
            // let d = date.getDate();
            // d = d < 10 ? "0" + d : d;
            let h = date.getHours();
            h = h < 10 ? "0" + h : h;
            let m = date.getMinutes();
            m = m < 10 ? "0" + m : m;
            // let s = date.getSeconds();
            // s = s < 10 ? "0" + s : s;
            return h + ":" + m ;
        },
        getMMDD(){
            console.log('這個方法取月月/日日')
        },
        getHHSS(){
            console.log('這個方法取時時/秒秒')
        },
    },
    computed:{
        chatList2(){
            let result = []
            if(Array.isArray(this.chatList) && this.chatList.length){
                const a = []
                const b = []
                this.chatList.map(asd=>{
                    if(asd.top){
                        a.push(asd)
                    }else{
                        b.push(asd)
                    }
                })
                result = [].concat(a,b)
                console.dir(result)
            }
            return result
        }
    },
    components:{
        'wx-center':wxCenter,
        'wx-right':wxRight
    },
}
</script>