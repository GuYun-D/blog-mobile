<template>
  <view class="article-detail-container">
    <view class="detail-title"> 故宫博物院开奖 </view>

    <view class="detail-header">
      <view class="detail-logo">
        <image src="../../static/img/logo.jpeg" mode="aspectFill" />
      </view>

      <view class="detail-header-conten">
        <view class="detail-header-contant-title"> web 讲师 </view>

        <view class="info">
          <text>2020.02.12 17:50</text>
          <text>173 浏览</text>
          <text>6赞</text>
        </view>
      </view>

      <button type="default" class="detail-header-button">取消关注</button>
    </view>

    <view class="detail-content-container">
      <view class="detail-html"> 文本内容 </view>
    </view>

    <!-- 评论输入组件 -->
    <view class="detail-bottom">
      <view class="input-con">
        <text>谈谈你的看法</text>
        <uni-icons size="16" color="#f07373" type="compose"></uni-icons>
      </view>

      <view class="detail-bottom-icons">
        <view class="detail-bottom-icon-box">
          <uni-icons size="22" color="#f07373" type="chat"></uni-icons>
        </view>

        <view class="detail-bottom-icon-box">
          <uni-icons size="22" color="#f07373" type="heart"></uni-icons>
        </view>

        <view class="detail-bottom-icon-box">
          <uni-icons size="22" color="#f07373" type="hand-up"></uni-icons>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "./css/articleDetail.scss";
</style>
