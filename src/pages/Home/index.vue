<template>
  <div>
    <!-- 全局的三级菜单 -->
    <TypeNav />
    <ListContainer />
    <TodayRecommend />
    <Rank />
    <Like />
    <Floor/>
    <Brand />
  </div>
</template>

<script>
//非路由组件在使用的时候分为三大步：定义、注册、使用
import ListContainer from "./ListContainer";
import TodayRecommend from "./TodayRecommend";
import Rank from "./Rank";
import Like from "./Like";
import Brand from "./Brand";
import Floor from "./Floor";
export default {
  name: "",
  components: {
    ListContainer,
    TodayRecommend,
    Rank,
    Like,
    Brand,
    Floor,
  }
  
};
</script>

<style scoped></style>
