<template>
	<div class="loader-wrapper">
		<div class="info-loader">
			<img src="../assets/img/loader2.gif" alt="Wait...">
			<h4>Loading...</h4>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Loader"
	}
</script>

<style scoped>

	h4 {
		color: #fff;
		font-size: 40px;
	}

	.loader-wrapper {
		position: fixed;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 99999;
		background: #306a93;
	}

	img {
		-moz-user-select: none;
		-webkit-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}

	@media only screen and (max-width: 768px) {
		img {
			width: 100%;
		}

		h4 {
			font-size: 25px;
		}
	}


</style>