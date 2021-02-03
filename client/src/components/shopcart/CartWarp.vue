<template>
  <div class="warp flex center">
      <div class="warp_icon"></div>
      <p class="warp_font">登录后可同步购物车中商品</p>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
    .warp {
        width: 100vw;
        height: 261px;
        flex-direction: column;
        .warp_icon {
            width: 90px;
            height: 90px;
            background:url(//img11.360buyimg.com/jdphoto/s180x180_jfs/t18163/292/540553659/74408/adeb7463/5a93c51cN3bb5e37b.png) no-repeat 50%;
            background-size:90px 90px;
        }
        .warp_font {
            font-size: 16px;
            line-height: 16px;
            margin-top: 15px;
            color: #333;
        }
    }
</style>