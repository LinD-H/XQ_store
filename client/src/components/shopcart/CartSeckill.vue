<template>
  <div>
      <cart-title title="京东秒杀"></cart-title>
      <div class="seckill_content">
          <div class="sekill_top flex ">
              <div class="seckill_title">京东秒杀</div>
              <div class="seckill_countdown">
                  <span>{{KillTime}}点场</span>
                  <div class="countdown_detail">
                      <div class="item"></div>
                      <div></div>
                      <div></div>
                  </div>
              </div>
              <div></div>
          </div>
          <div></div>
      </div>
  </div>
</template>

<script>
import CartTitle from './CartTitle.vue'
export default {
    data () {
        return {
            KillTime: 22
        }
    },
    components: {
        CartTitle
    }
}
</script>

<style lang="less" scoped>
    .seckill_content {
        margin-left: 15px;
        background-color: #fff;
        .sekill_top {
            height: 45px;
            line-height: 45px;
            .seckill_title {
                margin: 0 10px;
                font-weight: 700;
            }
            .seckill_countdown {
                font-size: 12px;
                color: #999;
            }
        }
    }
</style>