<style lang="scss">
    .left{
        width: 68px;

        background-color: rgb(46, 46, 46);
        flex-direction: column;
        align-items: center;
        .portrait{
            padding-top: 44px;
            .portrait{
                background-color: seagreen;
                width: 46px;
                height: 46px;
            }
        }
        .icon{
            font-size: 30px;
            margin-top: 30px;
            color: white;
        }
    }

    .center{
        width: 310px;
        height: 800px;
        flex-direction: column;
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
                            letter-spacing: -2px;
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
    <div id="app" class="flex">
        <div class="flex">
            <div class="flex left">
                <div class="portrait">
                    <div class="portrait">

                    </div>
                </div>
                <div class="icon">
                    <i class="iconfont">&#xe705;</i>
                </div>
                <div class="icon" @click="changePage('tongxunlu')">
                    <i class="iconfont">&#xe6e3;</i>
                </div>
                <div class="icon" @click="changePage('shoucang')">
                    <i class="iconfont">&#xe70c;</i>
                </div>

            </div>
            <div class="flex center">
                <div class="flex search">
                    <div class="flex left">
                        <i class="iconfont">&#xe741;</i>
                        <input type="text" placeholder="搜索" v-model="name" @keyup="test" @blur="aaaaa" @focus="bbbbb">
                        <i style="font-style: normal; font-size: 30px;" v-if="name" @click="clearInput">x</i>
                    </div>
                    <div class="flex right">
                        十
                    </div>
                </div>
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
                                    13：18
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
    </div>
    <router-link to="/about">个人页</router-link>
</template>

<script>

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
            test:function(){
                console.log(app.name)
            },
            clearInput:function(){
                app.name=""
            },
            aaaaa:function(){
                app.name=""
            },
            changePage(page){
                this.$router.push('/' + page)
            },
        }
    }
    console.log(app.name)
</script>