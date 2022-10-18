<template>
  <view class="label-container">
    <view class="label-box">
      <view class="label-header">
        <view class="label-title">我的标签</view>
        <view class="label-edit" @click="changeEditStatus">{{
          this.isEdit ? "完成" : "编辑"
        }}</view>
      </view>

      <view class="label-content">
        <view class="label-content-item" v-for="item in 8" :key="item">
          前端开发

          <uni-icons
            v-if="isEdit"
            class="icon-close"
            type="clear"
            color="red"
          ></uni-icons>
        </view>

        <view class="no-data"> 当前没有数据 </view>
      </view>
    </view>

    <view class="label-box">
      <view class="label-header">
        <view class="label-title">标签推荐</view>
      </view>

      <view class="label-content">
        <view class="label-content-item" v-for="item in 7" :key="item">
          前端开发
        </view>

        <view class="no-data"> 当前没有数据 </view>
      </view>
    </view>
  </view>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      isEdit: false,
    };
  },
  methods: {
    // 切换状态
    changeEditStatus() {
      this.isEdit && this.updateLabel();
      this.isEdit = !this.isEdit;
    },

    async updateLabel() {
      console.log(1);
    },
  },

  computed: {
    ...mapState(["labelList"]),
  },
};
</script>

<style lang="scss" scoped>
@import "./css/labelAdmin.scss";
</style>
