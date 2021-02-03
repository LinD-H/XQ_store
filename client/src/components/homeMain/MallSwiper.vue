<template>
  <div class="wrapper flex conter" ref="swiper">
    <div v-for="(item,index) in goodsList" :key="index" class="goods">
      <img :src="item.imgUrl" alt="" />
      <p>{{ item.after }}</p>
      <p class="beforeM">{{ item.before }}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      startX: 0,
      endX: 0,
      x: 0,
      goodsList: [
        {
          imgUrl:
            "//img11.360buyimg.com/n7/s150x150_jfs/t1/162068/11/4679/137074/60129a5eE10042472/b0c9a7a83296e3ff.jpg.dpg",
          after: "￥10",
          before: "￥998",
        },
        {
          imgUrl:
            "//img11.360buyimg.com/n7/s150x150_jfs/t1/162068/11/4679/137074/60129a5eE10042472/b0c9a7a83296e3ff.jpg.dpg",
          after: "￥10",
          before: "￥998",
        },
        {
          imgUrl:
            "//img11.360buyimg.com/n7/s150x150_jfs/t1/162068/11/4679/137074/60129a5eE10042472/b0c9a7a83296e3ff.jpg.dpg",
          after: "￥10",
          before: "￥998",
        },
        {
          imgUrl:
            "//img11.360buyimg.com/n7/s150x150_jfs/t1/162068/11/4679/137074/60129a5eE10042472/b0c9a7a83296e3ff.jpg.dpg",
          after: "￥10",
          before: "￥998",
        },
      ],
    };
  },
  mounted() {
    const mallS = this.$refs.swiper;
    //触摸屏幕事件
    mallS.addEventListener("touchstart", (e) => {
      this.startX = e.changedTouches[0].clientX;
    });

    //松开屏幕事件
    mallS.addEventListener("touchend", (e) => {
      this.endX = e.changedTouches[0].clientX;
      mallS.style.left = "0px";
      mallS.style.left =
        this.endX - this.startX > 0 ? 0 : this.endX - this.startX + "px";
    });

    //移动屏幕事件
    mallS.addEventListener("touchmove", (e) => {
      // console.log(this.x); //上一次坐标
      if (this.x == 0) {
        this.x = this.startX;
      }
      mallS.style.left = e.changedTouches[0].clientX - this.x + "px";
      // e.changedTouches[0].clientX; //当前坐标
      if (mallS.style.left.slice(0, mallS.style.left.length - 2) > 100) {
        mallS.style.left = 100 + "px";
      }
    });
  },
  methods: {},
};
</script>
<style scoped lang="less">
.wrapper {
  width: 500px;
  height: 100px;
  position: relative;
  transition: all 0.3s;
}
.goods {
  font-size: 14px;
  text-align: center;
  width: 91px;
  height: 89px;
  margin-right: 10px;
  img {
    width: 100%;
    height: 100%;
  }
  .beforeM {
    text-decoration: line-through;
    color: #ccc;
  }
}
</style>