

<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide v-for="(slide, key) in swiperList" :key="key">
        <div align="center"><img :src="slide" alt="" /></div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
export default {
  name: "work",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperList: [
        "//imgcps.jd.com/ling4/100012043978/55m96YWS6LaF5YC85aW95Lu3/5pu05oeC5L2g55qE6ZyA5rGC/p-5c11d16482acdd181dbc1fc9/848fc44b/cr_1125x445_0_171/s1125x690/q70.jpg",
        "//m.360buyimg.com/mobilecms/s700x280_jfs/t1/163621/20/4257/75231/60112c91E78920d2b/7bd4eac13b8d682a.jpg!q70.jpg.dpg",
      ],
      swiperOption: {
        autoplay: {
          disableOnInteraction: false, // 用户操作swiper之后，是否禁止autoplay
          delay: 3000, // 自动切换的时间间隔（单位ms）
        },
        initialSlide: 0,
        loop: true,
        pagination: { el: ".swiper-pagination" }, // 分页按钮
        paginationClickable: true,
        // onSlideChangeEnd: swiper => {
        // //console.log('onSlideChangeEnd', swiper.realIndex)
        // }
      },
    };
  },
};
</script>

<style lang="less" scoped>
.swiper-container {
  position: relative;
  top: 46px;
  border-radius: 10px;
  margin: 0 auto;
  width: 93vw;
  height: 156px;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>