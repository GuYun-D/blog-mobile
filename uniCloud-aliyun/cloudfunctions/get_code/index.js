"use strict";
exports.main = async (event, context) => {
  const { phone } = event;

  const currentNumber = Math.random().toString().substr(2, 6);

  try {
    const res = await uniCloud.sendSms({
      appid: "__UNI__EDBCE69",
      smsKey: "131e74b4cd116e3a20f6c0c76124a86f",
      smsSecret: "ce1f342dde86c27c71a0e7a3457deffe",
      phone: phone,
      templateId: "15949",
      data: {
        code: currentNumber,
        expMinute: "1",
      },
    });
    // 调用成功，请注意这时不代表发送成功
    return {
      code: 0,
      data: {
        msg: "请在手机注意查收验证码",
        mobileCode: currentNumber,
      },
    };
  } catch (err) {
    return {
      code: 1,
      msg: err,
    };
  }
};
