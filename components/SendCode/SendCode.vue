<template>
  <view class="code-container">
    <view class="vCode-btn" @click="getForm">
      {{ runtime ? `${time}s后获取` : "获取验证码" }}
    </view>
  </view>
</template>

<script>
export default {
  props: {
    form: Object,
  },
  data() {
    return {
      timer: null,
      time: 60,
      runtime: false,
    };
  },
  beforeDestroy() {
    clearInterval(this.timer);
    this.timer = null;
    this.runtime = false;
    this.time = 60;
  },
  methods: {
    // 获取form的ref
    getForm() {
      if (this.runtime) {
        return;
      }
      this.$emit("getForm", this.sendeCode);
    },
    async sendeCode(form) {
      const { phone } = await form.validateField(["phone"]);
      const { mobileCode, msg } = await this.$http.get_code({ phone });
      uni.showToast({
        title: msg,
        duration: 2000
      });
      this.$emit('setCurrentCode', mobileCode)
      this.runtime = true;
      this.timeRunning();
    },

    // 定时器计时
    timeRunning() {
      this.timer = setInterval(() => {
        if (this.time === 1) {
          clearInterval(this.timer);
          this.timer = null;
          this.runtime = false;
          this.time = 60;
          return;
        }
        this.time--;
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
.code-container {
  flex-shrink: 0;
  margin-right: 20upx;

  .vCode-btn {
    background-color: $base-color;
    color: #fff;
    padding: 20rpx;
    opacity: 0.8;
    border-radius: 10rpx;
  }
}
</style>