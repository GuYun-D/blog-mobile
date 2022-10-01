<template>
  <view class="index-container">
    <NavBar></NavBar>
    <TabBar :labelList="labelList"></TabBar>
  </view>
</template>

<script>
export default {
  data() {
    return {
      labelList: [],
    };
  },
  onLoad() {
    this._initLabel();
  },
  methods: {
    _initLabel() {
      uniCloud.callFunction({
        name: "get_label_list",
        success: (res) => {
          this.labelList = res.result.labelList;
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.index-container {
  // @include flex();
}
</style>
