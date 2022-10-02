<template>
	<view class="list-card-container">
		<!-- 基础卡片 -->
		<view class="list-card" v-if="item.mode === 'base'">
			<view class="list-card-img"><image src="https://img1.baidu.com/it/u=3787473611,3330068340&fm=253&fmt=auto&app=138&f=JPEG?w=744&h=389" mode="aspectFill"></image></view>

			<view class="list-card-content">
				<view class="list-card-content-title">
					<text>你还不会用你还不会用你还不会用你还不会用你还不会用你还不会用你还不会用uniapp？</text>
					<SaveLikes></SaveLikes>
				</view>

				<view class="list-card-content-description">
					<view class="article-type">前端开发</view>
					<view class="browse-number">293浏览</view>
				</view>
			</view>
		</view>

		<!-- 多图模式 -->
		<view class="list-card mode-column" v-if="item.mode === 'colum'">
			<view class="list-card-top">
				<text>你还不会用你还不会用你还不会用你还不会用你还不会用你还不会用你还不会用uniapp？</text>
				<SaveLikes></SaveLikes>
			</view>

			<view class="list-card-middle">
				<view class="image-container" v-for="(item, index) in 3" :key="index">
					<image src="https://img1.baidu.com/it/u=3787473611,3330068340&fm=253&fmt=auto&app=138&f=JPEG?w=744&h=389" mode="aspectFill"></image>
				</view>
			</view>

			<view class="list-card-content-description list-card-bottom">
				<view class="article-type">前端开发</view>
				<view class="browse-number">293浏览</view>
			</view>
		</view>

		<!-- 大图模式 -->

		<view class="list-card mode-img" v-if="item.mode === 'image'">
			<view class="list-card-top">
				<view class="image-container"><image src="https://img1.baidu.com/it/u=3787473611,3330068340&fm=253&fmt=auto&app=138&f=JPEG?w=744&h=389" mode="aspectFill"></image></view>
			</view>

			<view class="list-card-middle">
				<text>你还不会用你还不会用你还不会用你还不会用你还不会用你还不会用你还不会用uniapp？</text>
				<SaveLikes></SaveLikes>
			</view>

			<view class="list-card-content-description list-card-bottom">
				<view class="article-type">前端开发</view>
				<view class="browse-number">293浏览</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'ListCard',
	props: {
		item: {
			type: Object,
			required: true
		}
	},
	data() {
		return {};
	}
};
</script>

<style lang="scss" scoped>
@import './css/ListCard.scss';
</style>
