'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {

	const {
		article_id
	} = event

	const articleList = await db
		.collection('article')
		.aggregate()
		.match({
			_id: article_id
		})
		.end()


	return {
		code: 0,
		msg: "详情查询成功",
		data: articleList.data[0]
	}
};
