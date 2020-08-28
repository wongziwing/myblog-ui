<template>
	<div id="article">
		<el-container style="height: 500px; border: 3px solid #eee">
			<el-container>
				<!-- header -->
				<el-header style="text-align: right; font-size: 12px">
					<el-dropdown>
						<i class="el-icon-setting" style="margin-right: 15px"></i>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item>查看</el-dropdown-item>
							<el-dropdown-item><router-link to="add">新增</router-link></el-dropdown-item>
							<el-dropdown-item>删除</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
					<span> user-name</span>
				</el-header>
				<el-main>
					<el-table :data="tableData">
						<el-table-column prop="articleId" label="文章编号" width="140px"></el-table-column>
						<el-table-column prop="articleName" label="文章名称" width="140px"></el-table-column>
						<el-table-column prop="articleTag" label="文章标签" width="140px"></el-table-column>
						<el-table-column prop="createTime" label="发布时间" width="180px"></el-table-column>
					</el-table>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				instance: null, // axios实例
				tableData: []
			}
		},
		methods: {
			async getList(){
				let res = await this.$Http.getArticleList()
				for (let i in res.data){
					let temp = {
						articleId: res.data[i]['articleId'],
						articleName: res.data[i]['articleName'],
						articleTag: res.data[i]['articleTag'],
						createTime: res.data[i]['createTime'],
					}
					this.tableData.push(temp)
				}
				console.log(this.tableData)
			}
		},
		created() {
			this.getList()
			// this.$axios.get('/articleInfo/view')
			// .then(res => {
			// 	for (let i in res.data){
			// 		let temp = {
			// 			articleId: res.data[i]['articleId'],
			// 			articleName: res.data[i]['articleName'],
			// 			articleTag: res.data[i]['articleTag'],
			// 			createTime: res.data[i]['createTime'],
			// 		}
			// 		this.tableData.push(temp)
			// 		console.log(typeof (temp))
			// 	}
			// })
			// .catch(err => {
			// 	console.log('error => ' + err)
			// })
		}
	}
</script>

<style scoped>
	.el-header {
		background-color: #B3C0D1;
		color: #333;
		line-height: 60px;
	}
	.el-aside {
		color: #333333;
	}
</style>