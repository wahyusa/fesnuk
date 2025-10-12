<script lang="ts">
	let date = $state(new Date().toLocaleString());

	$effect(() => {
		const interval = setInterval(() => {
			date = new Date().toLocaleString();
		}, 1000);

		return () => clearInterval(interval);
	});
</script>

<time>{date}</time>
<h1>Fesnuk</h1>
