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
        <view
          class="label-content-item"
          v-for="item in selLabelList"
          :key="item._id"
        >
          {{ item.name }}

          <uni-icons
            @click="deleteLabelItem(item)"
            v-if="isEdit"
            class="icon-close"
            type="clear"
            color="red"
          ></uni-icons>
        </view>

        <view v-if="!selLabelList.length" class="no-data"> 当前没有数据 </view>
      </view>
    </view>

    <view class="label-box">
      <view class="label-header">
        <view class="label-title">标签推荐</view>
      </view>

      <view class="label-content">
        <view
          @click="handleChangeSelList(item)"
          class="label-content-item"
          v-for="item in recommentLabelList"
          :key="item._id"
        >
          {{ item.name }}
        </view>

        <view v-if="!recommentLabelList.length" class="no-data">
          当前没有数据
        </view>
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
      labelListIds: ["6336f791702e9d00019e7096", "6336f791702e9d00019e7099"],
    };
  },
  methods: {
    // 切换状态
    changeEditStatus() {
      this.isEdit && this.updateLabel();
      this.isEdit = !this.isEdit;
    },

    async updateLabel() {
      const labelIds = this.selLabelList.map((item) => item._id);
      const { msg } = await this.$http.update_label_ids({
        userId: this.userInfo._id,
        labelIds,
      });

      uni.showToast({
        title: msg,
        duration: 2000,
      });
    },

    handleChangeSelList(item) {
      if (!this.isEdit) return;
      this.labelListIds.push(item._id);
    },

    deleteLabelItem(item) {
      this.labelListIds = this.labelListIds.filter((id) => id !== item._id);
    },
  },

  computed: {
    ...mapState(["labelList"]),

    selLabelList() {
      return this.labelList.filter((item) =>
        this.labelListIds.includes(item._id)
      );
    },

    recommentLabelList() {
      return this.labelList.filter(
        (item) => !this.labelListIds.includes(item._id)
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./css/labelAdmin.scss";
</style>
