<script lang="ts">
	import { Button } from '$lib/components/ui/button/index';
	import mambo from '$lib/assets/mambo.png';
</script>

<div class="sticky top-0 mx-auto flex max-w-5xl items-center justify-between bg-white p-4 sm:p-6">
	<a href="#!">Logo</a>
	<nav class="flex items-center gap-x-6">
		<a href="#!">Podcast</a>
		<a href="#!">Course</a>
		<a href="#!">About</a>
	</nav>
	<Button variant="outline">Join</Button>
</div>

<header class="grid min-h-dvh place-content-center place-items-center">
	<div class="relative grid place-content-center place-items-center border border-zinc-900">
		<img src={mambo} alt="Illustration" class="max-w-1/2" />
		<span class="absolute top-8 right-12 bg-black px-4 py-1.5 text-neutral-200">Button</span>
	</div>
</header>
