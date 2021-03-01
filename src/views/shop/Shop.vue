<template>
<div class="wrapper">
    <div class="search">
        <div class="search_back iconfont" @click="handleBackClick">
            &#xe6db;
        </div>
        <div class="search_content">
            <span class="search_content_icon iconfont">&#xe61b;</span>
            <input class="search_content_input" placeholder="请输入商品名称" />
        </div>
    </div>
  <ShopInfo :item="item"  :hideBorder="true"  />
  <Content @acceptProduct="getProduct" />
  <Cart :toCart='productAll' :tosignal='33.6' />
</div>
</template>
<script>
import { useRouter } from 'vue-router'
import ShopInfo from '../../components/ShopInfo'
import Content from './Content'
import Cart from './Cart'
export default {
  name: 'Shop',
  data () {
    return {
      productAll: 0
    }
  },
  components: {
    ShopInfo,
    Content,
    Cart
  },
  methods: {
    getProduct (v) {
      this.productAll = v
    }
  },
  setup () {
    const router = useRouter()
    const item = {
      _id: '1',
      name: '沃尔玛',
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
      sales: 10000,
      expressLimit: 0,
      expressPrice: 5,
      slogan: 'VIP尊享满89元减4元包邮'
    }
    const handleBackClick = () => {
      router.back()
    }
    return {
      item,
      handleBackClick
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
  .wrapper{
      padding: 0 .18rem;
  }
  .search{
    margin: .14rem 0 .04rem 0;
    display:flex;
    line-height:.32rem;
    &_back{
      width:.32rem;
      font-size:.24rem;
      color:#b6b6b6;
    }
    &_content{
        display:flex;
        flex:1;
        line-height:.32rem;
        background:$search-bgColor;
        border-radius:.16rem;
        &_icon{
            width:.44rem;
            text-align:center;
            color:$search-fontColor;
        }
        &_input{
            padding-right:.2rem;
            display:block;
            width:100%;
            height:.32rem;
            border:none;
            outline: none;
            background:none;
            color:$content-fontcolor;
            font-size:.14rem;
            &::placeholder{
                color:$content-fontcolor;
            }
        }
    }
  }
</style>
