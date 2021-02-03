<template>
  <div class="background">
    <div class="flex wrapper">
      <div class="classify">
        <img
          src="https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/56507/6/12787/3168/5d9c4b12Ef363dd8d/4af32f42575509d8.png"
          alt=""
        />
      </div>
      <div class="search">
        <input type="text" placeholder="搜索" />
      </div>
      <div class="login">
        <p>登录</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.background {

  position: absolute;
  padding-top: 7px;
  width: 100vw;
  height: 150px;
  background-image: linear-gradient(0deg, #f1503b, #c82519 50%);
  .wrapper {
    // align-items: center;
    justify-content: space-around;
    height: 50px;
  }
}
.classify {
  width: 67px;
  height: 50px;
  img {
    position: relative;
    top: -5px;
    width: 100%;
    height: 100%;
  }
}
.search {
  border-radius: 20px;
  width: 63%;
  height: 30px;
  background-color: white;
  line-height: 30px;
  input {
    font-size: 12px;
    margin-left: 10px;
    padding-left: 15px;
    border: none;
    outline: none;
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