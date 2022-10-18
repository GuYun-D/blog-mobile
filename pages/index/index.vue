<template>
  <view class="index-container">
    <NavBar></NavBar>
    <TabBar
      @changeActiveIndex="handleChangeActiveIndex"
      :activeIndex="activeIndex"
      :labelList="labelList"
    ></TabBar>
    <ArticleList
      @changeActiveIndex="handleChangeActiveIndex"
      :activeIndex="activeIndex"
      :labelList="labelList"
      class="list-container"
    ></ArticleList>
  </view>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      activeIndex: 0,
    };
  },
  onLoad() {
    this._initLabel();
  },
  methods: {
    ...mapMutations(["setLabelList"]),
    async _initLabel() {
      if (this.labelList.length) return;
      const labelList = await this.$http.getLabelListApi();
      this.setLabelList([{ name: "全部" }, ...labelList]);
    },

    // 监听点击导航栏
    handleChangeActiveIndex(index) {
      this.activeIndex = index;
    },
  },

  computed: {
    ...mapState(["labelList"]),
  },
};
</script>

<style lang="scss">
page {
  display: flex;
  height: 100%;
}

.index-container {
  flex: 1;
  box-sizing: border-box;
  @include flex(flex-start, column);
  overflow: hidden;
  align-items: inherit;
}

.list-container {
  flex: 1;
  box-sizing: border-box;
}
</style>
