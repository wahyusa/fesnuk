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

<header id="hero" class="flex flex-1 items-center justify-center py-16 md:px-10">
	<div class="flex flex-1 items-center justify-center py-16 md:px-10">
		<div class="w-full max-w-5xl">
			<div class="@container">
				<div class="grid grid-cols-1 gap-12 @[768px]:grid-cols-2 @[768px]:items-center">
					<div class="relative flex flex-col gap-6 px-6 text-center @[768px]:text-left">
						<h1
							class="text-primary text-5xl font-bold tracking-tighter @[480px]:text-6xl dark:text-white"
						>
							Still Unemployed?
						</h1>
						<p
							class="absolute top-2 -left-4 -rotate-[25deg] transform font-sketch text-xs dark:text-white"
						>
							yep, this is the headline
						</p>
						<p class="text-primary/70 text-xl dark:text-white/70">
							You coded all night, mastered algorithms, and your GitHub is a masterpiece. So why are
							you still watching Netflix in your parents' basement? <span
								class="text-primary font-sketch font-bold dark:text-white">Stop the pain.</span
							>
						</p>
						<button
							class="border-primary text-primary relative mt-4 self-center border-2 bg-transparent px-8 py-3 text-lg font-bold @[768px]:self-start dark:border-white dark:text-white"
							>Enroll Now (or Don't)</button
						>
						<p
							class="absolute bottom-2 left-1/2 -translate-x-1/2 rotate-12 transform font-sketch text-xs @[768px]:left-32 dark:text-white"
						>
							your call, buddy
						</p>
						<p
							class="absolute -bottom-8 left-1/2 -translate-x-1/2 rotate-[-10deg] transform font-sketch text-xs text-red-500 @[768px]:left-48"
						>
							price goes up tomorrow... maybe.
						</p>
					</div>
					<div
						class="border-primary relative h-80 w-full border-2 @[768px]:h-full dark:border-white"
					>
						<p
							class="absolute -top-3 left-4 rotate-[-5deg] transform font-sketch text-xs dark:text-white"
						>
							some "art" here
						</p>
						<div class="absolute inset-0 flex h-full w-full items-center justify-center">
							<svg
								class="text-primary/30 h-1/2 w-1/2 dark:text-white/30"
								fill="none"
								viewBox="0 0 100 100"
								xmlns="http://www.w3.org/2000/svg"
							>
								<line stroke="currentColor" stroke-width="2" x1="0" x2="100" y1="0" y2="100"></line>
								<line stroke="currentColor" stroke-width="2" x1="100" x2="0" y1="0" y2="100"></line>
							</svg>
						</div>
						<p
							class="absolute right-6 -bottom-5 rotate-[20deg] transform font-sketch text-xs dark:text-white"
						>
							deep, right?
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
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
