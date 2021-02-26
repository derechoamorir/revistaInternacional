<script>
	import Form from './../components/Form.svelte'
	import ShowCode from './../components/showCode.svelte';
	import { result } from './../stores/store'
	import {onMount } from 'svelte'


</script>
<svelte:head><title>Revista de prensa internacional - DMD</title></svelte:head>

<main>
	<div class="form">
		<h1>Revista de prensa</h1>
		<Form />
	</div>
	<div class="showCode">
		<ShowCode />
	</div>

</main>

<style>
	:root {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	main {
		display: grid;
		grid-template-columns: 1fr 1fr;
		/* text-align: center; */
		margin: 0 auto;
	}

	h1 {
		color: rgb(179,15,29);
		text-transform: uppercase;
		font-size: 2rem;
		font-weight: 400;
		line-height: 1.1;
		margin: 2rem auto;
	}
	
	.showCode {
		background: rgb(232, 237, 238);
		min-height: 100vh;
	}

	.form {
		padding: 0 0 0 2rem;
	}
	@media (max-width: 768px) {
		h1 {
			max-width: none;
		}
		main {
			grid-template-columns: 1fr;
			padding: 0;
		}
		.form {
		padding: 0 1rem 1rem 1rem;
	}

	}
</style>