<template>
  <div>
    <Search />
    <ClassifyList />
    <BottomBar />
  </div>
</template>

<script>
import Search from "./Search";
import ClassifyList from "./ClassifyList";
import BottomBar from "../BottomBar";

export default {
  components: {
    Search,
    BottomBar,
    ClassifyList,
  },
};
</script>

<style>
</style>