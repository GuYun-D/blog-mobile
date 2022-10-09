<template>
	<view class="save-likes-container"><uni-icons @click="_saveLicks" color="#ff6600" type="heart-filled" size="20"></uni-icons></view>
</template>

<script>
export default {
	name: 'SaveLikes',
	data() {
		return {};
	},
	methods: {
		async _saveLicks() {
			// TODO 判断用户是否登录

			uni.navigateTo({
				url: '/pages/userInfo/login/login'
			});
		}
	}
};
</script>
