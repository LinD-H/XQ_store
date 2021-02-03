<template>
  <div>
    <div class="flex conter mall">
      <div v-for="item in mallList" :key="item.imgUrl" class="mallE">
        <img :src="item.imgUrl" alt="" />
        {{ item.mallName }}
      </div>
    </div>
    <div class="flex conter mall2">
      <div v-for="item in mallList" :key="item.imgUrl" class="mallE">
        <img :src="item.imgUrl" alt="" />
        {{ item.mallName }}
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
            "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/125678/35/5947/4868/5efbf28cEbf04a25a/e2bcc411170524f0.png",
          mallName: "小七超市",
        },
        {
          imgUrl:
            "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/135931/4/3281/5598/5efbf2c0Edbdc82c7/ed9861b4ddfb9f30.png",
          mallName: "小七超市",
        },
        {
          imgUrl:
            "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/140012/8/1804/3641/5efbf318E38bd5dad/0db99d859ab16ce9.png",
          mallName: "小七超市",
        },
        {
          imgUrl:
            "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/129215/21/5978/3618/5efbf344Ebec23ae8/59712d986b10bb0a.png",
          mallName: "小七超市",
        },
        {
          imgUrl:
            "//m.360buyimg.com/mobilecms/s120x120_jfs/t1/116602/7/11200/3796/5efbf375Ebba41029/f07cc166f368fa05.png",
          mallName: "小七超市",
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.mall {
  padding-top: 50px;

  width: 100vw;
  height: 80px;
  .mallE {
    font-size: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 20vw;
  }
  img {
    width: 44px;
    height: 44px;
  }
}
.mall2 {
  .mall();
  font-size: 12px;
  display: flex;
  padding-top: 0;
  padding-bottom: 10px;
}
</style>