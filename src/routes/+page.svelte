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
<a href="#!" aria-label="Link to development version preview of this website">View dev version</a>
