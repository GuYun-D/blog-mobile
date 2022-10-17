export default {
  userInfo: uni.getStorageSync("user_info") || null,
  historyList: uni.getStorageSync("save_search_history") || [],
};
