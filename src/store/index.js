import { createStore } from 'vuex'

export default createStore({
  state: {
    cartList: {
      // 商铺id
      1: {
        // 商品id
        111: {
          title: '番茄250g/份',
          imgUrl: 'http://www.dell-lee.com/imgs/vue3/tomato.png',
          sales: 10,
          price: 33.6,
          oldPrice: 39.6,
          count: 2
        }
      }
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
