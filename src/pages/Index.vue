<style lang="scss">
    

    .center{
        width: 310px;
        height: 800px;
        flex-direction: column;
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
                .portrait{
                    padding: 14px;
                    .portrait{
                        background-color: darkorange;
                        width: 52px;
                        height: 52px;
                    }
                }
                .word{
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
                        font-size: 14px;
                    }
                }
            }

        }
    }

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
</style>

<template>
    
<div class="flex">

    <div class="flex center">
        <wx-search></wx-search>

        <div class="flex chat">
            <div class="flex chat-box" v-for="(item,index) in chatList" :key="'a'+index">
                <div class="portrait">
                    <div class="portrait">
                    </div>
                </div>
                <div class="flex word">
                    <div class="flex top">
                        <div class="flex name">
                            {{item.name}}
                        </div>
                        <div class="flex time">
                            13:18
                        </div>
                    </div>
                    <div class="bottom">
                        一二三四
                    </div>
                </div>
            </div>
        </div>
    </div>
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
import wxSearch from '../components/wx-search.vue'
    export default{
        data(){
            return{
                name:"",
                title:"微信支付",
                title2:"<div style=\"color:red\">我的账单</div>",
                chatList:[
                    {
                        name:'埃里克森大家分厘卡',
                        beizhu:'李四',
                    },
                    {
                        name:'张三',
                        beizhu:''
                    },
                    {
                        name:'张三',
                        beizhu:''
                    },
                    {
                        name:'张三',
                        beizhu:''
                    },
                    {
                        name:'张三',
                        beizhu:''
                    },
                    {
                        name:'张三',
                        beizhu:''
                    },
                    {
                        name:'张三',
                        beizhu:''
                    },
                    {
                        name:'张三',
                        beizhu:''
                    },
                    {
                        name:'张三',
                        beizhu:''
                    },
                    {
                        name:'张三',
                        beizhu:''
                    },
                    {
                        name:'张三',
                        beizhu:''
                    },
                ]
            }
        },
        methods:{
            clearInput:function(){
                app.name=""
            },
        },
        components:{
            'wx-search':wxSearch,
      },
    }
</script>