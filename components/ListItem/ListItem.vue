<template>
	<view class="list-item-container">
		<scroll-view scroll-y="true" class="list-scroll">
			<view>
				<ListCard v-for="(item, index) in itemList" :item="item" :key="index"></ListCard>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: "ListItem",
		data() {
			return {
				itemList: [{
					mode: 'base'
				}, {
					mode: 'image'
				}, {
					mode: 'base'
				}, {
					mode: 'base'
				}]
			};
		}
	}
</script>

<style lang="scss" scoped>
	.list-item-container {
		height: 100%;

		.list-scroll {
			overflow: hidden;
			height: 100%;
			box-sizing: border-box;
		}
	}
</style>
