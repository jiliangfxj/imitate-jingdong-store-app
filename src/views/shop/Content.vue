<template>
  <div class="content">
      <div class="category">
          <div class="category_item category_item--active">全部商品</div>
          <div class="category_item">秒杀</div>
          <div class="category_item">新鲜水果</div>
          <div class="category_item">休闲食品</div>
          <div class="category_item">进口蔬菜</div>
          <div class="category_item">粮油副食</div>
      </div>
      <!-- product -->
      <div class="product">
          <ProductList @fromChild="getChild" @click="toShop" />
          <ProductList @fromChild="getChild" @click="toShop" />
          <ProductList @fromChild="getChild" @click="toShop" />
          <ProductList @fromChild="getChild" @click="toShop" />
          <ProductList @fromChild="getChild" @click="toShop" />
      </div>
  </div>
</template>

<script>
import ProductList from '../../components/ProductList'
export default {
  name: 'Content',
  data () {
    return {
      childResult: 0
    }
  },
  components: {
    ProductList
  },
  methods: {
    getChild (v) {
      this.childResult += v
    },
    toShop () {
      this.$emit('acceptProduct', this.childResult)
    }
  }
}
</script>

<style lang="scss" scoped>
.content{
    display: flex;
    position: absolute;
    left:0;
    right:0;
    top:1.5rem;
    bottom:.5rem;
}
.category{
    overflow-y:scroll;
    height:100%;
    width:.76rem;
    background:#f5f5f5;
    &_item{
        line-height:.4rem;
        text-align:center;
        font-size:14px;
        color:#333;
        &--active{
            background:#fff;
        }
    }
}
.product{
    flex:1;
    overflow-y:scroll;
    &_item{
        position:relative;
        display:flex;
        padding: .12rem 0;
        margin:0 .16rem;
        border-bottom: .01rem solid #f1f1f1;
        &_img{
            width:.68rem;
            height:.68rem;
            margin-right:.16rem;
        }
        &_title{
            margin:0;
            line-height:.2rem;
            font-size:.14rem;
            color:#333;
        }
        &_sales{
            margin:.06rem 0;
            line-height:.16rem;
            font-size:.12rem;
            color:#333;
        }
         &_price{
            margin:0;
            line-height:.16rem;
            font-size:.12rem;
            color:#333;
        }
        &_yen{
            font-size:.12rem;
        }
        &_origin{
            margin-left:.06rem;
            line-height:.2rem;
            font-size:.12rem;
            color:#999;
            text-decoration:line-through;
        }
        .product_number{
            position:absolute;
            right:.18rem;
            bottom:.12rem;
            &_minus{
                display:inline-block;
                width:.2rem;
                height:.2rem;
                border-radius:50%;
                border:.01rem solid #666;
                font-size:.2rem;
                text-align:center;
                margin-right:.1rem;
            }
            &_plus{
                display:inline-block;
                width:.2rem;
                height:.2rem;
                border-radius:50%;
                border:.01rem solid #666;
                font-size:.2rem;
                text-align:center;
                margin-right:.2rem;
                background:#0091ff;
            }
        }
    }
}
</style>
