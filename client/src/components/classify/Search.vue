<template>
  <div class="background">
    <div class="flex wrapper">
      <div class="classify" @click="goHome">
        <p>===</p>
      </div>
      <div class="search">
        <input type="text" placeholder="搜索" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    goHome(){
      this.$router.push('/')
    }
  }
};
</script>

<style lang="less" scoped> 
.background {
  position: absolute;
  padding-top: 7px;
  width: 100vw;
  
  .wrapper {
    // align-items: center;
    border-bottom: 1px solid #fdf3f3;
    height: 38px;
  }
}
.classify {
  width: 50px;
  height: 50px;
}
.search {
  border-radius: 20px;
  width: 75%;
  height: 30px;
  background-color: white;
  line-height: 30px;
  input {
    font-size: 12px;
    margin-left: 10px;
    padding-left: 15px;
    border: none;
    outline: none;
    background-color: white;
  }
}
.login {
  font-size: 14px;
  text-align: center;
  width: 67px;
  height: 29px;
  color: white;
  line-height: 29px;
}
</style>