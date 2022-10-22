import request from "../../request.js";

// 用户登录
export const user_login = (data) => {
  return request({
    name: "user_login",
    data,
  });
};

// 获取验证码
export const get_code = (data) => {
  return request({
    name: "get_code",
    data,
  });
};

// 获取文章的评论列表
export const get_comment = (data) => {
  return request({
    name: "get_comment",
    data,
  });
};
