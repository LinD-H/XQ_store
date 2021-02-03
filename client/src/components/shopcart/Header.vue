<template>
  <header class="big_box flex center">
      <div class="top_check"><router-link to="/"><span class="iconfont">&#xe604;</span></router-link></div>
      <div class="top_title">购物车</div>
      <div class="top_check"><span class="iconfont">&#xe659;</span></div>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  .big_box {
    width: 100vw;
    height: 44px;
    background-color: #fff;
    line-height: 44px;
    text-align: center;
    span {
      width: 44px;
      height: 44px;
      font-weight: 700;
      font-size: 22px;
      padding: 10px;
      color: #999;
    }
    .top_title {
      width: 100%;
      height: 44px;
      font-size: 18px;
    }
  }
</style>