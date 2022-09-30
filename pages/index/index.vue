<template>
	<view class="index-container">
		<text>left</text>
		<text>center</text>
		<text>right</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.index-container {
		@include flex();
	}
</style>
