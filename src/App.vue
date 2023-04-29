<style lang="scss">
/* 左侧 */
.appleft{
        width: 68px;
        height:800px;
        background-color: rgb(46, 46, 46);
        flex-direction: column;
        align-items: center;
        flex-shrink: 0;
        
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
</style>

<template>
<div class="flex">
  <div class="flex appleft">
    <div class="portrait">
      <div class="portrait">
      </div>
    </div>
    <div class="icon" @click="changePage('')">
      <i class="iconfont">&#xe705;</i>
    </div>
    <div class="icon" @click="changePage('tongxunlu')">
      <i class="iconfont">&#xe6e3;</i>
    </div>
    <div class="icon" @click="changePage('shoucang')">
      <i class="iconfont">&#xe70c;</i>
    </div>
  </div>


  <router-view>
  </router-view>
</div>

</template>


  <script>



    export default {
      methods:{
        changePage(page){
          this.$router.push('/' + page)
        }
      },   
      


    }
  </script>