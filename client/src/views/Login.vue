<template>
  <div class="out_box">
      <div class="big_box">
        <loginheader></loginheader>
        <loginindex></loginindex>
    </div>
  </div>
</template>

<script>
import Loginheader from '../components/login/LoginHeader'
import Loginindex from '../components/login/index'
export default {
    components: {
        Loginheader,
        Loginindex
    }
}
</script>

<style lang="less" scoped>
    .out_box {
        width: 100vw;
        height: 100vh;
        background: #fff;
        .big_box {
            width: 80vw;
            height: 100%;
            margin: 0 auto;
            background-color: #fff;
        }
    }
</style>