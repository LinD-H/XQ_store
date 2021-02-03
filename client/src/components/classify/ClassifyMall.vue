<template>
  <div class="w">
    <div class="flex h5">
      <h5>金融精选</h5>
      <p>排行榜</p>
    </div>
    <div class="mallW">
      <div class="mall" v-for="(item,index) in mallList" :key="index">
        <img :src="item.imgUrl" alt="" />
        <p>黄金</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mallList: [
        {
          imgUrl:
            "//img11.360buyimg.com/focus/s140x140_jfs/t12298/13/1722741714/5804/21383486/5a254160Nfd73506e.jpg",
        },

        {
          imgUrl:
            "//img11.360buyimg.com/focus/s140x140_jfs/t12298/13/1722741714/5804/21383486/5a254160Nfd73506e.jpg",
        },
        {
          imgUrl:
            "//img11.360buyimg.com/focus/s140x140_jfs/t12298/13/1722741714/5804/21383486/5a254160Nfd73506e.jpg",
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.h5 {
  padding: 20px;
  justify-content: space-between;
  p {
    font-size: 12px;
  }
}
.w {
  position: relative;
  width: calc(100vw - 100px);
  height: 300px;
  float: right;
  top: 50px;
}
.mallW {
  display: grid;
  width: calc(100vw - 100px);
  height: 300px;
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: 33% 33% 33%;

  .mall {
    text-align: center;
    font-size: 14px;
    img {
      width: 70px;
      height: 70px;
    }
  }
}
</style>
