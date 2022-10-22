<template>
  <view class="article-detail-container">
    <view class="detail-title"> {{ articleDetail.title }} </view>

    <view class="detail-header">
      <view class="detail-logo">
        <image :src="articleDetail.author.avatar" mode="aspectFill" />
      </view>

      <view class="detail-header-conten">
        <view class="detail-header-contant-title">
          {{ articleDetail.author.author_name }}
        </view>

        <view class="info">
          <text>{{ articleDetail.create_time }}</text>
          <text>{{ articleDetail.browse_count }} 浏览</text>
          <text>{{ articleDetail.thumbs_up_count }}赞</text>
        </view>
      </view>

      <button type="default" class="detail-header-button">取消关注</button>
    </view>

    <!-- <view class="detail-content-container">
      <view class="detail-html">
        <u-parse
          :content="content"
          @preview="preview"
          @navigate="navigate"
        ></u-parse>
      </view>
    </view> -->

    <!-- 评论列表 -->
    <view class="detail-comment">
      <view class="comment-title"> 最近评论 </view>
      <view
        class="comment-content-container"
        v-for="item in commentList"
        :key="item._comment_id"
      >
        <CommentBox :commentData="item"></CommentBox>
      </view>
      <view v-if="!commentList.length" class="no-data"> 暂无评论 </view>
    </view>

    <!-- 评论输入组件 -->
    <view class="detail-bottom">
      <view class="input-con" @click="opMaskerComment">
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

    <commonMaker
      @close="showPopup = false"
      @confirm="handleSendComment"
      :showPopup="showPopup"
    ></commonMaker>
  </view>
</template>

<script>
import uParse from "@/components/u-parse/u-parse.vue";
import { marked } from "marked";

export default {
  components: {
    uParse,
  },
  data() {
    return {
      articleDetail: null,
      showPopup: false,
      commentList: [],
    };
  },
  methods: {
    async getArticleDetail() {
      const res = await this.$http.get_article_detail({
        article_id: this.articleDetail._id,
      });

      this.articleDetail = res;
    },

    // 打开弹窗
    async opMaskerComment() {
      await this.checkedIsLogin();
      this.showPopup = true;
    },

    // 发送评论
    async handleSendComment(text) {
      const res = await this.$http.update_comment({
        userId: this.userInfo._id,
        article_id: this.articleDetail._id,
        content: text,
      });
      uni.showToast({
        title: "评论成功",
        duration: 2000,
      });
      this.showPopup = false;
    },

    // 获取评论列表
    async getCommentList() {
      const res = await this.$http.get_comment({
        articleId: this.article_id,
      });

      this.commentList = res;
    },
  },

  onLoad(options) {
    this.articleDetail = JSON.parse(options.params);
    // 文章详情
    this.getArticleDetail();

    // 初始化评论
    this.getCommentList();
  },

  computed: {
    content() {
      return this.articleDetail.content
        ? marked(this.articleDetail.content)
        : "";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./css/articleDetail.scss";
@import url("@/components/u-parse/u-parse.css");
</style>
