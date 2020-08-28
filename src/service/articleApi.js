const ARTICLE_API = {
	// 获取获取联系人列表
	getArticleList: {
		method: 'get',
		url: '/articleInfo/view'
	},
	// 新建文章
	newArticle: {
		method: 'post',
		url: '/articleInfo/add'
	},
	// 修改文章
	editArticle: {
		method: 'post',
		url: '/articleInfo/change'
	},
	// 删除文章
	delArticle: {
		method: 'post',
		url: '/articleInfo/del'
	}
}

export default ARTICLE_API