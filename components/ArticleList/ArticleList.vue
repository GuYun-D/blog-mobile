<template>
	<swiper class="swiper-container" easing-function="easeOutCubic" :current="activeIndex" @change="handleChangeIndex">
		<swiper-item v-for="(item, index) in labelList" :key="index">
			<view class="swiper-item"><ListItem :articleList="articleList"></ListItem></view>
		</swiper-item>
	</swiper>
</template>

<script>
export default {
	name: 'ArticleList',
	props: {
		labelList: {
			type: Array,
			required: true
		},
		activeIndex: {
			type: Number,
			required: true
		}
	},
	created() {
		// this.getArticleList();
	},
	data() {
		return {
			articleList: []
		};
	},

	methods: {
		handleChangeIndex(e) {
			this.$emit('changeActiveIndex', e.detail.current);
			this.getArticleList(e.detail.current)
		},

		// 获取文章列表
		async getArticleList(index) {
			const articleList = await this.$http.getArticleListApi({
				classify: this.labelList[index].name
			});
			this.articleList = articleList;
		}
	},

	watch: {
		labelList: {
			handler(newValue) {
				this.getArticleList(this.activeIndex);
			},
			immediate: true,
			deep: true
		}
	}
};
</script>

<style lang="scss" scoped>
.swiper-container {
	height: 100%;

	.swiper-item {
		height: 100%;
		overflow: hidden;
	}
}
</style>
