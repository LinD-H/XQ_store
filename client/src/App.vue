<template>
  <div id="app">
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
 -->
    <router-view />
  </div>
</template>
<script>
export default {
  mounted() {
    // this.$store.dispatch("loginUser/login", {
    //   loginId: 'xx',
    //   loginPwd: 123456,
    // });
  },
  components: {},
};
</script>
<style lang="less" scoped>
</style>
