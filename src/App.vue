<style lang="sass">

</style>

<template>

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
<router-view>

</router-view>

</template>


  <script>
    export default {
  
    }
  </script>