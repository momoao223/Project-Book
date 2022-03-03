<template>
  <div>
    <TypeNav/>
    <ListContainer/>
    <TodayRecommend/>
  </div>
</template>

<script>
//非路由组件在使用的时候分为三大步：定义、注册、使用
import ListContainer from "./ListContainer"
import TodayRecommend from "./TodayRecommend"

export default {
  name: 'Home',
  data () {
    return {}
  },
  components: {
    ListContainer,
    TodayRecommend
  }
}
</script>

<style lang="less" scoped>

</style>
