<template>
  <view class="list-card-container" v-if="item" @click="goArticleDetail">
    <!-- 基础卡片 -->
    <view class="list-card" v-if="item.mode === 'base'">
      <view class="list-card-img">
        <image
          :src="
            item.cover[0] ||
            'https://img2.baidu.com/it/u=2040056122,3729491996&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=361'
          "
          mode="aspectFill"
        ></image>
      </view>

      <view class="list-card-content">
        <view class="list-card-content-title">
          <text>{{ item.title }}</text>
          <SaveLikes :articleId="item._id"></SaveLikes>
        </view>

        <view class="list-card-content-description">
          <view class="article-type">{{ item.classify }}</view>
          <view class="browse-number">{{ item.browse_count }}浏览</view>
        </view>
      </view>
    </view>

    <!-- 多图模式 -->
    <view class="list-card mode-column" v-if="item.mode === 'colum'">
      <view class="list-card-top">
        <text>{{ item.title }}</text>
        <SaveLikes :articleId="item._id"></SaveLikes>
      </view>

      <view class="list-card-middle">
        <view
          class="image-container"
          v-for="(img, index) in item.cover.slice(0, 3)"
          :key="index"
          ><image :src="img"></image
        ></view>
      </view>

      <view class="list-card-content-description list-card-bottom">
        <view class="article-type">{{ item.classify }}</view>
        <view class="browse-number">{{ item.browse_count }}</view>
      </view>
    </view>

    <!-- 大图模式 -->

    <view class="list-card mode-img" v-if="item.mode === 'image'">
      <view class="list-card-top">
        <view class="image-container"
          ><image :src="item.cover[0]" mode="aspectFill"></image
        ></view>
      </view>

      <view class="list-card-middle">
        <text>{{ item.title }}</text>
        <SaveLikes :articleId="item._id"></SaveLikes>
      </view>

      <view class="list-card-content-description list-card-bottom">
        <view class="article-type">{{ item.classify }}</view>
        <view class="browse-number">{{ item.browse_count }}</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "ListCard",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },

  methods: {
    goArticleDetail() {
      this.$emit("saveSearchHistory");

      console.log(this.item);
      const { _id, title, author, create_time, thumbs_up_count, browse_count } =
        this.item;
      const params = {
        _id,
        title,
        author,
        create_time,
        thumbs_up_count,
        browse_count,
      };
      uni.navigateTo({
        url: `/pages/articleDetail/articleDetail?params=${JSON.stringify(
          params
        )}`,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./css/ListCard.scss";
</style>
