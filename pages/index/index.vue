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
    async _initLabel() {
			const labelList = await this.$http.getLabelListApi()
			this.labelList = labelList
    },
  },
};
</script>
