<template>
  <div class="docker">
    <div v-for="(item,index) in dockerList" :class="{'docker_itme':true,'docker_item--active':index===0}" class="docker_item" :key="item.icon">
      <div class="iconfont" v-html="item.icon"></div>
      <div class="docker_title">{{item.text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Docker',
  setup () {
    const dockerList = [
      { icon: '&#xe608;', text: '首页' },
      { icon: '&#xe600;', text: '购物车' },
      { icon: '&#xe619;', text: '订单' },
      { icon: '&#xe6a7;', text: '我的' }
    ]
    return {
      dockerList
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";
.docker {
  display: flex;
  box-sizing: border-box;
  position: absolute;
  padding: 0 0.18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top: 0.01rem solid $content-bgColor;
  color: $content-fontcolor;
  &_item {
    flex: 1;
    text-align: center;
    .iconfont {
      margin: 0.07rem 0 0.02rem 0;
      font-size: 0.18rem;
    }
    &--active {
      color: #1fa4fc;
    }
  }
}
.docker_title {
  font-size: 0.2rem;
  transform: scale(0.5, 0.5);
  transform-origin: center top;
}
</style>
