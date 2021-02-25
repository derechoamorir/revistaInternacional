<script>
	// import Nav from '../components/Nav.svelte';
</script>

<style>
	main {
		position: relative;
		max-width: 100vw;
		background-color: white;
		margin: 0 auto;
		box-sizing: border-box;
	}
	@media (max-width: 768px) {
		main {
			padding: 0;
			margin: 0;
		}
	}
</style>

<!-- <Nav {segment}/> -->

<main>
	<slot></slot>
</main>