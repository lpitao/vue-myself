<template>
	<div class="header-back" >
		<p>{{title}}</p>
		<span class="iconfont icon-backer" @click="$router.go(-1)"></span>
		<span class="iconfont icon-backer" @click="$router.openPage('/search')"></span>
	</div>
</template>

<script>
	export default{
		name: 'header-back',
		props:{
			title:{
				type:String,
				default:'标题'
			}
		},
		data(){
			return {
				active:false
			}
		},
		mounted(){
			setTimeout(()=>{
				this.active = true;
			},10)
		}
	}
</script>

<style lang="text/scss" lang="scss">
	.header-back .active{
		transform: translateY(0%)
	}
	.header-back{
		line-height:40px;
		padding: 30px 0;
		background: #f2f2f2;
		transform: ttranslateY(-100%);
		color: #666;
		text-align: center;
		position: relative;
		font-size: 18px;
		.myicon{
			position: absolute;
			width: 88px;
			line-height: 42px;
			top: 30px;
			color: #919191;
			font-size: 18px;
		}
		.back{
			left: 0;
		}
		.search{
			right: 0;
		}
	}
</style>