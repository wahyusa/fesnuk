<script>
	let { additionalClass, content, ...restProps } = $props();
</script>

<div class={`relative ${additionalClass}`} {...restProps}>
	<svg
		class="pointer-events-none absolute inset-0 h-full w-full"
		viewBox="0 0 400 300"
		preserveAspectRatio="none"
	>
		<path
			d="M5,5 L395,8 L393,295 L7,293 Z"
			fill="none"
			stroke="currentColor"
			stroke-width="3"
			class="text-black"
			style="filter: url(#sketchy);"
		/>
		<defs>
			<filter id="sketchy">
				<feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" result="noise" />
				<feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
			</filter>
		</defs>
	</svg>
	<div class="relative p-6">
		{@render content?.()}
	</div>
</div>
