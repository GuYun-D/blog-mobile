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
          <SendCode @getForm="getFOrm"></SendCode>
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
import { mapMutations } from "vuex";
export default {
  onReady() {
    this.$refs.form.setRules(this.userRules);
  },
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
    ...mapMutations(["updateUserInfo"]),
    async _userLoginSubmit() {
      const res = await this.$refs.form.validate();
      this._sendUserInfo({
        ...res,
        type: this.type,
      });
    },

    handleChangeLoginType(type) {
      this.type = type;
      // 清空验证
      this.$refs.form.clearValidate([]);
    },

    async _sendUserInfo() {
      const userInfo = await this.$http.user_login(this.formData);
      if (userInfo) {
        this.updateUserInfo(userInfo);
        uni.showToast({
          title: "登录成功",
          duration: 2000,
        });

        setTimeout(() => {
          uni.navigateBack();
        }, 1500);
      }
    },

    // 像验证码组件发送form表单组件
    getFOrm(cb) {
      cb && cb(this.$refs.form);
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
