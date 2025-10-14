<script lang="ts">
	let date = $state(new Date().toLocaleString());

	$effect(() => {
		const interval = setInterval(() => {
			date = new Date().toLocaleString();
		}, 1000);

		return () => clearInterval(interval);
	});
</script>

<header>
	<nav>Home</nav>
	<section id="hero">Hero</section>
</header>

<main>
	<section id="background">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit id eos ab quod at odio
		necessitatibus explicabo autem, natus labore et tempore. Incidunt unde consequatur vitae
		corrupti totam non dicta.
		<button type="button">
			<span class="font-sketch"> Really? </span>
		</button>
	</section>
</main>
