<template>
  <div class="wrapper">
    <img
      src="https://img.alicdn.com/imgextra/i1/89/O1CN01ps0Lzq1CWnuWm91qN_!!89-0-luban.jpg"
      alt
      class="wrapper_img"
    />
    <div class="wrapper_input">
      <input
        type="text"
        class="wrapper_input_content"
        placeholder="请输入用户名"
        v-model="data.username"
      />
    </div>
    <div class="wrapper_input">
      <input
        type="password"
        class="wrapper_input_content"
        placeholder="请输入密码"
        v-model="data.password"
      />
    </div>
    <div class="wrapper_login-button" @click="handleLogin">登录</div>
    <div class="wrapper_login-link" @click="registerClick">注册</div>
    <Toast v-if="data.showToast" :message="data.toastMessage" />
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import axios from 'axios'
import { reactive } from 'vue'
import Toast from '../../components/Toast'
export default {
  name: 'Login',
  components: {
    Toast
  },
  methods: {
    registerClick () {
      this.$router.replace('/Register')
    }
  },
  setup () {
    const router = useRouter()
    const data = reactive({
      username: '',
      password: '',
      showToast: false,
      toastMessage: ''
    })
    const handleLogin = () => {
      axios
        .post(
          'https://www.fastmock.site/mock/2a5a6d379832f42586df96f2c32b1e52/',
          {
            username: data.username,
            password: data.password
          }
        )
        .then(() => {
          localStorage.isLogin = true
          router.push({ name: 'Home' })
        })
        .catch(() => {
          data.showToast = true
          data.toastMessage = '登陆失败'
          setTimeout(() => {
            data.showToast = false
            data.toastMessage = ''
          }, 2000)
        })
    }
    return {
      handleLogin,
      data
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
.wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  &_img {
    display: block;
    margin: 0 auto 0.4rem auto;
    width: 0.66rem;
    height: 0.66rem;
  }
  &_input {
    height: 0.48rem;
    margin: 0 0.4rem 0.16rem 0.4rem;
    padding: 0 0.16rem;
    background: #f9f9f9;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    &_content {
      line-height: 0.48rem;
      border: none;
      outline: none;
      width: 100%;
      background: none;
      font-size: 0.16rem;
      color: $content-notice-fontcolor;
      &::placeholder {
        color: $content-notice-fontcolor;
      }
    }
  }
  &_login-button {
    margin: 0.32rem 0.4rem 0 0.4rem;
    line-height: 0.48rem;
    background: #0091ff;
    box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 145, 255, 0.32);
    border-radius: 0.04rem;
    border-radius: 0.04rem;
    color: #fff;
    font-size: 0.16rem;
    text-align: center;
  }
  &_login-link {
    margin: 0.32rem 0.4rem 0 0.4rem;
    line-height: 0.48rem;
    background: #0091ff;
    box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 145, 255, 0.32);
    border-radius: 0.04rem;
    border-radius: 0.04rem;
    color: #fff;
    font-size: 0.16rem;
    text-align: center;
  }
}
</style>
