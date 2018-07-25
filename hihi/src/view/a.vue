<template>
	<div>
		<header class="public-header"></header>
		<div class="scroll-box" ref="view01">
			<!--<swiper></swiper>-->
			<div class="nav clear">
				<a href="javascript:;">
					<img @click="$router.openPage('/detail/1001')" src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011022292984819.png"/>
				</a>
				<a href="javascript:;">
					<img @click="$router.openPage('/detail/1004')" src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011022292372054.png"/>
				</a>
				<a href="javascript:;">
					<img @click="$router.openPage('/detail/1001')" src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011022291629252.png"/>
				</a>
			</div>
			<div class="shop-item clear">
				<img @click="$router.openPage('/detail')" src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011114551289342.png" />
				<img @click="$router.openPage('/detail/1004')" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e2ad0dbf777fda097e55cea9ce716e33.jpg?thumb=1&w=358&h=252"/>
				<img @click="$router.openPage('/detail/1005')" src="http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/2018011114550596671.png"/>
			</div>
			<div class="shop-item clear">
				<img @click="$router.openPage('/detail/1003')"/>
			</div>
		    <div class="shop-item clear">
		        <img @click="$router.openPage('/detail/1006')" alt="">
		    </div>
		    <div class="shop-item clear">
		        <img @click="$router.openPage('/detail/1007')" alt="">
		    </div>
		    <div class="shop-item">
		    	<div class="shop-box clear">
		    		<div class="shop-box-item" v-for="target in shoplist" @click="$router.openPage(target.href)">
		    			<img v-lazy="target.src"/>
		    			<p class="title">{{ target.title }}</p>
		    			<p class="con">{{ target.con }}</p>
		    			<p class="money">
		    				<span class="small">￥</span>{{ target.money }}
		    			</p>
		    		</div>
		    	</div>
		    </div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import { mapGetters } from 'vuex'
	import VueDB from '../util/vue-db/vue-db-long'
	
	let DB = new VueDB()
	
	export default{
		data(){
			return{
				navListActiveIndex: 0,
				shoplist : [
		          {
		            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
		            title: '米家感应灯',
		            con: '举步之明，光明立现',
		            money: 49,
		            href: '/detail/1008'
		          },
		          {
		            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
		            title: '米家感应灯',
		            con: '举步之明，光明立现',
		            money: 49,
		            href: '/detail/1008'
		          },
		          {
		            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
		            title: '米家感应灯',
		            con: '举步之明，光明立现',
		            money: 49,
		            href: '/detail/1008'
		          }
		        ]
			}
		},
		components:{
//			swiper
		},
		methods:{
			navChange(index){
				this.navListActiveIndex = index;
			}
		},
		mounted(){
            this.navListActiveIndex = DB.getItemOnce('home-index-nowIndex').toNumber() || 0
	        setTimeout(()=>{
		        this.$refs.view01.scrollTop = DB.getItemOnce('home-index-view01').toNumber() || 0
//		        this.$refs.view02.scrollTop = DB.getItemOnce('home-index-view02').toNumber() || 0
//		        this.$refs.view03.scrollTop = DB.getItemOnce('home-index-view03').toNumber() || 0
//		        this.$refs.view04.scrollTop = DB.getItemOnce('home-index-view04').toNumber() || 0
//		        this.$refs.view05.scrollTop = DB.getItemOnce('home-index-view05').toNumber() || 0
//		        this.$refs.view06.scrollTop = DB.getItemOnce('home-index-view06').toNumber() || 0
//		        this.$refs.view07.scrollTop = DB.getItemOnce('home-index-view07').toNumber() || 0
	        }, 10)
		},
		beforeRouterLeave(to, from, next){
			DB.setItem('home-index-view01', this.$refs.view01.scrollTop)
//		    DB.setItem('home-index-view02', this.$refs.view02.scrollTop)
//		    DB.setItem('home-index-view03', this.$refs.view03.scrollTop)
//	        DB.setItem('home-index-view04', this.$refs.view04.scrollTop)
//		    DB.setItem('home-index-view05', this.$refs.view05.scrollTop)
//		    DB.setItem('home-index-view06', this.$refs.view06.scrollTop)
//		    DB.setItem('home-index-view07', this.$refs.view07.scrollTop)
//		
//		    DB.setItem('home-index-nowIndex', this.navListActiveIndex)
		    next();
		}
	}
</script>

<style lang="scss" type="text/scss">
 @import url("../assets/scss/public.scss");
  .home-index .tab-box{
    top: 20px;
  }
  .home-index .tab-box.mi-tj .nav-mi-tj a{
      display: block;
      width:  25%;
  }
  .home-index .shop-box{
  	background-color: #fff
  }
  .nav{
  	display: flex;
  	a{
  		width: 33.333333333%;
  		height: 150px;
  		overflow: hidden;
  		img{
  			width: 100%;
  			height: 100%;
  		}
  	}
  }
  .shop-item{
	img{
		width: 50%;
		float: left;
	}
	.shop-box{
		display: flex;
		flex-wrap: wrap;
		.shop-box-item{
		    width: 50%;
    		/*padding: 10px;*/
		    box-sizing: border-box;
    		img{
    			width: 100%;
    		}
			p{
				font-size: 32px;
			}
			.title{
				
			}
			.con{
				
			}
			.money{
				
			}
		}
	}
  }
</style>