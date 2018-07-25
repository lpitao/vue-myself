<template>
	<div>
		<header-back title="购物车"></header-back>
		<div class="shop-wrap">
			<div class="shop-item clear" v-for="target in shopCarList">
				<div class="shop-img"></div>
				<div class="shop-box">
					<p class="title">{{target.title}}</p>
					<p class="money">售价：{{target.money}}元</p>
					<div class="button-group">
		              <div class="function-button">
		                <span class="btn jia iconfont icon-iconfontadd" @click="add(target)"></span>
		                <span class="number">{{target.length}}</span>
		                <span class="btn jian iconfont icon-jianhao" @click="sub(target)"></span>
		              </div>
		              <span class="delete iconfont icon-shanchu" @click="deleteShop(target)"></span>
		            </div>
				</div>
			</div>
		</div>
	
		<div class="shopcar-footer clear">
		      <div class="item money">
		        <p>共件 <span>金额</span></p>
		        <p> <span class="mm"></span> 元 </p>
		      </div>
		      <div class="item continue" @click="$router.openPage('/')">继续购物</div>
		      <div class="item pay" @click="$router.openPage('/pay')">去结算</div>
		</div>
	</div>
</template>

<script >
	import ShopCarTool from '../util/shop-car-tool/index'
	import headerBack from '../components/headback'
	
	export default{
		name: 'shop-car',
		components:{
			headerBack
		},
		data(){
			return{
		        shoplist : [
		          {
		            src: 'http://oz3tayfme.bkt.clouddn.com/show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg',
		            title: '13.3"笔记本i5 独显',
		            con: '指纹解锁，全金属机身',
		            money: 5199,
		            href: '/detail/1006'
		          }
		        ]
			}
		},
		mounted(){
			this.shopCar = new ShopCarTool(this.$store)
			this.shopCarList = this.shopCar.getAll()
		},
		computed:{
			shopCarListLength(){
				var n = 0;
				for(var i in this.shopCarList){
					n += this.shopCarList[i].length
				}
				return n
			},
			getAllMoney(){
				var n = 0;
				for(var i in this.shopCarList){
					n += this.shopCarList[i].money * this.shopCarList[i].length
				}
				return n
			}
		},
		methods:{
			add(target){
				this.shopCar.add(target)
			},
			sub(target){
				this.shopCar.sub(target)
			},
			deleteShop(target){
				this.shopCar.remove(target.id)
				this.shopCarList = this.shopCar.getAll
			}
		}	
	}
</script>

<style lang="scss" type="text/scss">
/*	@import '../assets/font/iconfont.css';*/
	@import url("../assets/scss/public.scss");
	.shop-wrap{
		width: 100%;
	    font-size: 28px;
	}
	.shop-item{
		padding: 10px;
	}
	.shop-img{
		float: left;
	}
	.shop-img img{
		width: 100%;
	}
	.shop-box {
	    width: 50%;
    	height: 150px;
		float: right;
		.title,.money {
			line-height: 50px;
		}  
		.function-button{
			width: 80%;
			display: inline-block;
			height: 50px;
			line-height: 50px;
			.btn{
				background: chocolate;
				padding: 5px;
				border-radius:5px ;
			}
			.iconfont{
				font-size: 32px;
				color: #fff;
			}
		}
		.iconfont{
			color: chocolate;
			font-size: 32px;
		}
	}
	
	.shopcar-footer{
	    font-size: 32px;
	    position: fixed;
	    bottom: 0;
	    z-index: 2;
	    width: 100%;
	    background: #fff;
	    height: 120px;
	    line-height: 120px;
	    color: chocolate;
	    .item{
	    	float: left;
	    	width: 33%;
    	    text-align: center;
	    }
	    .money{
	    	line-height: 60px;
	    }
	    .pay{
	    	background: chocolate;
	    	color: #fff;
	    }
	}
	
	
</style>