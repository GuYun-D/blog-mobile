export default {
  install(Vue) {
    Vue.mixin({
      data() {
        return {
          mobileReg:
            /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,
          userRules: {
            loginName: {
              rules: [
                {
                  required: true,
                  errorMessage: "账户名不能为空",
                },
                {
                  validateFunction: this.validateLoginName,
                },
              ],
            },

            password: {
              rules: [
                {
                  required: true,
                  errorMessage: "密码不能为空",
                },
              ],
            },

            phone: {
              rules: [
                {
                  required: true,
                  errorMessage: "手机号不能为空",
                },
                {
                  validateFunction: this.validatePhone,
                },
              ],
            },

            vCode: {
              rules: [
                {
                  required: true,
                  errorMessage: "验证码不能为空",
                },
                {
                  validateFunction: this.validateCode,
                },
              ],
            },
          },
        };
      },

      methods: {
        /**
         *
         * @param {*} rule 就是规则 {label, validateFn}
         * @param {*} val 当前的value值
         * @param {*} data 就是表单数据formData
         * @param {*} callBack 回调
         * @returns
         */
        validateLoginName(rule, val, data, callBack) {
          // console.log(rule, val, data, callBack);
          switch (true) {
            case val.length < 6:
              callBack("用户名长度不正确");
              break;

            default:
              return true;
          }
        },

        validatePhone(rules, val, data, cb) {
          switch (true) {
            case !this.mobileReg.test(val):
              cb("手机号码格式错误");
              break;
            default:
              return true;
          }
        },

        validateCode(rules, val, data, cb) {
          return true;
        },
      },
    });
  },
};
