import request from "../../request.js";

export const getLabelListApi = (data) => {
	return request({
		name: "get_label_list",
		data
	});
};

export const getArticleListApi = (data) => {
	return request({
		name: "get_article_list",
		data
	})
}
