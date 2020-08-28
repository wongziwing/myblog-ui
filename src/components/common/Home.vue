<template>
	<div id="home">
		<v-hear></v-hear>
		<v-sidebar></v-sidebar>
		<div class="content-box" :class="{'content-collapse': collapse}">
			<v-tag></v-tag>
			<div class="content">
<!--				<transition name="move" mode="out-in">-->
<!--					<keep-alive :include="tagsList">-->
<!--						<router-view></router-view>-->
<!--					</keep-alive>-->
<!--				</transition>-->
				<router-view></router-view>
				<el-backtop target=".content"></el-backtop>
			</div>
<!--			<router-link to="/article">-->
<!--				<el-button>-->
<!--					hello-->
<!--				</el-button>-->
<!--			</router-link>-->
<!--			<router-view></router-view>-->
		</div>
	</div>
</template>
<script>
	import vHear from './Header'
	import vSidebar from './Sidebar'
	import vTag from './Tags'
	import bus from './bus'

	export default {
		data() {
			return {
				tagsList: [],
				collapse: false
			}
		},
		components: {
			vHear,
			vSidebar,
			vTag,
		},
		created() {
			bus.$on('collapse-content', msg => {
				this.collapse = msg;
			});

			bus.$on('tags', msg => {
				let arr = [];
				for (let i = 0, len = msg.length; i < len; i++){
					msg[i].name && arr.push(msg[i].name)
				}
				this.tagsList = arr;
			})
		}

	}
</script>

<style scoped>

</style>