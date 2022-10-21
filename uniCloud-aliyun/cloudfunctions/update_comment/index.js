"use strict";

const { log } = require("console");

const db = uniCloud.database();
const dbCmd = db.command;
exports.main = async (event, context) => {
  const { userId, article_id, content } = event;

  let user = await db.collection("user").doc(userId).get();
	
	log("操了", user)
  user = user.data[0];

  // const article = await db.collection("article").doc(article_id).get();

  let commentObj = {
    comment_id: generateId(5),
    comment_content: content,
    create_time: Date.now(),
    is_reply: false,
    replyArr: [],
    author: {
      author_id: user._id,
      author_name: user.author_name,
      avatar: user.avatar,
      professional: user.professional,
    },
  };

  commentObj = dbCmd.unshift(commentObj);

  await db.collection("article").doc(article_id).update({
    comments: commentObj,
  });

  // 生成id的方法
  function generateId(number) {
    return Number(
      Math.random().toString().substr(3, number) + Date.now().toString(36)
    );
  }

  //返回数据给客户端
  return {
    code: 0,
    msg: "添加成功",
  };
};
