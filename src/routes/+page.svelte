<script lang="ts">
	import DoodleDecoration from '$lib/components/DoodleDecoration.svelte';
	import mambo from '$lib/assets/mambo.png';
	import { Button } from '$lib/components/ui/button/index.js';
	let date = $state(new Date().toLocaleString());

	$effect(() => {
		const interval = setInterval(() => {
			date = new Date().toLocaleString();
		}, 1000);

		return () => clearInterval(interval);
	});
</script>

<header class="border-b-2 border-black py-4">
	<div class="container mx-auto px-4">
		<div class="flex items-center justify-between">
			<div class="flex items-center gap-2">
				<span class="text-black">~lazy cat witch~</span>
			</div>
			<nav class="hidden gap-6 text-black md:flex">
				<a href="#about" class="decoration-wavy hover:underline">about</a>
				<a href="#gallery" class="decoration-wavy hover:underline">pics</a>
				<a href="#merch" class="decoration-wavy hover:underline">stuff</a>
			</nav>
		</div>
	</div>
</header>

<section class="py-12 md:py-20">
	<div class="container mx-auto px-4">
		<div class="mx-auto max-w-5xl">
			<div class="grid items-center gap-12 md:grid-cols-2">
				<div class="relative">
					<div class="relative">
						<img src={mambo} alt="Mambo" class="mx-auto w-full max-w-md" />
						<DoodleDecoration
							type="star"
							class="absolute -top-4 -right-4 h-12 w-12 animate-pulse"
						/>
						<DoodleDecoration type="heart" class="absolute -bottom-2 -left-2 h-10 w-10" />
						<DoodleDecoration type="circle" class="absolute top-1/4 -left-6 h-8 w-8" />
					</div>
					<div class="mt-4 text-center">
						<p class="text-black italic">^ she's tired ok</p>
					</div>
				</div>

				<div>
					<h1 class="mb-6 text-black">
						meet the
						<br />
						<span class="relative inline-block">
							lazy cat witch
							<svg
								class="absolute -bottom-2 left-0 w-full"
								viewBox="0 0 200 10"
								preserveAspectRatio="none"
							>
								<path d="M0,5 Q50,8 100,5 T200,5" stroke="black" stroke-width="2" fill="none" />
							</svg>
						</span>
					</h1>

					<div class="mb-8 space-y-4 text-black/80">
						<p>she's just vibing...</p>
						<p>probably napping somewhere</p>
						<p>definitely hasn't done her homework</p>
						<p>but she's trying her best (not really)</p>
					</div>

					<div class="flex flex-col gap-3 sm:flex-row">
						<Button
							class="border-2 border-black bg-black text-white transition-colors hover:bg-white hover:text-black"
						>
							adopt her
						</Button>
						<Button
							variant="outline"
							class="border-2 border-black text-black hover:bg-black hover:text-white"
						>
							see more pics →
						</Button>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
