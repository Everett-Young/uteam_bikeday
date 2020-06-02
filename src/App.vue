<template>
	<div id="app" :class="{'fixed-preload': loading}">
		<transition name="component-fade" mode="out-in">
			<loader v-if="loading"/>
		</transition>
		<Promo/>
		<Freedom/>
		<Video title="uTeam" src="https://www.youtube.com/embed/hnbUfne3qEk?rel=0&amp;showinfo=0?ecver=0"/>
		<Acton-plan/>
		<Timeline/>
		<RouteMap ref="map"/>
		<Test/>
	</div>
</template>

<script>
	import Promo from "@/layouts/Promo";
	import Freedom from "@/layouts/Freedom";
	import Video from "@/components/Video";
	import ActonPlan from "@/layouts/ActonPlan";
	import Loader from "@/components/Loader";
	import Timeline from "@/layouts/Timeline";
	import RouteMap from "@/layouts/RouteMap";
	import Test from "@/layouts/Test";


	export default {
		name: 'App',
		data: () => ({
			loading: true
		}),
		components: {
			Test,
			RouteMap,
			Timeline,
			Loader,
			ActonPlan,
			Video,
			Freedom,
			Promo
		},
		mounted() {
			setTimeout(() => {
				this.loading = false
			}, 1000)
		}
	}
</script>

<style>
	@import "~normalize.css";
	@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=Roboto:wght@400;700&display=swap');

	body {
		background: #F8FFED;
	}

	.fixed-preload {
		position: absolute;
		height: 0;
		overflow: hidden;
	}

	.component-fade-enter-active, .component-fade-leave-active {
		transition: opacity 1s ease;
	}

	.component-fade-enter, .component-fade-leave-to {
		opacity: 0;
	}

	h1, h2:not(.comm-title), h3, h4, h5 {
		font-family: 'Playfair Display', serif;
		font-weight: normal;
		font-style: normal;
	}

	a:focus, a:visited, a:link {
		color: #cdeaa2;
	}

	*,
	*:before,
	*:after {
		box-sizing: border-box;
	}

	p {
		font-size: 18px;
		line-height: 30px;
		text-align: center;
	}

	h1 {
		font-size: 145px;
	}

	h2:not(.comm-title) {
		font-size: 145px;
		line-height: 120px;
		text-align: center;
		letter-spacing: 2.5px;
		color: #211E19;
		margin: 1px 0 55px;
	}

	h3 {
		font-size: 54px;
		line-height: 62px;
		margin-bottom: 1em;
	}

	h4 {
		margin: 1.4em 0;
	}

	#app {
		font-family: 'Roboto', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #0D0D0D;
		background: url("./assets/img/ft_bg.png") center bottom no-repeat;
		padding-bottom: 700px;
	}

	.container {
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 15px;
	}

	ul {
		padding: 0;
		margin: 0;
	}

	li {
		list-style: none;
	}

	@media only screen and (max-width: 1200px) {
		p {
			font-size: 14px;
		}

		h1 {
			font-size: 80px;
		}

		h3 {
			font-size: 40px;
		}

		h2:not(.comm-title) {
			font-size: 70px;
		}

	}

	@media only screen and (max-width: 768px) {
		h3 {
			line-height: initial;
		}

		h2:not(.comm-title) {
			font-size: 60px;
		}
	}

	@media only screen and (max-width: 560px) {
		h3 {
			font-size: 30px;
			line-height: initial;
		}

		h2:not(.comm-title) {
			font-size: 50px;
		}

		h1 {
			font-size: 60px;
		}
	}

</style>
