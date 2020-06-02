<template>
	<div class="video">
		<div class="container">
			<h2 class="title">{{title}}</h2>
			<div class="video-wrapper">
					<iframe :src=src allowfullscreen height="616"
							id="ytplayer"
							type="text/html" width="100%"></iframe>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Video",
		props: {
			src: {
				type: String,
				required: true
			},
			title: {
				type: String
			}
		},
	}
</script>

<style scoped>

	.video {
		margin: 100px 0;
	}

	.video-wrapper iframe {
		border-radius: 12px;
		overflow: hidden;
		border: none;
	}

	@media only screen and (max-width: 1200px) {

		.video{
			margin: 50px 0;
		}

		h2 {
			line-height: normal;
			margin: 15px 0;
		}
	}


	@media only screen and (max-width: 768px) {

	iframe {
		height: auto;
		min-height: 400px;
	}
	}

</style>