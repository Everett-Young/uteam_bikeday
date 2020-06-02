<template>
	<section class="freedom">
		<div class="container">
			<div class="title-wrapper">
				<span class="upper-title">Your bike is</span>
				<h2>Freedom</h2>
			</div>
			<p class="freedom-text">
				Ощущение независимости, свободы и движения. Движения бесшумного, чистого. Своего собственного. Без
				вибраций и запахов, с ветром, бьющим в лицо.
				Если ту энергию, которую мы тратим при каждом шаге на подъем веса собственного тела направить только на
				горизонтальное перемещение — в этот миг и происходит эта особая велосипедная магия. Вы вдруг обретаете
				способность перемещаться в пространстве со скоростью, как минимум в три раза превышающую пешеходную, не
				используя при этом внешних источников энергии.
			</p>
		</div>
	</section>
</template>

<script>
	export default {
		name: "freedom"
	}
</script>

<style scoped>

	.freedom {
		margin: 100px 0;
		background: url("../assets/img/freedom_background.png") center center no-repeat;
		background-size: contain;
	}

	.freedom-text, .title-wrapper {
		max-width: 720px;
		margin: 0 auto;
	}

	.title-wrapper {

	}

	.upper-title {
		font-size: 38px;
		line-height: 30px;
		text-align: center;
		transform: translateX(-94px);
		display: block;
	}


	@media only screen and (max-width: 1200px) {

		.freedom {
			margin: 50px 0;
		}

		h2 {
			line-height: normal;
			margin: 15px 0;
		}

		.upper-title {
			font-size: 25px;
			line-height: initial;
		}
	}

	@media only screen and (max-width: 768px) {

		.freedom {
			margin: 50px 0;
		}

		h2 {
			line-height: 1;
			margin: 15px 0;
		}
		.upper-title {
			font-size: 20px;
			line-height: initial;
		}
	}

</style>