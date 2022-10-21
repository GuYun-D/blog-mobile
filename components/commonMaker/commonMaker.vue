<template>
  <view>
    <uni-popup ref="popupRef" type="bottom">
      <!-- 内容区域 -->
      <view class="popup-wrapper">
        <view class="popup-header">
          <view class="popup-header-item" @click="handelClosePopup">取消</view>
          <view class="popup-header-item" @click="handleSend">发布</view>
        </view>

        <view class="popup-content">
          <textarea
            v-model.trim="commentVal"
            placeholder="请输入评论内容"
            maxlength="200"
          ></textarea>

          <view class="popup-content-count"> {{ commentVal.length }}/200</view>
        </view>
      </view>
    </uni-popup>
  </view>
</template>

<script>
export default {
  name: "commonMaker",
  props: {
    showPopup: Boolean,
  },
  data() {
    return {
      commentVal: "",
    };
  },

  watch: {
    showPopup(newVal) {
      const el = this.$refs.popupRef;
      newVal ? el.open() : el.close();
    },
  },

  methods: {
    handelClosePopup() {
      this.$emit("close");
      this.commentVal = "";
    },

    handleSend() {
      if (!this.commentVal) {
        uni.showToast({
          title: "请输入评论内容",
          duration: 2000,
          icon: "none",
        });

        return;
      }
      this.$emit("confirm", this.commentVal);
    },
  },
};
</script>

<style lang="scss" scoped>
.popup-wrapper {
  background-color: #fff;

  .popup-header {
    @include flex();
    font-size: 28rpx;
    color: #666;
    border-bottom: 1px solid #f5f5f5;

    .popup-header-item {
      height: 100rpx;
      line-height: 100rpx;
      padding: 0 30rpx;
    }
  }

  .popup-content {
    width: 100%;
    padding: 30rpx;
    box-sizing: border-box;

    textarea {
      height: 400rpx;
      width: 100%;
    }

    .popup-content-count {
      font-size: 24upx;
      color: $c-9;
      @include flex(flex-end);
    }
  }
}
</style>