<template>
	<section class="action-plan" :class="{tablet:!this.$mq.desktop}">
		<div class="container">
			<div class="action">
				<div v-if="this.$mq.desktop">
					<img src="../assets/img/action_image.jpg" alt="forest">
				</div>
				<div class="text-wrapper">
					<h3>План действий</h3>
					<ol class="action-list">
						<li v-for="action in actions" :key="action.title">
							<div class="action-item">
								<h4>{{action.title}}</h4>
								<span class="sub-title">
									{{action.subTitle}}
									<a v-if="action.anchorLink" @click.prevent="scrollToMap" href="#">
										{{action.anchorLink}}
									</a>
								</span>
							</div>
						</li>
					</ol>
					<div class="other">
						<h4>Участники</h4>
						<p>Все желающие активно отдохнуть :)</p>
					</div>
					<div class="other">
						<h4>ЗАДАТЬ ВОПРОСЫ</h4>
						<p>Организационные вопросы: Ксюша (<a href="https://t.me/ksyu_sheremetieva" target="_blank">@ksyu_sheremetieva</a>)
							<br>Технические вопросы: Вова Косцюкевич
							(<a href="https://t.me/Brother_V" target="_blank">@Brother_V</a>)</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		name: "ActonPlan",
		data: () => ({
			actions: [
				{
					title: 'ФОРМАТ',
					subTitle: 'Велосипедный заезд в колонне'
				},
				{
					title: 'МЕСТО СТАРТА',
					subTitle: 'Парк "Долина роз"'
				},
				{
					title: 'ДАТА',
					subTitle: '13 июня 2020'
				},
				{
					title: 'ВРЕМЯ СТАРТА',
					subTitle: '10:00'
				},
				{
					title: 'ДИСТАНЦИЯ',
					subTitle: '30 км в обе стороны',
					anchorLink: '(см.маршрут)'
				},
				{
					title: 'ПРОДОЛЖИТЕЛЬНОСТЬ',
					subTitle: 'Приблизительно 2 часа'
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

	.action-plan.tablet .container {
		background: url("../assets/img/action_image.jpg") center center no-repeat;
		background-size: cover;
		position: relative;
	}

	.action-plan.tablet .container:after {
		content: " ";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 3;
		background: url("../assets/img/dots.png");
	}

	.tablet .text-wrapper {
		width: 100%;
		max-width: initial;
		color: #fff;
		position: relative;
		z-index: 9;
	}

	.tablet li:before {
		display: none;
	}

	.tablet .other > *,
	.tablet li,
	.tablet h3 {
		text-align: center;
	}

	.action-plan {
		margin: 100px 0;
	}

	.container {
		background: #FFFFFF;
		box-shadow: 0 0 31px rgba(0, 0, 0, 0.08);
		padding: 99px 50px 23px;
	}

	img {
		display: block;
		max-width: 588px;
		box-shadow: 0 16px 32px rgba(0, 0, 0, 0.25);
		border-radius: 7px;
		height: 925px;
		object-fit: cover;
	}

	.text-wrapper {
		max-width: 426px;
	}

	.action-list {
		text-align: left;
	}

	h4 {
		font-weight: bold;
		font-size: 26px;
		line-height: 38px;
		margin: 5px 0;
	}

	h3 {
		text-align: left;
		margin-bottom: 1em;
	}

	.sub-title {
		line-height: 28px;
		letter-spacing: -0.5px;
		opacity: 0.6;
	}

	.action {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.other {
		margin: 53px 0 38px;
	}

	.other > * {
		text-align: left;
	}

	.action-item {
		display: inline-block;
		vertical-align: top;
		padding-left: 15px;
	}

	ol {
		padding: 0;
		counter-reset: myCounter;
	}

	li:not(:last-child) {
		margin-bottom: 15px;
	}

	li {
		list-style: none;
	}

	li:before {
		counter-increment: myCounter;
		content: counter(myCounter);
		font-family: Playfair Display, serif;
		font-weight: 900;
		font-size: 34px;
		line-height: 24px;
		text-align: center;
		letter-spacing: 2.5px;
		color: #ACFF59;
	}

	li:nth-child(-n+9):before {
		content: "0" counter(myCounter);
	}

	@media only screen and (max-width: 1200px) {
		.container {
			padding: 20px 15px;
		}

		.action-plan {
			margin: 50px 0;
		}

		.action-item {
			padding: 0;
		}

		.sub-title {
			line-height: initial;
			font-size: 14px;
		}

		h4 {
			font-size: 18px
		}

	}

</style>