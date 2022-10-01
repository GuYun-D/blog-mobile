<template>
  <view class="tab-container">
    <scroll-view scroll-x="true" class="tab-scroll">
      <view class="tab-scroll-box">
        <view
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
      <uni-icons type="gear" size="26" color="#666"></uni-icons>
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
  },
  data() {
    return {
      activeIndex: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./css/TabBar.scss";
</style>
