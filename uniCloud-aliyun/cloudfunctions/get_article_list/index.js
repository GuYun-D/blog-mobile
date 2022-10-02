'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	const {
		classify
	} = event

	let metchObj = {}
	if (classify !== '全部') {
		metchObj = {
			classify
		}
	}

	const list = await db.collection('article')
		.aggregate()
		.match(metchObj) // 根据指定的字段就行过滤
		.project({ // 字段过滤，就是不要content字段了
			content: 0
		})
		.end()


	//返回数据给客户端
	return {
		code: 0,
		data: list.data
	}
};
