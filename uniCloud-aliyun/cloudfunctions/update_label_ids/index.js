'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	const {
		userId,
		labelIds
	} = event

	await db.collection('user').doc(userId).update({
		label_ids: labelIds
	})

	//返回数据给客户端
	return {
		code: 0,
		data: {
			msg: '修改成功'
		}
	}
};
