'use strict';
const db = uniCloud.database()

exports.main = async (event, context) => {
	const label = db.collection('label')
	const res = await label.get()

	//返回数据给客户端
	return {
		code: 0,
		data: res.data
	}
};
