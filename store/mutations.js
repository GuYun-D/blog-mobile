export default {
  updateUserInfo(state, userInfo) {
    uni.setStorageSync("user_info", userInfo);
    state.userInfo = userInfo;
  },

  // 修改历史记录存储
  setHistory(state, val) {
    let list = state.historyList;
    if (list.length > 0 && list.findIndex((item) => item === val) > -1) {
      return;
    }

    list.unshift(val);

    uni.setStorageSync("save_search_history", list);
    state.historyList = list;
  },

  // 清空历史搜索记录
  clearHistory(state) {
    uni.removeStorageSync("save_search_history");
    state.historyList = null;
  },
};
