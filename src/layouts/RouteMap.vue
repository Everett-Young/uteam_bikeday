<template>
	<section ref="maps" class="route-map">
		<div class="container">
			<h3>Карта маршрута</h3>
			<div class="map-frame">
				<iframe src="https://www.bikemap.net/en/r/6254591/widget/?width=640&amp;height=480&amp;unit=metric"
						width="100%" height="616px" border="0" frameborder="0" marginheight="0" marginwidth="0"
						scrolling="no"></iframe>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		name: "Map"
	}
</script>

<style scoped>

	.route-map {
		margin: 100px 0;
	}

	iframe {
		width: 100%;
		max-height: 616px;
	}

	@media only screen and (max-width: 1200px) {
		.route-map {
			margin: 50px 0;
		}
	}

</style>