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
              img{
                  background-color: seagreen;
                  width: 46px;
                  height: 46px;
              }
          }
          /* 左侧图标 */
          .page{

            .icon{
                user-select: none;
                font-size: 30px;
                margin-top: 30px;
                color: white;
                &.active{
                  color: green;
                }
            }
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
        <img :src="portrait" alt="">
      </div>
      <!-- 左侧图标 -->
      <div class="page">
        <div class="icon" @click="changePage('')" :class="{'active':pageId == ''}">
          <i class="iconfont">&#xe705;</i>
        </div>
        <div class="icon" @click="changePage('tongxunlu')" :class="{'active':pageId == 'tongxunlu'}">
          <i class="iconfont">&#xe6e3;</i>
        </div>
        <div class="icon" @click="changePage('shoucang')" :class="{'active':pageId == 'shoucang'}">
          <i class="iconfont">&#xe70c;</i>
        </div>
      </div>
  </div>


  <router-view>
  </router-view>
</div>

</template>
<!-- 説起來你這個地方，能寫成這樣，終究是你不理解怎麽同時調用兩個方法

沒有辦法同時調用兩個方法

只能分順序調

就是在一個方法裏再去調用另一個方法
 -->
<script>
    import axios from 'axios'
    export default {
      created(){
        axios.get('http://13.213.37.194/api/userinfo').then(response => {
          this.portrait = response.data.portrait
        })
      },
      data(){
        return{
          portrait:'',
          pageId:'',
        }
      },
      methods:{
        changePage(page){
          // page 是一個字符串對吧？ 你這裏可以不需要再新建數字型的值了
          // 因爲 ： class 那裏，究其根本只是要一個獨一無二的值而已
          this.$router.push('/' + page)

          // ↓ 明白了嗎
          // this.changePageId(page)
        },
        // 假設說這裏有另一個方法
        changePageId(id){
          // 這個方法即便不在 html 裏調用，也可以在methods的其他成員裏通過this調用
          this.pageId = id
        },
      },

    }
  </script>