<script>
	import { Link, User, Play, Download, Info } from 'lucide-svelte';
	import Autoplay from 'embla-carousel-autoplay';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import characterImage from '$lib/assets/pgr0.png';
	import characterImage2 from '$lib/assets/pgr2.png';
	import exampleImage from '$lib/assets/mambo.png';

	// Character images for carousel
	const characterImages = [characterImage, characterImage2, exampleImage];

	// Autoplay plugin configuration - separate instances for mobile and desktop
	// Set stopOnInteraction to false for mobile to prevent touch events from stopping autoplay
	const mobilePlugin = Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: false });
	const desktopPlugin = Autoplay({ delay: 3000, stopOnInteraction: true });
</script>

<!-- Mobile First: Scrollable layout for small screens, Fixed layout for large screens -->
<div class="relative min-h-screen w-full overflow-x-hidden bg-white lg:h-screen lg:overflow-hidden">
	<!-- Grid Background -->
	<div
		class="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.5)_1px,transparent_1px)] bg-[size:20px_20px] lg:bg-[size:40px_40px]"
	></div>

	<!-- SVG Layer - Hidden on mobile, visible on desktop -->
	<svg class="absolute inset-0 hidden h-full w-full lg:block" xmlns="http://www.w3.org/2000/svg">
		<defs>
			<marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
				<polygon points="0 0, 10 3, 0 6" fill="#3b82f6" />
			</marker>
			<marker
				id="arrowhead-reverse"
				markerWidth="10"
				markerHeight="10"
				refX="1"
				refY="3"
				orient="auto"
			>
				<polygon points="10 0, 0 3, 10 6" fill="#3b82f6" />
			</marker>
		</defs>

		<line
			x1="50%"
			y1="5%"
			x2="50%"
			y2="95%"
			stroke="#3b82f6"
			stroke-width="2"
			class="animated-line"
		/>
		<line
			x1="5%"
			y1="50%"
			x2="95%"
			y2="50%"
			stroke="#3b82f6"
			stroke-width="2"
			class="animated-line"
			style="animation-delay: 0.3s"
		/>
		<line
			x1="50%"
			y1="5%"
			x2="50%"
			y2="8%"
			stroke="#3b82f6"
			stroke-width="2"
			marker-end="url(#arrowhead-reverse)"
			class="pulse-line"
		/>
		<line
			x1="50%"
			y1="92%"
			x2="50%"
			y2="95%"
			stroke="#3b82f6"
			stroke-width="2"
			marker-end="url(#arrowhead)"
			class="pulse-line"
		/>
		<line
			x1="50%"
			y1="33%"
			x2="50%"
			y2="38%"
			stroke="#3b82f6"
			stroke-width="1.5"
			class="animated-line"
			style="animation-delay: 0.6s"
		/>
		<line
			x1="50%"
			y1="42%"
			x2="65%"
			y2="42%"
			stroke="#3b82f6"
			stroke-width="1"
			stroke-dasharray="5,5"
			class="animated-line"
			style="animation-delay: 0.9s"
		/>
		<line
			x1="65%"
			y1="42%"
			x2="65%"
			y2="45%"
			stroke="#3b82f6"
			stroke-width="1"
			stroke-dasharray="5,5"
			class="animated-line"
			style="animation-delay: 0.9s"
		/>
		<g class="fade-in" style="animation-delay: 1.2s">
			<circle cx="70%" cy="85%" r="30" fill="none" stroke="#3b82f6" stroke-width="1.5" />
			<line x1="70%" y1="82%" x2="70%" y2="88%" stroke="#3b82f6" stroke-width="1.5" />
			<line x1="67%" y1="85%" x2="73%" y2="85%" stroke="#3b82f6" stroke-width="1.5" />
			<circle cx="85%" cy="85%" r="30" fill="none" stroke="#3b82f6" stroke-width="1.5" />
			<line x1="85%" y1="82%" x2="85%" y2="88%" stroke="#3b82f6" stroke-width="1.5" />
			<line x1="82%" y1="85%" x2="88%" y2="85%" stroke="#3b82f6" stroke-width="1.5" />
		</g>
	</svg>

	<!-- Content Layer -->
	<div class="relative z-10 h-full w-full">
		<!-- MOBILE LAYOUT (< 1024px) -->
		<div class="block space-y-6 p-4 pb-20 lg:hidden">
			<!-- Main Title - FESNUK (Mobile) -->
			<div class="mx-auto w-fit fade-in" style="animation-delay: 0.2s">
				<div class="border-4 border-blue-600 bg-white px-6 py-4">
					<h1 class="text-4xl tracking-tighter text-gray-900">FESNUK</h1>
					<div class="my-2 h-0.5 w-full bg-blue-600"></div>
					<p class="text-xs tracking-wider text-gray-600">TECHNICAL OPERATOR INTERFACE</p>
				</div>
			</div>

			<!-- Top Labels Row -->
			<div class="flex items-center justify-between fade-in" style="animation-delay: 0.3s">
				<div class="flex items-start gap-2">
					<div class="tracking-wider text-blue-600">
						<div class="text-xl">T</div>
					</div>
					<div class="space-y-0.5 text-xs tracking-wider">
						<div>LE</div>
						<div>MUE</div>
						<div>N</div>
					</div>
				</div>

				<div class="flex items-center gap-2">
					<div class="h-1 w-1 bg-blue-600"></div>
					<span class="text-xs tracking-wider text-blue-600">GLANCE AT</span>
				</div>
			</div>

			<!-- Operator Badge (Mobile) -->
			<div class="mx-auto w-fit fade-in" style="animation-delay: 0.4s">
				<div class="flex items-center gap-3 border-2 border-blue-600 bg-white px-4 py-2">
					<div class="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600">
						<User class="h-4 w-4 text-white" />
					</div>
					<div>
						<div class="text-xs text-gray-600">OPERATOR</div>
						<div class="text-sm tracking-wider">MT-ST-2</div>
					</div>
				</div>
			</div>

			<!-- Character Carousel (Mobile) -->
			<div class="mx-auto w-fit fade-in" style="animation-delay: 0.5s">
				<div class="relative">
					<div
						class="absolute -top-2 -right-2 z-10 h-4 w-4 border-2 border-blue-600 bg-white"
					></div>
					<div
						class="absolute -bottom-2 -left-2 z-10 h-3 w-3 border-2 border-blue-600 bg-white"
					></div>

					<Carousel.Root plugins={[mobilePlugin]} class="w-36">
						<Carousel.Content>
							{#each characterImages as character, i (i)}
								<Carousel.Item>
									<img
										src={character}
										alt="Character {i + 1}"
										class="h-44 w-36 border-2 border-blue-600 bg-white object-contain p-2"
									/>
								</Carousel.Item>
							{/each}
						</Carousel.Content>
					</Carousel.Root>
				</div>
			</div>

			<!-- Example Image (Mobile) -->
			<div class="mx-auto w-fit fade-in" style="animation-delay: 0.6s">
				<div class="relative">
					<div class="absolute -top-1 -left-1 h-3 w-3 border-t-2 border-l-2 border-blue-600"></div>
					<div class="absolute -top-1 -right-1 h-3 w-3 border-t-2 border-r-2 border-blue-600"></div>
					<div
						class="absolute -bottom-1 -left-1 h-3 w-3 border-b-2 border-l-2 border-blue-600"
					></div>
					<div
						class="absolute -right-1 -bottom-1 h-3 w-3 border-r-2 border-b-2 border-blue-600"
					></div>

					<div class="flex h-20 w-28 items-center justify-center border bg-gray-50">
						<img src={exampleImage} alt="illustration" class="h-full w-full object-cover" />
					</div>
				</div>
			</div>

			<!-- Text Blocks (Mobile) -->
			<div class="space-y-4 fade-in" style="animation-delay: 0.7s">
				<div class="border border-blue-600 bg-white/90 p-4 backdrop-blur-sm">
					<h3 class="mb-1 text-xs tracking-wider text-blue-600">SECTION.01</h3>
					<h2 class="mb-2 text-base text-gray-900">Operational Parameters</h2>
					<p class="text-xs leading-relaxed text-gray-600">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua.
					</p>
				</div>

				<div class="border-2 border-blue-600 bg-white p-4">
					<h3 class="mb-1 text-xs tracking-wider text-blue-600">DATA.STREAM</h3>
					<h2 class="mb-2 text-base text-gray-900">System Configuration</h2>
					<p class="mb-3 text-xs leading-relaxed text-gray-600">
						Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat.
					</p>
					<button
						class="w-full bg-blue-600 px-4 py-2 text-xs tracking-wider text-white transition-colors hover:bg-blue-700"
					>
						VIEW MORE
					</button>
				</div>

				<div class="border border-blue-600 bg-gray-900 p-4 text-white">
					<h3 class="mb-1 text-xs tracking-wider text-blue-400">LOG.ENTRY</h3>
					<p class="text-xs leading-relaxed opacity-90">
						Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
					</p>
				</div>
			</div>

			<!-- Action Buttons (Mobile) -->
			<div class="grid grid-cols-2 gap-3 fade-in" style="animation-delay: 0.8s">
				<button
					class="border-2 border-blue-600 bg-white px-4 py-3 text-blue-600 transition-all hover:bg-blue-600 hover:text-white"
				>
					<div class="flex items-center justify-center gap-2">
						<Play class="h-4 w-4" />
						<span class="text-xs tracking-wider">START</span>
					</div>
				</button>

				<button
					class="border-2 border-blue-600 bg-blue-600 px-4 py-3 text-white transition-all hover:bg-white hover:text-blue-600"
				>
					<div class="flex items-center justify-center gap-2">
						<Download class="h-4 w-4" />
						<span class="text-xs tracking-wider">DOWNLOAD</span>
					</div>
				</button>

				<button
					class="col-span-2 border-2 border-blue-600 bg-white px-4 py-3 text-blue-600 transition-all hover:bg-blue-600 hover:text-white"
				>
					<div class="flex items-center justify-center gap-2">
						<Info class="h-4 w-4" />
						<span class="text-xs tracking-wider">INFO</span>
					</div>
				</button>
			</div>

			<!-- Additional Elements (Mobile) -->
			<div class="space-y-3 fade-in" style="animation-delay: 0.9s">
				<div class="bg-gray-700/90 px-4 py-3 backdrop-blur-sm">
					<div class="text-sm text-white">A Glance at the Stars</div>
				</div>

				<div class="flex items-center justify-between">
					<div class="border-2 border-blue-600 bg-white px-3 py-2">
						<div class="space-y-0.5 text-xs tracking-wider text-blue-600">
							<div>YD</div>
							<div>NA</div>
							<div>MT</div>
						</div>
					</div>

					<div class="flex h-8 w-8 items-center justify-center border-2 border-blue-600 bg-white">
						<Link class="h-4 w-4 text-blue-600" />
					</div>
				</div>

				<div class="text-center text-xs tracking-wider text-blue-600">EXUSIAI.</div>
			</div>
		</div>

		<!-- DESKTOP LAYOUT (>= 1024px) - Original absolute positioning -->
		<div class="hidden lg:block">
			<!-- Top Left - MUEN Label -->
			<div class="absolute top-[18%] left-[5%] fade-in" style="animation-delay: 0.4s">
				<div class="flex items-start gap-3">
					<div class="tracking-wider text-blue-600">
						<div class="text-2xl">T</div>
					</div>
					<div class="space-y-0.5 text-xs tracking-wider">
						<div>LE</div>
						<div>MUE</div>
						<div>N</div>
					</div>
				</div>
			</div>

			<!-- Link Icon -->
			<div class="absolute top-[19%] left-[32%] fade-in" style="animation-delay: 0.5s">
				<div class="flex h-12 w-12 items-center justify-center border-2 border-blue-600 bg-white">
					<Link class="h-6 w-6 text-blue-600" />
				</div>
			</div>

			<!-- Top Right - GLANCE AT -->
			<div class="absolute top-[10%] right-[20%] fade-in" style="animation-delay: 0.6s">
				<div class="flex items-center gap-2">
					<div class="h-1.5 w-1.5 bg-blue-600"></div>
					<span class="text-xs tracking-wider text-blue-600">GLANCE</span>
				</div>
			</div>

			<div class="absolute top-[16%] right-[25%] fade-in" style="animation-delay: 0.7s">
				<span class="text-xs tracking-wider text-blue-600">AT</span>
			</div>

			<!-- Center - Operator Badge -->
			<div
				class="absolute top-[33%] left-1/2 -translate-x-1/2 fade-in"
				style="animation-delay: 0.8s"
			>
				<div class="flex items-center gap-3 border-2 border-blue-600 bg-white px-6 py-3">
					<div class="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600">
						<User class="h-5 w-5 text-white" />
					</div>
					<div>
						<div class="text-xs text-gray-600">OPERATOR</div>
						<div class="tracking-wider">MT-ST-2</div>
					</div>
				</div>
			</div>

			<!-- Image with corner brackets -->
			<div class="absolute top-[40%] right-[18%] fade-in" style="animation-delay: 1s">
				<div class="relative">
					<div class="absolute -top-2 -left-2 h-4 w-4 border-t-2 border-l-2 border-blue-600"></div>
					<div class="absolute -top-2 -right-2 h-4 w-4 border-t-2 border-r-2 border-blue-600"></div>
					<div
						class="absolute -bottom-2 -left-2 h-4 w-4 border-b-2 border-l-2 border-blue-600"
					></div>
					<div
						class="absolute -right-2 -bottom-2 h-4 w-4 border-r-2 border-b-2 border-blue-600"
					></div>

					<div class="flex h-24 w-32 items-center justify-center border bg-gray-50 text-4xl">
						<img src={exampleImage} alt="illustration" class="h-full w-full object-cover" />
					</div>
				</div>
			</div>

			<!-- Axis Labels - Right side -->
			<div class="absolute text-xs tracking-wider text-blue-600">
				<div class="absolute top-[30%] right-[52%]">Y4</div>
				<div class="absolute top-[40%] right-[52%]">Y1</div>
				<div class="absolute top-[48%] right-[52%]">Y3</div>
				<div class="absolute top-[53%] right-[52%]">C.</div>
			</div>

			<!-- Axis Labels - Left side -->
			<div class="absolute text-xs tracking-wider text-blue-600">
				<div class="absolute top-[44%] left-[30%]">Y6</div>
			</div>

			<!-- Center vertical labels -->
			<div class="absolute left-1/2 text-xs tracking-wider text-blue-600">
				<div class="absolute top-[52%] -translate-x-1/2">Y6'</div>
				<div class="absolute top-[53%] right-[-30px] -translate-x-1/2">-Y2</div>
				<div class="absolute top-[59%] right-[-20px] -translate-x-1/2">-Y1</div>
				<div class="absolute top-[63%] -translate-x-1/2">-Y5</div>
				<div class="absolute top-[68%] -translate-x-1/2">-Y4</div>
			</div>

			<!-- EXUSIAI label -->
			<div
				class="absolute top-[52%] left-[39%] text-xs tracking-wider text-blue-600 fade-in"
				style="animation-delay: 1.1s"
			>
				EXUSIAI.
			</div>

			<!-- Bottom Left - THE marker -->
			<div
				class="absolute bottom-[22%] left-[10%] text-xs tracking-wider fade-in"
				style="animation-delay: 1.2s"
			>
				THE •
			</div>

			<!-- Bottom Left - Caption with image -->
			<div class="absolute bottom-[15%] left-[5%] fade-in" style="animation-delay: 1.3s">
				<div class="max-w-[200px] bg-gray-700/90 px-6 py-4 backdrop-blur-sm">
					<div class="absolute -top-3 -left-3 h-12 w-12 border-2 border-blue-600 bg-white/10"></div>
					<div class="text-sm text-white">A Glance at the Stars</div>
				</div>
			</div>

			<!-- Bottom Left - Blue box with text -->
			<div class="absolute bottom-[5%] left-[10%] fade-in" style="animation-delay: 1.4s">
				<div class="border-2 border-blue-600 bg-white px-4 py-3">
					<div class="space-y-0.5 text-xs tracking-wider text-blue-600">
						<div>YD</div>
						<div>NA</div>
						<div>MT</div>
					</div>
				</div>
			</div>

			<!-- Bottom center - Icon placeholder -->
			<div
				class="absolute bottom-[20%] left-1/2 -translate-x-1/2 fade-in"
				style="animation-delay: 1.5s"
			>
				<div class="h-10 w-10 border-2 border-blue-600 bg-white"></div>
			</div>

			<!-- Character Image Carousel - Left Side -->
			<div class="absolute top-[35%] left-[8%] fade-in" style="animation-delay: 0.9s">
				<div class="relative">
					<div
						class="absolute -top-3 -right-3 z-10 h-6 w-6 border-2 border-blue-600 bg-white"
					></div>
					<div
						class="absolute -bottom-2 -left-2 z-10 h-4 w-4 border-2 border-blue-600 bg-white"
					></div>

					<Carousel.Root
						plugins={[desktopPlugin]}
						class="w-40"
						onmouseenter={() => desktopPlugin.stop()}
						onmouseleave={() => desktopPlugin.reset()}
					>
						<Carousel.Content>
							{#each characterImages as character, i (i)}
								<Carousel.Item>
									<img
										src={character}
										alt="Character {i + 1}"
										class="h-52 w-40 border-2 border-blue-600 bg-white object-contain p-2 transition-transform hover:scale-105"
									/>
								</Carousel.Item>
							{/each}
						</Carousel.Content>
					</Carousel.Root>
				</div>
			</div>

			<!-- Main Title - FESNUK -->
			<div class="absolute top-[25%] right-[8%] fade-in" style="animation-delay: 0.5s">
				<div class="rotate-2 border-4 border-blue-600 bg-white px-8 py-6">
					<h1 class="text-6xl tracking-tighter text-gray-900">FESNUK</h1>
					<div class="my-2 h-0.5 w-full bg-blue-600"></div>
					<p class="text-sm tracking-wider text-gray-600">TECHNICAL OPERATOR INTERFACE</p>
				</div>
			</div>

			<!-- Lorem Ipsum Text Block - Top Right -->
			<div class="absolute top-[55%] right-[5%] max-w-xs fade-in" style="animation-delay: 1.1s">
				<div class="-rotate-1 border border-blue-600 bg-white/90 p-6 backdrop-blur-sm">
					<h3 class="mb-2 text-sm tracking-wider text-blue-600">SECTION.01</h3>
					<h2 class="mb-3 text-gray-900">Operational Parameters</h2>
					<p class="text-xs leading-relaxed text-gray-600">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua.
					</p>
				</div>
			</div>

			<!-- Second Text Block - Bottom Right -->
			<div class="absolute right-[35%] bottom-[8%] max-w-sm fade-in" style="animation-delay: 1.4s">
				<div class="rotate-1 border-2 border-blue-600 bg-white p-5">
					<h3 class="mb-1 text-xs tracking-wider text-blue-600">DATA.STREAM</h3>
					<h2 class="mb-2 text-gray-900">System Configuration</h2>
					<p class="mb-3 text-xs leading-relaxed text-gray-600">
						Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat.
					</p>
					<div class="flex gap-2">
						<button
							class="flex-1 bg-blue-600 px-4 py-2 text-xs tracking-wider text-white transition-colors hover:bg-blue-700"
						>
							VIEW MORE
						</button>
					</div>
				</div>
			</div>

			<!-- Action Buttons - Scattered -->
			<button
				class="absolute top-[65%] left-[25%] rotate-3 border-2 border-blue-600 bg-white px-6 py-3 text-blue-600 transition-all fade-in hover:rotate-0 hover:bg-blue-600 hover:text-white"
				style="animation-delay: 1.2s"
			>
				<div class="flex items-center gap-2">
					<Play class="h-4 w-4" />
					<span class="text-xs tracking-wider">START</span>
				</div>
			</button>

			<button
				class="absolute top-[75%] left-[15%] -rotate-2 border-2 border-blue-600 bg-blue-600 px-5 py-3 text-white transition-all fade-in hover:rotate-0 hover:bg-white hover:text-blue-600"
				style="animation-delay: 1.3s"
			>
				<div class="flex items-center gap-2">
					<Download class="h-4 w-4" />
					<span class="text-xs tracking-wider">DOWNLOAD</span>
				</div>
			</button>

			<button
				class="absolute right-[12%] bottom-[30%] -rotate-1 border-2 border-blue-600 bg-white px-6 py-3 text-blue-600 transition-all fade-in hover:rotate-0 hover:bg-blue-600 hover:text-white"
				style="animation-delay: 1.5s"
			>
				<div class="flex items-center gap-2">
					<Info class="h-4 w-4" />
					<span class="text-xs tracking-wider">INFO</span>
				</div>
			</button>

			<!-- Small Interactive Box -->
			<div
				class="group absolute top-[25%] left-[42%] cursor-pointer transition-colors fade-in hover:bg-blue-600 hover:text-white"
				style="animation-delay: 0.7s"
			>
				<div class="border-2 border-blue-600 bg-white px-4 py-2">
					<span class="text-xs tracking-wider text-blue-600 group-hover:text-white">
						CLICK ME
					</span>
				</div>
			</div>

			<!-- Additional Lorem Text - Left -->
			<div class="absolute top-[48%] left-[28%] max-w-[220px] fade-in" style="animation-delay: 1s">
				<div class="border border-blue-600 bg-gray-900 p-4 text-white">
					<h3 class="mb-1 text-xs tracking-wider text-blue-400">LOG.ENTRY</h3>
					<p class="text-xs leading-relaxed opacity-90">
						Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	@keyframes dash {
		to {
			stroke-dashoffset: 0;
		}
	}

	.animated-line {
		stroke-dasharray: 1000;
		stroke-dashoffset: 1000;
		animation: dash 2s ease-in-out forwards;
	}

	.pulse-line {
		animation: pulse 2s ease-in-out infinite;
	}

	@keyframes pulse {
		0%,
		100% {
			opacity: 0.6;
		}
		50% {
			opacity: 1;
		}
	}

	.fade-in {
		animation: fadeIn 1s ease-in forwards;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
