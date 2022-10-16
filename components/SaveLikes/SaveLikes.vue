<template>
  <view class="save-likes-container"
    ><uni-icons
      @click="_saveLicks"
      color="#ff6600"
      :type="isSave ? 'heart-filled' : 'heart'"
      size="20"
    ></uni-icons
  ></view>
</template>

<script>
export default {
  name: "SaveLikes",
  props: {
    articleId: [Number, String],
  },
  data() {
    return {};
  },
  methods: {
    async _saveLicks() {
      await this.checkedIsLogin(); // promise 对象
      const { msg, newUserInfo } = await this.$http.update_save_like({
        articleId: this.articleId,
        userId: this.userInfo._id,
      });

      uni.showToast({
        title: msg,
        duration: 2000,
        icon: "none",
      });

      this.updateUserInfo({ ...this.userInfo, ...newUserInfo });
    },
  },

  computed: {
    isSave() {
      return (
        this.userInfo &&
        this.userInfo.article_likes_ids.includes(this.articleId)
      );
    },
  },
};
</script>
