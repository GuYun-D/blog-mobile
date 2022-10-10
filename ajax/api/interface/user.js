import request from "../../request.js";

export const user_login = (data) => {
  return request({
    name: "user_login",
    data,
  });
};
