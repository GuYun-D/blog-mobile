const requireApi = require.context('./', true, /.js$/); // .代表api的相对路径，递归调用，正则匹配什么样的文件

const module = {}

requireApi.keys().forEach((key, index) => {
	if (key === './index.js') return
	Object.assign(module, requireApi(key))
})

export default module
