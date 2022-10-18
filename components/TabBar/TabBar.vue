<template>
  <view class="tab-container">
    <scroll-view
      :scroll-into-view="currentId"
      scroll-with-animation
      scroll-x="true"
      class="tab-scroll"
    >
      <view class="tab-scroll-box">
        <view
          @click="handleActiveIndex(index)"
          :id="`item${index}`"
          :class="{
            active: activeIndex === index,
          }"
          class="tab-scroll-item"
          v-for="(item, index) in labelList"
          :key="index"
          >{{ item.name }}</view
        >
      </view>
    </scroll-view>
    <!-- 图标部分 -->
    <view class="tab-icon">
      <uni-icons
        @click="handleToTags"
        type="gear"
        size="26"
        color="#666"
      ></uni-icons>
    </view>
  </view>
</template>

<script>
export default {
  name: "TabBar",
  props: {
    labelList: {
      type: Array,
      required: true,
    },
    activeIndex: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {};
  },

  methods: {
    // 点击item切换页面
    handleActiveIndex(index) {
      this.$emit("changeActiveIndex", index);
    },

    // 去标签管理页面
    async handleToTags() {
      await this.checkedIsLogin();
      uni.navigateTo({
        url: "/pages/labelAdmin/labelAdmin",
      });
    },
  },

  computed: {
    currentId() {
      return `item${this.activeIndex}`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./css/TabBar.scss";
</style>
