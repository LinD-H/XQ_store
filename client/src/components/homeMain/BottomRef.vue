<template>
  <div class="grid ref">
    <div class="cell-2" v-for="(item, index) in goodsList" :key="index">
      <img :src="item.imgUrl" alt="" />
      <p>这你不买?</p>
      <p>￥998</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      goodsList: [
        {
          imgUrl:
            "//img12.360buyimg.com/mobilecms/s372x372_jfs/t1/152603/18/15684/134068/60092579E5bc31a14/ca624fa01973f9b6.jpg!q70.dpg.webp",
        },
        {
          imgUrl:
            "//img12.360buyimg.com/mobilecms/s372x372_jfs/t1/152603/18/15684/134068/60092579E5bc31a14/ca624fa01973f9b6.jpg!q70.dpg.webp",
        },
        {
          imgUrl:
            "//img12.360buyimg.com/mobilecms/s372x372_jfs/t1/152603/18/15684/134068/60092579E5bc31a14/ca624fa01973f9b6.jpg!q70.dpg.webp",
        },
        {
          imgUrl:
            "//img12.360buyimg.com/mobilecms/s372x372_jfs/t1/152603/18/15684/134068/60092579E5bc31a14/ca624fa01973f9b6.jpg!q70.dpg.webp",
        },
        {
          imgUrl:
            "//img12.360buyimg.com/mobilecms/s372x372_jfs/t1/152603/18/15684/134068/60092579E5bc31a14/ca624fa01973f9b6.jpg!q70.dpg.webp",
        },
        {
          imgUrl:
            "//img12.360buyimg.com/mobilecms/s372x372_jfs/t1/152603/18/15684/134068/60092579E5bc31a14/ca624fa01973f9b6.jpg!q70.dpg.webp",
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.ref {
  margin: auto;
  margin-top: 10px;
  width: 97vw;
  border-radius: 10px;
  height: 800px;
  box-sizing: border-box;

  grid-template-columns: 50% 50%;
  grid-template-rows: 33% 33% 33%;
}
.cell-2 {
  margin: 5px;
  background-color: white;

  img {
    width: 190px;
    height: 190px;
    border-radius: 10px;
  }
  p {
    margin-left: 10px;
    color: red;
  }
}
</style>