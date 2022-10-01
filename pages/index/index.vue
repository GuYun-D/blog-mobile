<template>
	<view class="index-container">
		<NavBar></NavBar>
		<TabBar @changeActiveIndex="handleChangeActiveIndex" :activeIndex="activeIndex" :labelList="labelList"></TabBar>
		<ArticleList @changeActiveIndex="handleChangeActiveIndex" :activeIndex="activeIndex" :labelList="labelList"
			class="list-container"></ArticleList>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				labelList: [],
				activeIndex: 0
			};
		},
		onLoad() {
			this._initLabel();
		},
		methods: {
			async _initLabel() {
				const labelList = await this.$http.getLabelListApi();
				this.labelList = labelList;
			},

			// 监听点击导航栏
			handleChangeActiveIndex(index) {
				this.activeIndex = index
			}
		},
	};
</script>

<style lang="scss">
	page {
		display: flex;
		height: 100%;
	}

	.index-container {
		flex: 1;
		box-sizing: border-box;
		@include flex(flex-start, column);
		overflow: hidden;
		align-items: inherit;
	}

	.list-container {
		flex: 1;
		box-sizing: border-box;
	}
</style>
