<template>
    <div class="wrapper">
        <div class="top">
                <div class="top_header">
                    <div class="iconfont top_header_back" @click="handleBackClick">&#xe6db;</div>
                    确认订单
                </div>
                <div class="top_receiver">
                    <div class="top_receiver_title">收货地址</div>
                    <div class="top_receiver_address">山东华宇工学院17号楼920</div>
                    <div class="top_receiver_info">
                        <span class="top_receiver_info_name">Jeff(先生)</span>
                        <span class="top_receiver_info_name">157XXXXXXX</span>
                    </div>
                    <div class="iconfont top_receiver_icon">
                        &#xe6db;
                    </div>
                </div>
        </div>
        <div class="products">
            <ProductList style="background:#fff;position:absolute;left:.18rem;right:.18rem;" />
        </div>
        <div class="productsubmit">
            <span class="productsubmit_real">实付金额</span>
            <span class="productsubmit_order" @click="submitOrder">提交订单</span>
        </div>
        <div class="mask" v-if="turn">
            <div class="mask_content">
                <h3 class="mask_content_title">确认要离开收银台？</h3>
                <p class="mask_content_desc">请尽快完成支付，否则将被取消</p>
                <div class="mask_content_btns">
                    <div @click="handleCancelOrder" class="mask_content_btn mask_content_btn--first">取消订单</div>
                    <div @click="handleConfirmOrder" class="mask_content_btn mask_content_btn--last">确认支付</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProductList from '../../components/ProductList'
import { useRouter } from 'vue-router'
export default {
  name: 'OrderConfirmation',
  data () {
    return {
      turn: true,
      a: 1
    }
  },
  components: {
    ProductList
  },
  methods: {
    handleCancelOrder () {
      this.turn = !this.turn
    },
    handleConfirmOrder () {
      this.turn = !this.turn
    },
    submitOrder () {
      this.turn = true
    }
  },
  setup () {
    const router = useRouter()
    const handleBackClick = () => {
      router.back()
    }
    // const handleCancelOrder = () => {
    // //   alert('cancel')
    //   console.log(this.a)
    // }
    // const handleConfirmOrder = () => {
    // //   alert('confirm')
    //   console.log(this.a)
    // }
    return {
      handleBackClick
    //   handleCancelOrder,
    //   handleConfirmOrder
    }
  }
}
</script>

<style lang="scss" scoped>
    .wrapper{
        position: absolute;
        left:0;
        right:0;
        top:0;
        bottom:0;
        background-color:#eee;
        overflow-y: scroll;
    }
    .top{
        position: relative;
        height:1.96rem;
        background-size: 100% 1.59rem;
        background-image:linear-gradient(0deg,rgba(0,145,255,0.00) 4%,#0091ff 50%);
        background-color:#eee;
        background-repeat: no-repeat;
        &_header{
            position: relative;
            padding-top:.26rem;
            line-height:.24rem;
            color:#fff;
            text-align: center;
            font-size:.16rem;
            &_back{
                position:absolute;
                left:.18rem;
                font-size:.22rem;
            }
        }
        &_receiver{
            position: absolute;
            left:.18rem;
            right:.18rem;
            bottom:0;
            height:1.11rem;
            background:#fff;
            border-radius:.04rem;
            &_title{
                line-height:.22rem;
                padding:.16rem 0 .14rem .16rem;
                font-size:.16rem;
                color:#333;
            }
            &_address{
                line-height: .2rem;
                padding:0 .4rem 0 .16rem;
                font-size:.14rem;
                color:#333;
            }
            &_info{
                padding:.06rem 0 0 .16rem;
                &_name{
                    color:#666;
                    font-size:.12rem;
                    line-height: .18rem;
                    margin-right:.06rem;
                }
            }
            &_icon{
                position: absolute;
                right:.16rem;
                top:.5rem;
                color:#666;
                font-size:.16rem;
                transform: rotate(180deg);
            }
        }
    }
    .products{
        position: relative;
        height:1.96rem;
        background-color:#eee;
        background-repeat: no-repeat;
        margin-top:.2rem;
    }
    .productsubmit{
        background:#fff;
        position:absolute;
        left:0;
        right:0;
        bottom:0;
        height:.4rem;
        &_real{
            position:absolute;
            top:.1rem;
            left:.2rem;
            font-size:.15rem;
            color:#333;
        }
        &_order{
            position:absolute;
            right:0;
            padding:.15rem;
            line-height:.1rem;
            font-size:.12rem;
            background:#0091ff;
            color:#fff;
        }
    }
    .mask{
            z-index: 1;
            position:absolute;
            left:0;
            right:0;
            bottom:0;
            top:0;
            background:rgba(0,0,0,0.5);
            &_content{
                position: absolute;
                top:50%;
                left:50%;
                transform:translate(-50%,-50%);
                width:3rem;
                height:1.56rem;
                background:#fff;
                border-radius:.04rem;
                text-align: center;
                &_title{
                    font-size:.18rem;
                    color:#333;
                    line-height: .26rem;
                    margin:.24rem 0 0 0;
                }
                &_desc{
                    margin-top:.08rem 0 0;
                    font-size:.14rem;
                    color:#666;
                }
                &_btns{
                    display:flex;
                    margin:.24rem .58rem 0 .58rem;
                }
                &_btn{
                    flex:1;
                    width:.8rem;
                    line-height:.32rem;
                    border-radius:.16rem;
                    font-size:.14rem;
                    &--first{
                        margin-right: .12rem;
                        color:#4fb0f9;
                        border:.01rem solid #4fb0f9;
                    }
                    &--last{
                        margin-left:.12rem;
                        background:#4fb0f9;
                        color:#fff;
                    }
                }
            }
       }
</style>
