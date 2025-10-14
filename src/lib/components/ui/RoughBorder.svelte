<script lang="ts">
	// 🧩 Props
	export let as: string = 'div'; // element tag (div, button, etc.)
	export let color: string = 'currentColor';
	export let width: number = 100;
	export let height: number = 40;
	export let radius: number = 6; // now actually used
	export let content: any; // render block
</script>

<!-- 🖊️ Define reusable symbol -->
<svg aria-hidden="true" class="hidden">
	<defs>
		<symbol id="sketch-rect" viewBox="0 0 100 40" preserveAspectRatio="none">
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

<!-- 🧱 Render element dynamically -->
<svelte:element
	this={as}
	class="relative inline-flex items-center justify-center px-4 py-2 text-emerald-400 hover:text-emerald-300"
>
	<span class="relative z-10 font-bold">
		{@render content?.()}
	</span>

	<!-- 🖍️ SVG Border using props -->
	<svg
		class="pointer-events-none absolute inset-0 h-full w-full"
		viewBox={`0 0 ${width} ${height}`}
		preserveAspectRatio="none"
		aria-hidden="true"
	>
		<rect
			x="0.5"
			y="0.5"
			width={width - 1}
			height={height - 1}
			rx={radius}
			ry={radius}
			fill="none"
			stroke={color}
			stroke-width="0"
		/>
		<use href="#sketch-rect" stroke={color} />
	</svg>
</svelte:element>
