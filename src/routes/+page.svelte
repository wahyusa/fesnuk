<script lang="ts">
	import RoughBorder from '$lib/components/ui/RoughBorder.svelte';
	let date = $state(new Date().toLocaleString());

	$effect(() => {
		const interval = setInterval(() => {
			date = new Date().toLocaleString();
		}, 1000);

		return () => clearInterval(interval);
	});
</script>

<header
	class="relative flex items-center justify-between border-b-2 px-10 py-4 whitespace-nowrap dark:border-white/10"
>
	<div class="flex items-center gap-3 dark:text-white">
		<div class="border-primary size-8 border-2 dark:border-white">
			<div class="h-12 w-12 stroke-neutral-100">
				<svg
					class="h-full w-full"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M10 5L9 18M9 5H16M8.5 10.5H13.5"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						transform="skewX(-10)"
					/>
				</svg>
			</div>
		</div>
		<h2 class="relative text-xl font-bold tracking-tight">
			Fesnuk
			<span
				class="absolute top-1/2 left-[5.5rem] block w-[10ch] origin-top-left -rotate-[25deg] transform font-sketch text-sm leading-tight font-normal break-words whitespace-normal dark:text-neutral-200"
			>
				logo fesnuk simple
			</span>
		</h2>
	</div>
	<nav class="hidden items-center gap-8 md:flex">
		<a class="/70 hover: text-base font-medium dark:text-white/70 dark:hover:text-white" href="!#"
			>The "Course"</a
		>
		<a class="/70 hover: text-base font-medium dark:text-white/70 dark:hover:text-white" href="!#"
			>Our "Team"</a
		>
		<a class="/70 hover: text-base font-medium dark:text-white/70 dark:hover:text-white" href="!#"
			>"Success" Stories</a
		>
	</nav>
	<svg aria-hidden="true" class="hidden">
		<defs>
			<symbol id="sketch-rect" viewBox="0 0 100 40" preserveAspectRatio="none">
				<rect x="0" y="0" width="100" height="40" rx="6" ry="6" fill="none" />
				<path
					d="M6 6 C20 0, 80 0, 94 6 C98 8, 98 32, 94 34 C80 40, 20 40, 6 34 C2 32, 2 8, 6 6 Z"
					fill="none"
					stroke="currentColor"
					stroke-width="1.6"
					stroke-linecap="round"
					stroke-linejoin="round"
					vector-effect="non-scaling-stroke"
					opacity="0.95"
				/>
				<path
					d="M6.8 7.2 C20 2, 80 2.5, 93.5 7.8 C96.5 9.2, 96.5 30.8, 93.8 32.4 C81 38, 20 38.5, 7.5 32.6 C5 31, 4 9.5, 6.8 7.2 Z"
					fill="none"
					stroke="currentColor"
					stroke-width="0.9"
					stroke-linecap="round"
					stroke-linejoin="round"
					vector-effect="non-scaling-stroke"
					opacity="0.55"
				/>
			</symbol>
		</defs>
	</svg>
	<button
		class="relative inline-flex items-center px-4 py-2 text-neutral-400 hover:text-neutral-300"
	>
		<span class="relative z-10 font-sketch font-bold">Ingfo loker</span>
		<svg
			class="pointer-events-none absolute inset-0 h-full w-full"
			viewBox="0 0 100 40"
			preserveAspectRatio="none"
			aria-hidden="true"
		>
			<use href="#sketch-rect" class="h-full w-full" />
		</svg>
	</button>
</header>

<main class="px-10">
	<section id="background">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit id eos ab quod at odio
		necessitatibus explicabo autem, natus labore et tempore. Incidunt unde consequatur vitae
		corrupti totam non dicta.
		<button type="button">
			<span class="font-sketch"> Really? </span>
		</button>
	</section>
</main>
