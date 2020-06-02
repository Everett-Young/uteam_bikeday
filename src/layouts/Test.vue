<template>
	<section class="test">
		<div class="container">
			<h3 ref="testStart">Проверь свои знания и пройди <br> тест на тему ПДД</h3>
			<p class="center">ОВелодвижение развивается с каждым годом, не меняется только одно: большинство <br> из нас
				не знает
				правил
				дорожного движения, полагая это заботой автомобилистов.
			</p>
			<ul class="question-list">
				<li class="question-item" v-for="(question) in questions"
					:key="question.name">
					<h4>{{question.name}}</h4>
					<img :src=question.image alt="">
					<ul class="answers-list">
						<li @click.once="answerQuestion(question, ans)"
							:class="{invalid:!ans.correct && question.answered, valid:ans.correct && question.answered}"
							class="answer-item"
							v-for="ans in question.answers" :key="ans.text">
							<span class="ans-text">{{ans.text}}</span>
						</li>
					</ul>
					<transition name="slide-fade">
						<div v-if="question.answered" class="comment">
							<p v-html="question.comment"></p>
						</div>
					</transition>
				</li>
			</ul>

			<div v-if="test.finished" class="test-result-wrapper">
				<span class="test-score">{{test.score}}/{{questions.length}}</span>
				<h4 class="test-title">{{getResult("title")}}</h4>
				<p class="test-description">{{getResult("description")}}</p>
				<button @click="restart" class="btn">Пройти тест еще раз</button>
			</div>
		</div>
	</section>
</template>

<script>
	import store from "@/store/store";

	export default {
		name: "Test",
		data: () => ({
			questions: store,
			test: {
				score: 0,
				finished: false,
				data: {
					low: {
						title: 'Водитель трехколесного велосипеда',
						description: 'Правила дорожного движения написаны для автомобилистов, а обучение велоискусству закончилось в тот момент, когда папа открутил от велосипеда дополнительные колеса.'
					},
					medium: {
						title: 'Сезонный любитель',
						description: 'Общую логику движения понимаете, а вот правила читали давно. Вы чувствуете, что должны что-то соблюдать, но не знаете, что именно.'
					},
					high: {
						title: 'Велосипедист-профессионал',
						description: 'Вы понимаете, что велосипед — не развлечение, а средство передвижения, которое по существу (и по правилам) ближе к автомобилям, чем к пешеходам.'
					}
				}
			}
		}),
		methods: {
			answerQuestion(question, answer) {
				question.answered = true;
				if (answer.correct) {
					this.test.score++;
				}
				if (this.questions.every(q => q.answered)) {
					this.test.finished = true;
				}
			},
			getResult(item) {
				if (this.test.finished) {
					if (this.test.score <= 3) {
						return this.test.data.low[item]
					} else if (this.test.score > 3 && this.test.score < 7) {
						return this.test.data.medium[item]
					} else {
						return this.test.data.high[item]
					}
				}
			},
			restart() {
				window.scrollTo({
					top: this.$refs.testStart.offsetTop,
					behavior: 'smooth'
				});

				setTimeout(() => {
					this.test.finished = false;
					this.test.score = 0;
					this.questions.forEach(function (question) {
						question.answered = false;
					});
				}, 500);
			}

		}
	}
</script>

<style scoped>

	.btn {
		padding: 10px 15px;
		border-radius: 6px;
		background-color: #fff;
		cursor: pointer;
		margin: 15px auto;
		border: 1px solid #000;
	}

	.btn:hover {
		background-color: #cbf18d;
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.17);
	}

	.center {
		text-align: center;
	}

	.slide-fade-enter-active {
		transition: all .9s ease;
	}

	.slide-fade-leave-active {
		transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}

	.slide-fade-enter, .slide-fade-leave-to {
		transform: translateY(-10px);
		opacity: 0;
	}

	.test-result-wrapper {
		padding: 50px;
		background: #e1f5c1;
		border-radius: 6px;
		margin-top: 100px;
	}

	.test-score, .test-title {
		font-size: 40px;
		margin: 15px 0;
		line-height: normal;
	}

	.test-title {
		font-weight: bold;
	}

	.test-description {
		max-width: 650px;
		margin: 0 auto;
		text-align: center;
	}

	.test {
		margin: 100px 0;
	}

	h4 {
		font-size: 24px;
		line-height: 20px;
	}

	.question-item {
		border-bottom: 1px solid #E5ECDB;;
	}

	.question-item > h4:before {
		counter-increment: myCounter;
		content: counter(myCounter);
		width: 54px;
		height: 54px;
		display: inline-flex;
		border: 2px solid #124637;
		border-radius: 54px;
		font-family: "Roboto", sans-serif;
		align-items: center;
		justify-content: center;
		margin-right: 15px;

	}

	img {
		max-width: 100%;
		width: 100%;
		max-height: 581px;
		object-fit: cover;
		border-radius: 6px;
	}

	ul {
		counter-reset: myCounter;
	}

	p {
		text-align: left;
	}

	.comment {
		background: #FFFFFF;
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.17);
		border-radius: 6px;
		padding: 15px;
		max-width: 950px;
		margin: 0 auto 50px;
	}

	.answers-list {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		flex-wrap: wrap;
		padding: 50px;
	}

	.answer-item {
		padding: 15px;
		width: 50%;
		text-align: left;
		cursor: pointer;
		border-radius: 6px;
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}

	.ans-text {
		flex: 1 1 auto;
	}

	.answer-item.invalid, .answer-item.valid {
		cursor: default;
	}

	.answer-item:not(.invalid):hover {
		background: #E1F5C1;
	}

	.answer-item.valid {
		background: #E1F5C1;
	}

	.answer-item:before {
		counter-increment: myCounter;
		content: counter(myCounter);
		width: 40px;
		height: 40px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		background: #FFFFFF;
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.17);
		border-radius: 6px;
		margin-right: 15px;
		vertical-align: middle;
		flex: 0 0 40px;
	}

	.answer-item.invalid:before {
		background: #FFBBBB;;
	}

	.answer-item.valid:before {
		background: #CBF18D;
	}

	@media only screen and (max-width: 1200px) {
		.question-item > h4:before {
			width: 35px;
			height: 35px;
		}

		.test {
			margin: 50px 0;
		}
	}

	@media only screen and (max-width: 768px) {
		img {
			object-fit: contain;
			width: initial;
		}

		.answers-list {
			padding: 25px;
		}

		.answer-item {
			width: 100%;
		}
		.test-score,
		.test-title {
			font-size: 24px;
		}
		.test-result-wrapper {
			padding: 15px;
			margin-top: 50px;
		}
	}

	@media only screen and (max-width: 560px) {
		.answers-list {
			padding: 15px 0;
		}

		h4:not(.test-title) {
			font-size: 18px;
			text-align: left;
		}

		.question-item > h4:before {
			margin-bottom: 10px;
		}
	}

</style>