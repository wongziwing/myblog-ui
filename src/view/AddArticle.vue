<template>
	<div>
		<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			<el-form-item label="文章标题" prop="title">
				<el-input type="text" v-model="ruleForm.title" autocomplete="off"
				          maxlength="32" show-word-limit placeholder="请输入标题"
				>
				</el-input>
			</el-form-item>
			<el-form-item label="文章标签" prop="tags">
				<el-input type="text" v-model="ruleForm.tags" autocomplete="off" maxlength="32" show-word-limit
				          placeholder="请输入标签，多个标签以英文逗号分隔"
				>
				</el-input>
			</el-form-item>

			<!-- 富文本框 -->
			<el-form-item prop="content">
				<quill-editor ref="text" v-model="ruleForm.content" style="height: 300px"></quill-editor>
			</el-form-item>

			<el-form-item style="margin-top: 60px">
				<el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>
<script>
	import { quillEditor } from 'vue-quill-editor'
	import 'quill/dist/quill.snow.css'
	import 'quill/dist/quill.core.css'
	import 'quill/dist/quill.bubble.css'

	export default {

		components: {
			quillEditor,
		},
		data() {
			// 标题规则
			var checkTitle = (rule, value, callback) => {
				if (value === '') {
					return callback(new Error('标题不能为空'));
				}
				if (value.length > 32){
					return callback(new Error('标题长度不能超过32'))
				}
				callback()
			};
			// 标签规则
			var checkTags = (rule, value, callback) => {
				if (value === '') {
					return callback(new Error('标签不能为空'));
				}
				if (value.length > 32){
					return callback(new Error('标签长度不能超过32'))
				}
				callback()
			};

			// 内容规则
			var checkContent = (rule, value, callback) => {
				if (value === ''){
					return callback(new Error('内容不能为空'));
				}
				if (value.length > 30000){
					return callback(new Error('内容长度不能超过30000'))
				}
				callback()
			};
			return {
				ruleForm: {
					title: '',
					tags: '',
					content: '',
				},
				rules: {
					title: [
						{ validator: checkTitle, trigger: 'blur' }
					],
					tags: [
						{ validator: checkTags, trigger: 'blur' }
					],
					content: [
						{ validator: checkContent, trigger: 'blur' }
					]
				}
			};
		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						this.submitData()
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			async submitData(){
				let formData = new FormData();
				Object.keys(this.ruleForm).map(key => {
					formData.append(key, this.ruleForm[key])
				})
				let res = await this.$Http.newArticle(formData)
				console.log('res', res)
			}
		}
	}
</script>