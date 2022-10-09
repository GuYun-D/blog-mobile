<template>
  <view class="code-container">
    <view class="vCode-btn"> 获取验证码 </view>
  </view>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.code-container {
  flex-shrink: 0;
  margin-right: 20upx;

  .vCode-btn {
    background-color: $base-color;
    color: #fff;
    padding: 20rpx;
    opacity: .8;
    border-radius: 10rpx;
  }
}
</style>