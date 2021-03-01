<template>
<div class="cart">
    <div class="product" v-if="turn">
        <button class="product_clear" style="position:fixed;top:0;left:50%;z-index:1;" @click="clearBtn">清空购物车</button>
        <ProductList v-for="item in toCart" :key="item" />
    </div>
    <div class="check">
        <div class="check_icon">
            <img class="check_icon_img" @click="turnClick" src="http://www.dell-lee.com/imgs/vue3/basket.png" alt="">
            <div class="check_icon_tag">{{toCart}}</div>
        </div>
        <div class="check_info">
            总计:<span class="check_info_price">&yen;{{toCart*tosignal}}</span>
        </div>
        <div class="check_btn">
            <router-link :to="{name: 'orderConfirmation'}">
                去结算
            </router-link>
        </div>
    </div>
</div>
</template>

<script>
import ProductList from '../../components/ProductList'
export default {
  name: 'Cart',
  data () {
    return {
      turn: false
    }
  },
  methods: {
    turnClick () {
      this.turn = !this.turn
    },
    clearBtn () {
    }
  },
  props: ['toCart', 'tosignal'],
  components: {
    ProductList
  }
}
</script>

<style lang="scss" scoped>
a{
    text-decoration: none;
    color:#fff;
    font-weight:bold;
}
.cart{
    position:absolute;
    left:0;
    right:0;
    bottom:0;
}
.product{
    border:1px solid #ccc;
    background:#fff;
    &_clear{
        text-align:center;
        margin:0 auto;
        display:flex;
        flex:1;
        padding:.05rem;
    }
}
.check{
    display:flex;
    height:.49rem;
    border-top:.01rem solid #f1f1f1;
    line-height:.49rem;
    &_icon{
        position: relative;
        width:.84rem;
        &_img{
            width:.28rem;
            height:.26rem;
            display:block;
            margin:.12rem auto;
        }
        &_tag{
            position: absolute;
            right:.2rem;
            top:.04rem;
            width:.2rem;
            height:.2rem;
            line-height:.2rem;
            background: #e93b3b;
            border-radius: 50%;
            font-size:.12rem;
            text-align:center;
            color:#fff;
            transform:scale(.5);
        }
    }
    &_info{
     flex:1;
     font-size:.12rem;
     &_price{
         color:#e93b3b;
         font-size:.18rem;
     }
    }
    &_btn{
            width:.98rem;
            background:#4fb0f9;
            color:#fff;
            font-size:.14rem;
            text-align:center;
    }
}
</style>
