'use strict';
const db = uniCloud.database()
// 定义修改指令
const dbCmd = db.command
exports.main = async (event, context) => {

	const {
		articleId,
		userId
	} = event

	// 获取用户数据表的集合
	const userInfo = await db.collection('user').doc(userId).get()
	const articleIds = userInfo.data[0].article_likes_ids

	let msg = null

	let articleArr = null

	if (articleIds.includes(articleId)) {
		// 存在，取消收藏
		articleArr = dbCmd.pull(articleId)
		msg = '取消收藏成功'
	} else {
		// 不存在，收藏
		articleArr = dbCmd.addToSet(articleId)
		msg = '收藏成功'
	}

	// 修改article_likes_ids属性
	await db.collection('user').doc(userId).update({
		article_likes_ids: articleArr
	})

	// 重新获取用户信息返回给前端
	const updateUser = await db.collection('user').doc(userId).get()

	//返回数据给客户端
	return {
		code: 0,
		data: {
			msg,
			newUserInfo: updateUser.data[0]
		}
	}
};
