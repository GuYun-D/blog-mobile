<template>
  <view class="list-item-container">
    <scroll-view
      scroll-y="true"
      @scrolltolower="handleListDown"
      class="list-scroll"
    >
      <view>
        <ListCard
          v-for="item in articleList"
          :item="item"
          :key="item.id"
          @saveSearchHistory="$emit('saveSearchHistory')"
        ></ListCard>
        <uni-load-more
          v-if="
            isShowLoadMore &&
            (articleList.length === 0 || articleList.length > 7)
          "
          :status="loadData.loading || 'loading'"
          iconType="snow"
        ></uni-load-more>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: "ListItem",
  props: {
    articleList: {
      type: Array,
      required: true,
    },
    loadData: {
      type: Object,
      default: () => {
        return {
          loading: "loading",
        };
      },
    },

    isShowLoadMore: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    handleListDown() {
      this.$emit("loadMore");
    },
  },
};
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
