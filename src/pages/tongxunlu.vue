<style lang="scss">

/* 通讯录页 */
.page-tongxunlu{
    >.wx-center >.center{
        background-color: rgb(235, 231, 230);
        flex-direction: column;
        flex-grow: 1;
        overflow: scroll;
        overflow-x: hidden;
        .guanli{
            background-color: rgb(235, 231, 230);
            justify-content: center;
            margin-top: 18px;
            padding:0 12.5px;
            div{
                background-color: rgb(255, 255, 255);
                width: 100%;
                height: 52px;
                justify-content: center;
                align-items: center;
                font-size: 20px;
            }
        }


        >.center{
            flex-direction: column;
            flex-grow: 1;
            /* 通讯录列表 */
            .cardlist{
                flex-direction: column;
                padding-top: 22px;
                padding-bottom: 16px;
                border-bottom-style: solid;
                border-width: 1px;
                border-color: rgb(222, 218, 217);
                .top{
                    color: rgb(150, 151, 146);
                    font-size: 12;
                    margin-left: 15px;
                }
                .card{
                    flex-direction: row;
                    padding-top: 22px;
                    padding:22px 0 22px 10px ;
                    .portrait{
                        background-color: darkmagenta;
                        width: 44px;
                        height: 44px;
                    }
                    .name{
                        padding-left: 16px;
                        align-items: center;
                    }
                    &:hover{
                        background-color: rgb(216, 216, 216);
                    }
                    &.active{
                        background-color: rgb(196, 196, 196);
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
}

</style>

<template>
<!-- 通讯录页 -->
<div class="page-tongxunlu flex">
    <wx-center>
        <!-- 通讯录列表 -->
        <div class="flex center">
            <div class="flex guanli">
                <div class="flex">
                    通讯录管理
                </div>
            </div>
            <div class="flex center">
                <!-- 通讯录列表 -->
                <div class="flex cardlist">
                    <div class="flex top">
                        A
                    </div>
                    <div class="flex card" @click="openCard(0)" :class="cardId == 0 ? 'active' : ''">
                        <div class="flex portrait">

                        </div>
                        <div class="flex name">
                            新的朋友
                        </div>
                    </div>
                    <div class="flex card" @click="openCard(1)" :class="cardId == 1 ? 'active' : ''">
                        <div class="flex portrait">

                        </div>
                        <div class="flex name">
                            新的朋友
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </wx-center>
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
import wxCenter from '../components/wx-center.vue'
    export default {
        data(){
            return{
                cardId:-1
            }
        },
        methods:{
            openCard(id){
                this.cardId = id
            }
        },
        components:{
            'wx-center':wxCenter,
        }
    }
    


</script>