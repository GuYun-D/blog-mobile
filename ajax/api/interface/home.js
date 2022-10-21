import request from "../../request.js";

export const getLabelListApi = (data) => {
  return request(
    {
      name: "get_label_list",
      data,
    },
    false
  );
};

export const getArticleListApi = (data) => {
  return request(
    {
      name: "get_article_list",
      data,
    },
    false
  );
};

// 添加/取消文章收藏
export const update_save_like = (data) => {
  return request({
    name: "update_save_like",
    data,
  });
};

// 搜索文章
export const get_search_data = (data) => {
  return request({
    name: "get_search_data",
    data,
  });
};

// 更新选项卡
export const update_label_ids = (data) => {
  return request({
    name: "update_label_ids",
    data,
  });
};

// 文章详情
export const get_article_detail = (data) => {
  return request({
    name: "get_article_detail",
    data,
  });
};

// 发布评论
export const update_comment = (data) => {
  return request({
    name: "update_comment",
    data,
  });
};
