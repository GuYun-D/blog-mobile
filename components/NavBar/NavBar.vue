<template>
  <view class="nav-bar-container">
    <view class="nav-bar-top">
      <!-- 处理 app 以及小程序的导航栏 -->
      <view :style="{ height: statusHeight + 'rpx' }"></view>

      <!-- 当组件作为搜索界面使用的时候，展示回退按钮 -->
      <view
        v-if="isSearch"
        class="return-icon"
        :style="{
          top: statusHeight + 'rpx',
        }"
      >
        <uni-icons
          @click="retuenArticle"
          type="back"
          size="22"
          color="#fff"
        ></uni-icons>
      </view>

      <view
        class="nav-bar-content"
        @click="handleGoSearch"
        :style="{
          marginRight: marginRight + 'rpx',
          marginLeft: isSearch ? '20rpx' : '',
        }"
      >
        <uni-icons type="search" color="#999"></uni-icons>
        <view v-if="!isSearch" class="nav-bar-search-text"
          >输入文章标题进行搜索</view
        >
        <input
          content-type="搜索"
          @confirm="handleSearch"
          v-else
          class="search-input"
          placeholder="输入文章标题进行搜索"
          type="text"
          v-model.trim="searchValue"
        />
      </view>
    </view>
    <!-- 底部的垫片 -->
    <view :style="{ height: statusHeight + 80 + 'rpx' }"></view>
  </view>
</template>

<script>
import uniIcons from "../../uni_modules/uni-icons/components/uni-icons/uni-icons.vue";
export default {
  components: { uniIcons },
  name: "NavBar",
  props: {
    isSearch: {
      type: Boolean,
    },

    parentVal: String,
  },
  created() {
    this.getSystemInfo();
  },
  data() {
    return {
      statusHeight: 20,
      marginRight: 0,
    };
  },
  methods: {
    getSystemInfo() {
      const sysytemInfo = uni.getSystemInfoSync();
      sysytemInfo.statusBarHeight &&
        (this.statusHeight = sysytemInfo.statusBarHeight * 2);

      // #ifdef MP-WEIXIN
      const menuButtonInfo = uni.getMenuButtonBoundingClientRect();
      this.statusHeight = menuButtonInfo.top * 2;
      this.marginRight = menuButtonInfo.width * 2;
      // #endif
    },

    handleGoSearch() {
      if (!this.isSearch) {
        uni.navigateTo({
          url: "/pages/search/search",
        });
      }
    },

    retuenArticle() {
      // #ifdef H5
      uni.switchTab({
        url: "/pages/index/index",
      });
      // #endif

      // #ifndef H5
      uni.navigateBack();
      // #endif
    },

    handleSearch() {
			this.$emit('sendSearchData')
		},
  },

  computed: {
    searchValue: {
      get() {
        return this.parentVal;
      },

      set(val) {
        this.$emit("updateVal", val);
				if(!val){
					this.$emit('sendSearchData')
				}
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./css/NavBar.scss";
</style>
