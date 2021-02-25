<script>
	import Form from './../components/Form.svelte'
	import ShowCode from './../components/showCode.svelte';
	import { result } from './../stores/store'
	import {onMount } from 'svelte'


</script>

<main>
	<div class="form">
		<h1>Revistas de prensa internacional</h1>
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
		padding: 1em;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 2rem;
		font-weight: 200;
		line-height: 1.1;
		margin: 2rem auto;
	}
	.showCode {
		background: rgb(255, 251, 239);
		min-height: 90vh;
	}
	@media (min-width: 480px) {
		h1 {
			max-width: none;
		}

	}
</style>