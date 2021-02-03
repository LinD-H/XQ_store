<template>
  <div class="wra">
    <div class="flex wrapper">
      <div v-for="(item, index) in ClassifyList" :key="index" class="classify">
        {{ item.name }}
      </div>
    </div>
    <ClassifyMall />
  </div>
</template>
<script>
import ClassifyMall from "./ClassifyMall";
export default {
  components: {
    ClassifyMall,
  },
  data() {
    return {
      ClassifyList: [
        {
          name: "热门推荐",
        },
        {
          name: "热门推荐",
        },
        {
          name: "热门推荐",
        },
        {
          name: "热门推荐",
        },
        {
          name: "热门推荐",
        },
        {
          name: "热门推荐",
        },
        {
          name: "热门推荐",
        },
        {
          name: "热门推荐",
        },
        {
          name: "热门推荐",
        },
        {
          name: "热门推荐",
        },
        {
          name: "热门推荐",
        },
        {
          name: "热门推荐",
        },
        {
          name: "热门推荐",
        },
        {
          name: "热门推荐",
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.wra {
  width: 100vw;
  height: calc(100vh - 38px);
}
.wrapper {
  display: inline-block;
  height: calc(100vh - 47px);
  width: 100px;
  position: relative;
  top: 46px;
  flex-direction: column;
}
.classify {
  text-align: center;
  width: 100%;
  height: 39.2px;
  font-size: 14px;
  padding: 10px 0 0 0;
  background-color: #fdf3f3;
}
</style>