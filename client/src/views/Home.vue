<template>
  <div>
    <Header />
    <HomeMain />
    <BottomBar />
  </div>
</template>

<script>
import Header from "../components/homeHeader";
import BottomBar from "../components/BottomBar";
import HomeMain from "../components/homeMain";
export default {
  components: {
    Header,
    HomeMain,
    BottomBar,
  },
};
</script>

<style>
</style>