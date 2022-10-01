<template>
	<swiper :current="activeIndex" @change="handleChangeIndex">
		<swiper-item v-for="(item, index) in labelList" :key="index">
			<view class="swiper-item">
				{{ item.name }}
			</view>
		</swiper-item>
	</swiper>
</template>

<script>
	export default {
		name: "ArticleList",
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
			return {
			};
		},

		methods: {
			handleChangeIndex(e) {
				this.$emit('changeActiveIndex', e.detail.current)
			},
		},
	};
</script>

<style lang="scss" scoped>
</style>
