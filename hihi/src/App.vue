<template>
  <div>
	  	<transition :name="transitionName">
  			<router-view></router-view>
  		</transition>
		<footer>	
			<div class="footer-item"  @click="open('/')">A</div>
      <div class="footer-item"  @click="open('/b')">B</div>
      <div class="footer-item"  @click="open('/c')">C</div>
      <div class="footer-item"  @click="open('/d')">D</div>
		</footer>
  </div>
</template>

<script>
export default {
	name: 'App',
		data(){
			return{
				 transitionName : 'slide-go'
			}
		},
		watch: {
	      '$route' (to, from) {
	        if (from.query.time) {
	          if (to.query.time > from.query.time) {
	            this.transitionName = 'slide-go'
	          } else {
	            this.transitionName = 'slide-back'
	          }
	        } else {
	          this.transitionName = 'slide-go'
	        }
	
	        this.nowUrl = to.fullPath
	      }
		},
		methods: {
	      open(link) {
	        this.$router.openPage(link)
	      }
		}
}
</script>

<style lang="scss" type="text/scss">
		@import "./assets/scss/public.scss";
		footer{
			width: 100%;
			background: greenyellow;
			height: 80px;
			line-height: 80px;
			display: flex;
			position: fixed;
			bottom: 0;
		}
		footer .footer-item{
			font-size: 24px;
			text-align: center;
			width: 25%;
			display: block;
	    color: ghostwhite;
			font-weight: 500;
		}
		
		.slide-go-enter-active,.slide-go-leave-active,.slide-back-enter-active,.slide-back-leave-active{
			  -webkit-transition: transform 0.4s cubic-bezier(.55,0,.1,1);
  			transition: transform 0.4s cubic-bezier(.55,0,.1,1);
		}
		
		.slide-go-enter{
		  -webkit-transform: translate3d(100%,0,0);
		  transform: translate3d(100%,0,0);
		}
		.slide-go-enter-to{
		  -webkit-transform: translate3d(0%,0,0);
		  transform: translate3d(0%,0,0);
		}
		.slide-go-leave{
		  -webkit-transform: translate3d(0,0,0);
		  transform: translate3d(0,0,0);
		}
		.slide-go-leave-to{
		  -webkit-transform: translate3d(-100%,0,0);
		  transform: translate3d(-100%,0,0);
		}
		.slide-back-enter{
		  -webkit-transform: translate3d(-100%,0,0);
		  transform: translate3d(-100%,0,0);
		}
		.slide-back-enter-to{
		  -webkit-transform: translate3d(0%,0,0);
		  transform: translate3d(0%,0,0);
		}

		.slide-back-leave{
		  -webkit-transform: translate3d(0,0,0);
		  transform: translate3d(0,0,0);
		}

		
		.slide-back-leave-to{
	 	 -webkit-transform: translate3d(100%,0,0);
		  transform: translate3d(100%,0,0);
		}

</style>
