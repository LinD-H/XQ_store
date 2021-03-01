<template>
  <footer class="bar flex center">
    <div v-for="(item, index) in barList" :key="index" class="barPro">


      <div>
        <router-link :to="item.url"
          ><img :src="item.imgUrl" alt=""
        /></router-link>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      barList: [
        {
          name: "首页",
          url: "/",
          imgUrl:
            "https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/67550/26/12426/5094/5d9c4b13Eea435a3f/81328b0609c60a3c.png",
        },
        {
          name: "分类",
          url: "/classify",
          imgUrl:
            "https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/56507/6/12787/3168/5d9c4b12Ef363dd8d/4af32f42575509d8.png",
        },
        {
          name: "购物车",
          url: "/shopcart",
          imgUrl:
            "https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/64954/4/12406/3529/5d9c4b12Ee7a82735/f2fe0a88bf344736.png",
        },
        {
          name: "个人中心",
          url: "/login",
          imgUrl:
            "https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/68400/36/12368/3153/5d9c4b13E0e0d80a8/876c40f17d91ce44.png",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 49.98px;
  box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, 0.6);
  background-color: white;
  font-size: 16px;
}
.barPro {
  width: 17 vw;
  height: 49.98px;
  padding: 0 10px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>