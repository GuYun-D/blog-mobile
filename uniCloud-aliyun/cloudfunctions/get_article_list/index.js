'use strict';

const {
	mainModule
} = require("process");

const db = uniCloud.database()
exports.main = async (event, context) => {
	const {
		classify,
		page = 1,
		pageSize = 10
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
		.skip(pageSize * (page - 1)) // 第一页的数据是从零开始的
		.limit(pageSize) // 每页返回多少数据
		.end()

	const {
		total
	} = await db.collection('article').where(metchObj).count()

	//返回数据给客户端
	return {
		code: 0,
		data: {
			articleList: list.data,
			total
		}
	}
};
