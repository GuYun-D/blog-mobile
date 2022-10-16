import { mapState, mapMutations } from "vuex";

export default {
  install(Vue) {
    Vue.mixin({
      data() {
        return {
        };
      },

      methods: {
        ...mapMutations(["updateUserInfo"]),
        checkedIsLogin() {
          // 获取用户信息
          return new Promise((resolve, reject) => {
            if (this.userInfo) {
              resolve();
            } else {
              uni.navigateTo({
                url: "/pages/userInfo/login/login",
              });
            }
          });
        },
      },

      computed: {
        ...mapState(["userInfo"]),
      },
    });
  },
};
