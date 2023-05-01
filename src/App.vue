<style lang="scss">
#app{
  /* 左侧 */
  .appleft{
          width: 68px;
          height:800px;
          background-color: rgb(46, 46, 46);
          flex-direction: column;
          align-items: center;
          flex-shrink: 0;
          /* 左侧头像 */
          .portrait{
              padding-top: 44px;
              .portrait{
                  background-color: seagreen;
                  width: 46px;
                  height: 46px;
              }
          }
          /* 左侧图标 */
          .icon{
              font-size: 30px;
              margin-top: 30px;
              color: white;
          }
  }
}


</style>

<template>
  <div class="flex">
    <!-- 左侧 -->
    <div class="flex appleft">
      <!-- 左侧头像 -->
      <div class="portrait">
        <div class="portrait">
        </div>
      </div>
      <!-- 左侧图标 -->
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