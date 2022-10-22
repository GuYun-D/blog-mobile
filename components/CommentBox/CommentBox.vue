<template>
  <view class="comment-box">
    <view class="comment-header">
      <view class="comment-header-logo">
        <image :src="commentData.author.avatar" mode="" />
      </view>

      <view class="comment-header-info">
        <view class="title">{{ commentData.author.name }}</view>

        <view>
          <uni-dateformat
            :date="commentData.create_time"
            format="yyyy-MM-dd hh:mm:ss"
          ></uni-dateformat>
        </view>
      </view>
    </view>

    <!-- 评论内容 -->
    <view class="comment-content">
      <view> {{ commentData.comment_content }} </view>

      <view class="comment-info">
        <view class="comment-button"> 回复 </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    commentData: Object,
  },
};
</script>

<style lang="scss" scoped>
.comment-box {
  margin: 30rpx 0;

  .comment-header {
    @include flex(flex-start);

    .comment-header-logo {
      width: 60rpx;
      height: 60rpx;
      border-radius: 10rpx;
      flex-shrink: 0;
      overflow: hidden;

      image {
        width: 100%;
        height: 100%;
      }
    }

    .comment-header-info {
      @include flex(flex-start, column);
      align-items: center;
      padding-left: 30rpx;
      font-size: 24upx;
      color: $c-9;
      line-height: 1;

      .title {
        margin-bottom: 20rpx;
        font-size: 28rpx;
        color: #333;
      }
    }
  }

  .comment-content {
    margin-top: 20rpx;
    font-size: 28rpx;
    color: #000;
  }

  .comment-info {
    margin-top: 30rpx;
    display: flex;

    .comment-button {
      padding: 4rpx 20rpx;
      font-size: 24rpx;
      color: $c-9;
      border-radius: 40rpx;
      border: 1px solid #ccc;
    }
  }
}
</style>