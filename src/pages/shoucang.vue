<style lang="scss">


.center{
    width: 310px;
    height: 800px;
    flex-direction: column;
    
    .center{
        overflow-y: scroll;
        overflow-x: hidden;
        background-color: rgb(247, 247, 247);
        width: 310px;
        .guanli{
            background-color: rgb(247, 247, 247);
            justify-content: center;
            padding-top: 18px;
            div{
                background-color: rgb(255, 255, 255);
                width: 280px;
                height: 52px;
                justify-content: center;
                align-items: center;
                font-size: 20px;
            }
        }
        .center-center{
            background-color: rgb(247, 247, 247);
            flex-direction: column;
            padding-bottom: 230px;
            .box{
                padding-left: 20px;
                padding-top: 20px;
                >div{
                    padding-left: 20px;
                    font-size: 20px;
                }
                >.iconfont{
                    font-size: 26px;
                }
            }
            .box-bottom{
                padding-top: 20px;
                border-bottom-style: solid;
                border-color: rgb(232, 232, 232);
                border-width: 1px;
            }
        }
        .center-bottom{
            width: 310px;
            height: 300px;
            background-color: rgb(247, 247, 247);
            justify-content: center;
        }
    }
}



.right{
    width: 667px;
    height: 800px;
    flex-direction: column;
    .right-top{
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
    .right-box{
        background-color: rgb(245, 245, 245);
        width: 667px;
        height: 720px;
        overflow: scroll;
        overflow-x: hidden;
        justify-content: center;
        .right-card{
            background-color: rgb(255, 255, 255);
            width: 522px;
            height: 150px;
            justify-content: space-between;
            padding: 10px 10px;
            margin-top: 10px;
            border-radius: 12px;
            .card-left{
                flex-direction: column;
                justify-content: center;
                .card-left-top{
                    font-size: 20px;
                }
                .card-left-center{
                    color: rgb(174, 174, 174);
                    font-size: 16px;
                }
                .card-left-bottom{
                    margin-top: 30px;
                    color: rgb(174, 174, 174);
                    font-size: 16px;
                }
            }
            .card-right{
                flex-direction: column;
                justify-content: center;
                .card-right-top{
                    background-color: red;
                    width: 54px;
                    height: 72px;
                }
                .card-right-bottom{
                    margin-top: 20px;
                    color: rgb(174, 174, 174);
                    font-size: 16px;
                }
            }
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
                        新建笔记
                    </div>
                </div>
                <div class="flex center-center">
                    <div class="flex box">
                        <i class="iconfont">&#xe70c;</i>
                        <div>全部收藏</div>
                    </div>
                    <div class="flex box">
                        <i class="iconfont">&#xe70c;</i>
                        <div>最近使用</div>
                    </div>
                    <div class="flex box">
                        <i class="iconfont">&#xe70c;</i>
                        <div>链接</div>
                    </div>
                    <div class="flex box">
                        <i class="iconfont">&#xe70c;</i>
                        <div>图片与视频</div>
                    </div>
                    <div class="flex box">
                        <i class="iconfont">&#xe70c;</i>
                        <div>笔记</div>
                    </div>
                    <div class="flex box">
                        <i class="iconfont">&#xe70c;</i>
                        <div>文件</div>
                    </div>
                    <div class="flex box">
                        <i class="iconfont">&#xe70c;</i>
                        <div>聊天记录</div>
                    </div>
                    <div class="box-bottom">

                    </div>
                    <div class="flex box">
                        <i class="iconfont">&#xe70c;</i>
                        <div>标签</div>
                        <div>^</div>
                    </div>
                </div>
                
                <div class="flex center-bottom">
                    <div class="flex">
                        已使用62.4MB，剩余1.9GB
                    </div>
                </div>
            </div>
        </div>
        <div class="flex right">
            <div class="flex right-top">
                <div>
                    全部收藏
                </div>
            </div>
            <div class="flex right-box">
                <div class="flex right-card">
                    <div class="flex card-left">
                        <div class="flex card-left-top">
                            一二三四五六七八九十
                        </div>
                        <div class="card-left-center">
                            PDF 74.7K
                        </div>
                        <div class="flex card-left-bottom">
                            绿酒
                        </div>
                    </div>
                    <div class="flex card-right">
                        <div class="card-right-top">

                        </div>
                        <div class="card-right-bottom">
                            2月19日
                        </div>
                    </div>
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