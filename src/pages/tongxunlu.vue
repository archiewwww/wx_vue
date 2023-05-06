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
                .cardGroup{
                    flex-direction: column;
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
                <div class="flex cardlist" >
                    <div class="flex cardGroup" v-for="(item,index) in contactList2" :key="index + 'a'">
                        <template v-if="item.children.length > 0">
                            <div class="flex top">
                                {{ item.groupName }}
                            </div>
                            <div class="flex card" v-for="(item2,index2) in item.children" :key="index2 + 'b'" @click="openCard(index+'-'+index2)" :class="{'active':cardId == index+'-'+index2}">
                                <div class="flex portrait">
                                    <img :src="item2.portrait" alt="">
                                </div>
                                <div class="flex name">
                                    {{item2.name}}
                                </div>
                            </div>
                        </template>
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
import axios from 'axios'
    export default {
        created(){
            axios.get('http://13.213.37.194/api/chat/contact').then(response =>{
                this.contactList = response.data
                console.log(response)
            })

            // $route 記錄當前頁面的信息
            
            this.$parent.$parent.changePageId('tongxunlu')
        },
        data(){
            return{
                cardId:-1,
                contactList:[]
            }
        },
        methods:{
            openCard(id){
                this.cardId = id
                console.log(id)
            },

        },
        computed:{
            contactList2(){
                let result = []

                if(this.contactList.length){

                    // 使用循環替代分組
                    const arrAZ = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
                    for(let arrKey = 0; arrKey <= 25; arrKey++){
                        const filterResult = this.contactList.filter(item => item.az == arrKey)
                        result[arrKey] = {
                            groupName:arrAZ[arrKey],
                            children:filterResult
                        }
                    }

                    // // A組成員的返回值
                    // const groupA = this.contactList.filter(abc => abc.az == 0)
                    // result[0] = {}
                    // result[0].groupName = 'A'
                    // result[0].children = groupA
                    // const groupB = this.contactList.filter(abc => abc.az == 1)
                    // result[1] = {}
                    // result[1].groupName = 'B'
                    // result[1].children = groupB
                    // const groupC = this.contactList.filter(abc => abc.az == 2)
                    // result[2] = {}
                    // result[2].groupName = 'C'
                    // result[2].children = groupC
                    // const groupD = this.contactList.filter(abc => abc.az == 3)
                    // result[3] = {}
                    // result[3].groupName = 'D'
                    // result[3].children = groupD
                    // const groupE = this.contactList.filter(abc => abc.az == 4)
                    // result[4] = {}
                    // result[4].groupName = 'E'
                    // result[4].children = groupE
                    // const groupF = this.contactList.filter(abc => abc.az == 5)
                    // result[5] = {}
                    // result[5].groupName = 'F'
                    // result[5].children = groupF
                    // const groupG = this.contactList.filter(abc => abc.az == 6)
                    // result[6] = {}
                    // result[6].groupName = 'G'
                    // result[6].children = groupG
                    // const groupH = this.contactList.filter(abc => abc.az == 7)
                    // result[7] = {}
                    // result[7].groupName = 'H'
                    // result[7].children = groupH
                    // const groupI = this.contactList.filter(abc => abc.az == 8)
                    // result[8] = {}
                    // result[8].groupName = 'I'
                    // result[8].children = groupI
                    // const groupJ = this.contactList.filter(abc => abc.az == 9)
                    // result[9] = {}
                    // result[9].groupName = 'J'
                    // result[9].children = groupJ
                    // const groupK = this.contactList.filter(abc => abc.az == 10)
                    // result[10] = {}
                    // result[10].groupName = 'K'
                    // result[10].children = groupK
                    // const groupL = this.contactList.filter(abc => abc.az == 11)
                    // result[11] = {}
                    // result[11].groupName = 'L'
                    // result[11].children = groupL
                    // const groupM = this.contactList.filter(abc => abc.az == 12)
                    // result[12] = {}
                    // result[12].groupName = 'M'
                    // result[12].children = groupM
                    // const groupN = this.contactList.filter(abc => abc.az == 13)
                    // result[13] = {}
                    // result[13].groupName = 'N'
                    // result[13].children = groupN
                    // const groupO = this.contactList.filter(abc => abc.az == 14)
                    // result[14] = {}
                    // result[14].groupName = 'O'
                    // result[14].children = groupO
                    // const groupP = this.contactList.filter(abc => abc.az == 15)
                    // result[15] = {}
                    // result[15].groupName = 'P'
                    // result[15].children = groupP
                    // const groupQ = this.contactList.filter(abc => abc.az == 16)
                    // result[16] = {}
                    // result[16].groupName = 'Q'
                    // result[16].children = groupQ
                    // const groupR = this.contactList.filter(abc => abc.az == 17)
                    // result[17] = {}
                    // result[17].groupName = 'R'
                    // result[17].children = groupR
                    // const groupS = this.contactList.filter(abc => abc.az == 18)
                    // result[18] = {}
                    // result[18].groupName = 'S'
                    // result[18].children = groupS
                    // const groupT = this.contactList.filter(abc => abc.az == 19)
                    // result[19] = {}
                    // result[19].groupName = 'T'
                    // result[19].children = groupT
                    // const groupU = this.contactList.filter(abc => abc.az == 20)
                    // result[20] = {}
                    // result[20].groupName = 'U'
                    // result[20].children = groupU
                    // const groupV = this.contactList.filter(abc => abc.az == 21)
                    // result[21] = {}
                    // result[21].groupName = 'V'
                    // result[21].children = groupV
                    // const groupW = this.contactList.filter(abc => abc.az == 22)
                    // result[22] = {}
                    // result[22].groupName = 'W'
                    // result[22].children = groupW
                    // const groupX = this.contactList.filter(abc => abc.az == 23)
                    // result[23] = {}
                    // result[23].groupName = 'X'
                    // result[23].children = groupX
                    // const groupY = this.contactList.filter(abc => abc.az == 24)
                    // result[24] = {}
                    // result[24].groupName = 'Y'
                    // result[24].children = groupY
                    // const groupZ = this.contactList.filter(abc => abc.az == 25)
                    // result[25] = {}
                    // result[25].groupName = 'Z'
                    // result[25].children = groupZ

                }
                console.log(result)
                return result
            },
        },
        components:{
            'wx-center':wxCenter,
        }
    }
    


</script>