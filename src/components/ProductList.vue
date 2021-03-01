<template>
  <div>
    <div class="product_item">
      <img
        class="product_item_img"
        src="http://www.dell-lee.com/imgs/vue3/near.png"
        alt=""
      />
      <div class="product_item_detail">
        <h4 class="product_item_title">番茄250</h4>
        <p class="product_item_sales">月售40</p>
        <p class="product_item_price">
          <span class="product_item_yen">&yen;</span>33.6
          <span class="product_item_origin">&yen;66.6</span>
        </p>
      </div>
      <div class="product_number">
        <span class="product_number_minus" @click='deleteClick' >-</span>
        <span class="product_value" style="margin-left:0px;margin-right:.13rem;"
          >{{productNumber}}</span
        >
        <span class="product_number_plus" @click="addClick">+</span>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
const useCartEffect = () => {
  const store = useStore()
  const cartList = store.state.cartList
  return { cartList }
}
export default {
  name: 'ProductList',
  data () {
    return {
      productNumber: 0
    }
  },
  methods: {
    deleteClick () {
      this.productNumber--
      this.$emit('fromChild', -1)
    },
    addClick () {
      this.productNumber++
      this.$emit('fromChild', 1)
    }
  },
  setup () {
    const { cartList } = useCartEffect()
    return { cartList }
  }
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 1.5rem;
  bottom: 0.5rem;
}
.category {
  overflow-y: scroll;
  height: 100%;
  width: 0.76rem;
  background: #f5f5f5;
  &_item {
    line-height: 0.4rem;
    text-align: center;
    font-size: 14px;
    color: #333;
    &--active {
      background: #fff;
    }
  }
}
.product {
  flex: 1;
  overflow-y: scroll;
  &_item {
    position: relative;
    display: flex;
    padding: 0.12rem 0;
    margin: 0 0.16rem;
    border-bottom: 0.01rem solid #f1f1f1;
    &_img {
      width: 0.68rem;
      height: 0.68rem;
      margin-right: 0.16rem;
    }
    &_title {
      margin: 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: #333;
    }
    &_sales {
      margin: 0.06rem 0;
      line-height: 0.16rem;
      font-size: 0.12rem;
      color: #333;
    }
    &_price {
      margin: 0;
      line-height: 0.16rem;
      font-size: 0.12rem;
      color: #333;
    }
    &_yen {
      font-size: 0.12rem;
    }
    &_origin {
      margin-left: 0.06rem;
      line-height: 0.2rem;
      font-size: 0.12rem;
      color: #999;
      text-decoration: line-through;
    }
    .product_number {
      position: absolute;
      right: 0.18rem;
      bottom: 0.12rem;
      &_minus {
        display: inline-block;
        width: 0.2rem;
        height: 0.2rem;
        border-radius: 50%;
        border: 0.01rem solid #666;
        font-size: 0.2rem;
        text-align: center;
        margin-right: 0.1rem;
      }
      &_plus {
        display: inline-block;
        width: 0.2rem;
        height: 0.2rem;
        border-radius: 50%;
        border: 0.01rem solid #666;
        font-size: 0.2rem;
        text-align: center;
        margin-right: 0.2rem;
        background: #0091ff;
      }
    }
  }
}
</style>
