<template>
	<swiper class="swiper-container" easing-function="easeOutCubic" :current="activeIndex" @change="handleChangeIndex">
		<swiper-item v-for="(item, index) in labelList" :key="item.id">
			<view class="swiper-item"><ListItem :loadData="loadData[activeIndex]" @loadMore="handleLoadMore" :articleList="articleList[index] || []"></ListItem></view>
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
			articleList: {},
			loadData: {},
			page: 1,
			pageSize: 6
		};
	},

	methods: {
		handleChangeIndex(e) {
			this.$emit('changeActiveIndex', e.detail.current);
			if (!this.articleList[e.detail.current] || !this.articleList[e.detail.current].length) {
				this.getArticleList(e.detail.current);
			}
		},

		// 获取文章列表
		async getArticleList(index) {
			// 指定每一个分类里面的页数信息
			if (!this.loadData[index]) {
				this.loadData[index] = {
					page: 1,
					loading: 'loading',
					total: 0
				};
			}

			const { articleList, total } = await this.$http.getArticleListApi({
				classify: this.labelList[index].name,
				page: this.loadData[index].page,
				pageSize: this.pageSize
			});
			let oldList = this.articleList[index] || [];
			oldList.push(...articleList);
			// this.articleList = articleList;
			this.$set(this.articleList, index, oldList);
			this.loadData[index].total = total;
		},

		// 加载更多
		handleLoadMore() {
			if (this.loadData[this.activeIndex].total <= this.articleList[this.activeIndex].length) {
				this.loadData[this.activeIndex] = {
					...this.loadData[this.activeIndex],
					...{
						loading: 'noMore'
					}
				};

				this.$forceUpdate();
				return;
			}
			this.loadData[this.activeIndex].page++;
			this.getArticleList(this.activeIndex);
		}
	},

	watch: {
		labelList: {
			handler(newValue) {
				if (newValue.length) {
					this.getArticleList(this.activeIndex);
				}
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
