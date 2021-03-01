<template>
    <div class="wrapper">
      <StaticPart />
      <NearBy  :isvaue="item" />
    </div>
    <Docker />
</template>

<script>
import StaticPart from './StaticPart'
import NearBy from './NearBy'
import Docker from './Docker'
export default {
  name: 'Home',
  components: {
    StaticPart,
    NearBy,
    Docker
  },
  setup () {
    const item = {
      _id: '1',
      name: '沃尔玛',
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
      sales: 10000,
      expressLimit: 0,
      expressPrice: 5,
      slogan: 'VIP尊享满89元减4元包邮'
    }
    return {
      item
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";
@import "../../style/mixins.scss";
.wrapper {
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0.5rem;
  right: 0;
  padding: 0 0.18rem 0.1rem 0.18rem;
}
</style>
