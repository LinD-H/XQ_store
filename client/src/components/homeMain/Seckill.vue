<template>
  <div class="seckillW">
    <div class="top flex">
      <p>小七秒杀</p>
      <div class="flex">
        <div v-for="(item, index) in seckill" :key="index">
          <div class="flex">
            <p class="seckill">{{ item }}</p>
            <p>:</p>
          </div>
        </div>
      </div>
    </div>
    <MallSwiper />
  </div>
</template>
<script>
import { seckill } from "../../utils/time";
import MallSwiper from "../homeMain/MallSwiper";
export default {
  components: {
    MallSwiper,
  },
  data() {
    return {
      seckill: [],
    };
  },
  created() {
    this.seckill = seckill("2021-2-20 17:47:00");
  },
  mounted() {
    setInterval(() => {
      this.seckill = seckill("2021-2-20 17:47:00");
    }, 500);
  },
};
</script>
<style lang="less" scoped>
.seckillW {
  overflow: hidden;
  border-radius: 10px;
  background-color: white;
  margin: 0 auto;
  width: 95vw;
  height: 200px;
  .seckill {
    border-radius: 5px;
    color: white;
    background-image: linear-gradient(0deg, #f1503b, #c82519 50%);
    margin-left: 10px;
  }
}
.top {
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 40px;
  font-size: 14px;
}
</style>