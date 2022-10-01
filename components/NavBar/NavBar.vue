<template>
	<view class="nav-bar-container">
		<view class="nav-bar-top">
			<!-- 处理 app 以及小程序的导航栏 -->
			<view :style="{height: statusHeight + 'rpx'}"></view>
			<view class="nav-bar-content" @click="handleGoSearch" :style="{marginRight: marginRight + 'rpx'}">
				<uni-icons type="search" color="#999"></uni-icons>
				<view class="nav-bar-search-text"> 输入文章标题进行搜索 </view>
			</view>
		</view>
		<!-- 底部的垫片 -->
		<view :style="{height: statusHeight + 80 + 'rpx'}"> </view>
	</view>
</template>

<script>
	export default {
		name: "NavBar",
		created() {
			this.getSystemInfo();
		},
		data() {
			return {
				statusHeight: 20,
				marginRight: 0
			};
		},
		methods: {
			getSystemInfo() {
				const sysytemInfo = uni.getSystemInfoSync();
				sysytemInfo.statusBarHeight &&
					(this.statusHeight = sysytemInfo.statusBarHeight * 2);

				// #ifdef MP-WEIXIN
				const menuButtonInfo = uni.getMenuButtonBoundingClientRect();
				this.statusHeight = menuButtonInfo.top * 2
				this.marginRight = menuButtonInfo.width * 2
				// #endif
			},

			handleGoSearch() {
				uni.navigateTo({
					url: "/pages/search/search"
				})
			}
		},
	};
</script>

<style lang="scss" scoped>
	@import "./css/NavBar.scss";
</style>
