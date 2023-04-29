<style lang="scss">

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
    .center{
        overflow-y: scroll;
        overflow-x: hidden;
        .guanli{
            background-color: rgb(235, 231, 230);
            justify-content: center;
            padding-top: 18px;
            div{
                background-color: rgb(255, 255, 255);
                width: 282px;
                height: 52px;
                justify-content: center;
                align-items: center;
                font-size: 20px;
            }
        }
        .center{
            background-color: rgb(235, 231, 230);
            .card{
                flex-direction: column;
                padding-left: 16px;
                padding-top: 30px;
                padding-bottom: 16px;
                border-bottom-style: solid;
                border-width: 1px;
                border-color: rgb(222, 218, 217);
                .top{
                    color: rgb(150, 151, 146);
                    font-size: 12;
                }
                .bottom{
                    flex-direction: row;
                    padding-top: 22px;
                    .portrait{
                        background-color: darkmagenta;
                        width: 44px;
                        height: 44px;
                    }
                    .name{
                        padding-left: 16px;
                        align-items: center;
                    }
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
        <div class="flex center">
            <wx-search></wx-search>
            <div class="flex center">
                <div class="flex guanli">
                    <div class="flex">
                        通讯录管理
                    </div>
                </div>
                <div class="flex center">
                    <div class="flex card">
                        <div class="flex top">
                            新的朋友
                        </div>
                        <div class="flex bottom">
                            <div class="flex portrait">

                            </div>
                            <div class="flex name">
                                新的朋友
                            </div>
                        </div>
                    </div>
                    <div class="flex card">
                        <div class="flex top">
                            公众号
                        </div>
                        <div class="flex bottom">
                            <div class="flex portrait">

                            </div>
                            <div class="flex name">
                                公众号
                            </div>
                        </div>
                    </div>
                    <div class="flex card">
                        <div class="flex top">
                            群聊
                        </div>
                        <div class="flex bottom">
                            <div class="flex portrait">

                            </div>
                            <div class="flex name">
                                名媛群
                            </div>
                        </div>
                    </div>
                    <div class="flex card">
                        <div class="flex top">
                            A
                        </div>
                        <div class="flex bottom">
                            <div class="flex portrait">

                            </div>
                            <div class="flex name">
                                新的朋友
                            </div>
                        </div>
                    </div>
                    <div class="flex card">
                        <div class="flex top">
                            新的朋友
                        </div>
                        <div class="flex bottom">
                            <div class="flex portrait">

                            </div>
                            <div class="flex name">
                                新的朋友
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex right">
            <div class="flex top">
                <div>
                    微信支付
                </div>
            </div>
            <div class="center">

            </div>
            <div class="flex bottom">
                <div class="flex word">
                    我的账单
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
    export default({
        data(){
            return{

            }
        },
        methods:{
            
        },
        components:{
            'wx-search':wxSearch,
        },
    })


</script>