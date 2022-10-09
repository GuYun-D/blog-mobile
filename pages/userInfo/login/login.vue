<template>
  <view class="login-container">
    <image src="../../../static/img/login_bg.png" class="login-bg" mode="" />
    <view class="login-nav">
      <view
        @click="handleChangeLoginType('account')"
        class="nav-item"
        :class="{ active: type === 'account' }"
        >账号登陆</view
      >
      <view
        @click="handleChangeLoginType('mobile')"
        class="nav-item"
        :class="{ active: type !== 'account' }"
        >手机登录</view
      >
    </view>

    <uni-forms
      class="form"
      ref="form"
      :modelValue="formData"
      :rules="userRules"
    >
      <view v-if="type === 'account'">
        <uni-forms-item label="帐号" name="loginName">
          <input
            type="text"
            placeholder-class="placeholder"
            class="form-input"
            placeholder="请输入帐号"
            v-model="formData.loginName"
          />
        </uni-forms-item>

        <uni-forms-item label="密码" name="password">
          <input
            type="password"
            placeholder-class="placeholder"
            class="form-input"
            placeholder="请输入密码"
            v-model="formData.password"
          />
        </uni-forms-item>
      </view>
      <view v-else>
        <uni-forms-item label="手机号" name="phone">
          <input
            type="text"
            placeholder-class="placeholder"
            class="form-input"
            placeholder="请输入手机号"
            v-model="formData.phone"
          />
        </uni-forms-item>

        <uni-forms-item label="验证码" name="vCode">
          <input
            type="text"
            placeholder-class="placeholder"
            class="form-input"
            placeholder="请输入验证码"
            v-model="formData.vCode"
          />
          <SendCode></SendCode>
        </uni-forms-item>
      </view>

      <button @click="_userLoginSubmit" class="login-btn">立即登录</button>
    </uni-forms>

    <view class="footer-select-container">
      <text>注册</text>
      <text>忘记密码</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        loginName: "",
        password: "",
        phone: "",
        vCode: "",
      },
      type: "account",
    };
  },
  methods: {
    async _userLoginSubmit() {
      const res = await this.$refs.form.validate();
      console.log(res);
    },

    handleChangeLoginType(type) {
      this.type = type;
      // 清空验证
      this.$refs.form.clearValidate([]);
    },
  },
};
</script>

<style lang="scss">
page {
  background-color: #f5f5f5;
}
</style>

<style scoped lang="scss">
@import "./src/style.scss";
</style>
