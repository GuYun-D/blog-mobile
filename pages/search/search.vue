<template>
  <view class="search-container">
    <NavBar
      @sendSearchData="sendSearchData"
      isSearch
      @updateVal="parentVal = $event"
      :parentVal="parentVal"
    ></NavBar>

    <view class="search-wrapper">
      <!-- 没搜索时 -->
      <view v-if="isShowHistory">
        <view class="search-history-conta">
          <view class="search-header">
            <text class="history-text">搜索历史</text>
            <text class="history-clean" @click="clearHistory">清空</text>
          </view>

          <!-- 内容 -->
          <view
            v-if="historyList && historyList.length"
            class="search-history-content"
          >
            <view
              class="history-content-item"
              v-for="(item, index) in historyList"
              :key="index"
              @click="openHistory(item)"
            >
              {{ item }}
            </view>
          </view>

          <!-- 无历史 -->
          <view v-else class="no-data"> 当前没有搜索历史 </view>
        </view>
      </view>

      <!-- 开始搜索操作 -->
      <view v-else class="search-list-container">
        <ListItem
          @saveSearchHistory="saveSearchHistory"
          :isShowLoadMore="false"
          :articleList="searchList"
          v-if="searchList.length"
        ></ListItem>
        <view v-else class="no-data"> 没有搜索到相关数据 </view>
      </view>
    </view>
  </view>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  data() {
    return {
      parentVal: "",
      searchList: [],
      isShowHistory: true,
    };
  },
  methods: {
    ...mapMutations(["setHistory", "clearHistory"]),
    async sendSearchData() {
      this.isShowHistory = false;
      if (!this.parentVal) {
        this.searchList = [];
        this.isShowHistory = true;
        return;
      }

      const res = await this.$http.get_search_data({
        searchVal: this.parentVal,
      });

      this.searchList = res.articleList;
    },

    saveSearchHistory() {
      // console.log(this.parentVal);
      this.setHistory(this.parentVal);
    },

    openHistory(text) {
      this.parentVal = text;
    },
  },

  computed: {
    ...mapState(["historyList"]),
  },
};
</script>

<style lang="scss" scoped>
@import "./scss/search.scss";
</style>
