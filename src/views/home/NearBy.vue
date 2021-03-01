<template>
  <div class="nearby">
    <h3 class="nearby_title">附近店铺</h3>
    <router-link :to="`/shop/${item._id}`" v-for="item in nearByList" :key="item.id" >
    <ShopInfo :item="item" />
    </router-link>
  </div>
</template>
<script>
import ShopInfo from '../../components/ShopInfo'
export default {
  name: 'NearBy',
  props: ['isvaue'],
  components: {
    ShopInfo
  },
  setup () {
    const nearByList = [
      {
        _id: 1,
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
        name: '沃尔沃',
        sales: 10000,
        expressLimit: 0,
        expressPrice: 5,
        slogan: 'VIP尊享满89元减4元包邮'
      },
      {
        _id: 2,
        imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
        name: '榴莲',
        sales: 10000,
        expressLimit: 0,
        expressPrice: 5,
        slogan: 'VIP尊享满89元减4元包邮'
      }
    ]
    return { nearByList }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
.nearby {
  &_title {
    margin: 0.16rem 0 0.02rem 0;
    font-size: 0.18rem;
    font-weight: normal;
    color: $content-fontcolor;
  }
  a{
    text-decoration: none;
  }
}
</style>
