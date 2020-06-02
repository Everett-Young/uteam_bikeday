<template>
	<section class="promo">
		<div class="container">
			<div class="promo-wrapper">
				<h1>JUST Ride</h1>
				<p class="hash-tag">#UTEAM_BIKEDAY</p>
				<p class="promo-date">13/06/2020</p>
				<div v-if="this.$mq.desktop" class="scroll-more">
					<span>Scroll for more</span>
				</div>
			</div>

		</div>
	</section>
</template>

<script>
	export default {
		name: "Promo"
	}
</script>

<style scoped>
	.promo {
		width: 100%;
		height: 100vh;
		background: url("../assets/img/promo_background.png") top center no-repeat;
		background-size: 100% 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
	}

	h1 {
		letter-spacing: 2.5px;
		color: #fff;
		margin: 33px 0;
		text-transform: uppercase;
	}

	.hash-tag {
		font-size: 36px;
		line-height: 38px;
		text-align: center;
		color: #ACFF59;
		margin: 33px 0 54px;
	}

	.promo-date {
		font-size: 41px;
		line-height: 38px;
		color: #FFFFFF;
	}

	.scroll-more span {
		font-size: 12px;
		line-height: 18px;
		letter-spacing: 3px;
		text-transform: uppercase;
		color: #FFFFFF;
		margin-top: 94px;
		display: inline-block;
	}

	.scroll-more:after {
		content: "";
		width: 22px;
		height: 42px;
		display: block;
		margin: 61px auto 0;
		background: url("data:image/svg+xml,%3Csvg width='24' height='44' viewBox='0 0 24 44' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.9393 43.0607C11.5251 43.6464 12.4749 43.6464 13.0607 43.0607L22.6066 33.5147C23.1924 32.9289 23.1924 31.9792 22.6066 31.3934C22.0208 30.8076 21.0711 30.8076 20.4853 31.3934L12 39.8787L3.51472 31.3934C2.92893 30.8076 1.97918 30.8076 1.3934 31.3934C0.807609 31.9792 0.807609 32.9289 1.3934 33.5147L10.9393 43.0607ZM10.5 1.8187e-07L10.5 42L13.5 42L13.5 -1.81871e-07L10.5 1.8187e-07Z' fill='%23F8FFED'/%3E%3C/svg%3E%0A") center center no-repeat;
		animation: slide-bottom .9s ease-in infinite alternate-reverse both;
	}

	@keyframes slide-bottom {
		0% {
			-webkit-transform: translateY(0);
			transform: translateY(0);
		}
		100% {
			-webkit-transform: translateY(50px);
			transform: translateY(50px);
		}
	}


	@media only screen and (max-width: 1200px) {
		.promo {
			background-size: cover;
		}

		.hash-tag {
			font-size: 25px;
		}

		.promo-date {
			font-size: 25px;
		}
	}

</style>