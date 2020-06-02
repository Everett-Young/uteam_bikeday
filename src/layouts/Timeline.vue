<template>
	<section class="timeline">
		<div class="container">
			<h3>Таймлайн</h3>
			<ul class="timeline-list">
				<li v-for="item in timelines" :key="item.id">
					<div class="text-info">
						<h4>{{item.title}}</h4>
						<p>{{item.timeAction}} <a v-if="item.anchorLink"  @click.prevent="scrollToMap" href="#">{{item.anchorLink}}</a></p>
					</div>
				</li>
			</ul>
		</div>
	</section>
</template>

<script>
	export default {
		name: "Timeline",
		data: () => ({
			timelines: [
				{
					id: 1,
					title: "10:00",
					timeAction: "Сбор \"Долина роз\""
				},
				{
					id: 2,
					title: "10:20",
					timeAction: "Старт колонны. На старте делаем групповое фото. Разбираем воду в дорогу. Сформированная колонна отправится в сторону маршрута",
					anchorLink: 'cм. карту'
				},
				{
					id: 3,
					title: "11:00",
					timeAction: "Прибытие в назначенное место, делаем групповое фото. Впоследствии здесь же пройдет пикник, приготовленный собствеными руками в формате “просто добавь воды” :) Отдых, общение, еда, пляж и много-много позитивной энергии :)"
				},
				{
					id: 4,
					title: "16:30",
					timeAction: "Отъезд домой (время определим по всеобщему желанию)"
				}
			]
		}),
		methods: {
			scrollToMap() {
				window.scrollTo({
					top: this.$parent.$refs.map.$el.offsetTop,
					behavior: 'smooth'
				});
			}
		}
	}
</script>

<style scoped>

	.timeline {
		margin: 100px 0;
		background: url("../assets/img/boar.png") center top no-repeat;
	}

	h3 {
		padding: 76px 0 88px;
		margin: 0;

	}

	h4 {
		font-weight: 900;
		font-size: 42px;
		line-height: 20px;
		margin: 0 0 20px;
	}

	p {
		font-size: 14px;
		line-height: 28px;
		margin: 0;
	}

	.timeline-list li {
		position: relative;
	}

	.timeline-list li:nth-child(odd) {
		margin-right: 50%;
		text-align: right;
		padding-right: 50px;
	}

	.timeline-list li:nth-child(even):before,
	.timeline-list li:nth-child(odd):before {
		content: "";
		display: block;
		width: 22px;
		height: 22px;
		background: #ACFF59;
		border-radius: 22px;
		position: absolute;
		right: -11px;
		top: 0;
		z-index: 12;
	}

	.timeline-list li:nth-child(even):before {
		left: -11px;
	}

	.timeline-list li:not(:last-child):nth-child(odd):after,
	.timeline-list li:not(:last-child):nth-child(even):after {
		content: "";
		width: 1px;
		height: calc(100% - 1px);
		display: block;
		position: absolute;
		top: 0;
		z-index: 10;
	}

	.timeline-list li:not(:last-child):nth-child(odd):after {
		border-right: 1px dashed #000000;
		right: -0.5px;
	}

	.timeline-list li:not(:last-child):nth-child(even):after {
		border-left: 1px dashed #000000;
		left: -0.5px;
	}


	.timeline-list li:nth-child(odd) p {
		text-align: right;
		max-width: 333px;
		display: inline-block;
	}

	.timeline-list li:nth-child(even) {
		margin-left: 50%;
		text-align: left;
		padding-left: 50px;
	}

	.timeline-list li:nth-child(even) p {
		text-align: left;
		max-width: 333px;
		display: inline-block;
	}

	@media only screen and (max-width: 1200px) {
		.timeline {
			margin: 50px 0;
		}
	}

	@media only screen and (max-width: 768px) {

		h3 {
			padding: 15px 0 25px;
		}

		.timeline {
			background-size: contain;
		}
	}

	@media only screen and (max-width: 560px) {
		.timeline-list li:nth-child(odd) {
			padding-right: 0;
			margin: 0;
			text-align: left;
			padding-left: 30px;
			padding-bottom: 15px;
		}

		.timeline-list li:nth-child(even) {
			padding-left: 30px;
			margin: 0;
			text-align: left;
			padding-bottom: 15px;
		}

		.timeline-list li:nth-child(odd) p,
		.timeline-list li:nth-child(even) p{
			text-align: left;
			max-width: 100%;
		}

		.timeline-list li:nth-child(odd):before,
		.timeline-list li:nth-child(even):before{
			left: 5px;
		}
		.timeline-list li:not(:last-child):nth-child(odd):after,
		.timeline-list li:not(:last-child):nth-child(even):after{
			left: 15px;
		}


		h4{
			font-size: 20px;
			line-height: initial;
			margin-bottom: 15px;
			font-family: Roboto sans-serif;
		}
	}

</style>