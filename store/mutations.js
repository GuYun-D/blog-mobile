export default {
  updateUserInfo(state, userInfo) {
    uni.setStorageSync("user_info", userInfo);
    state.userInfo = userInfo;
  },
};
