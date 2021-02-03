<template>
  <div>
      <Header/>
      <div class="cart_login flex center">
        <span>登录后可同步账户购物车中的商品</span>
        <div class="btn_login">登录</div>
      </div>
      <Cart/>
      <BottomBar/>
  </div>
</template>

<script>
import BottomBar from '../components/BottomBar.vue'
import Cart from '../components/shopcart/Cart.vue'
import Header from '../components/shopcart/Header'
export default {
  components: {
    BottomBar,
    Header,
    Cart
  }
}
</script>

<style lang="less" scoped>
  .cart_login {
    width: 100vw;
    height: 60px;
    background-color: #fff;
    font-size: 14px;
    span {
      margin-right: 10px;
    }
    .btn_login {
      width: 58px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      color: #fff;
      background-image: linear-gradient(270deg,#f2270c,#ff4b2b);
      border-radius: 45px;
      box-shadow: 0 3px 6px 0 rgb(255 65 66 / 20%);
    }
  }
</style>