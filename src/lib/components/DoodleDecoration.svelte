<script>
	let { type, ...restProps } = $props();
	const doodles = {
		star: `<svg viewBox="0 0 50 50" class="w-full h-full"><path d="M25,5 L30,20 L45,22 L32,32 L35,45 L25,38 L15,45 L18,32 L5,22 L20,20 Z" fill="none" stroke="currentColor" stroke-width="2" class="text-black"/></svg>`,
		heart: `<svg viewBox="0 0 50 50" class="w-full h-full"><path d="M25,40 C10,30 5,20 5,15 C5,10 10,5 15,5 C20,5 25,10 25,10 C25,10 30,5 35,5 C40,5 45,10 45,15 C45,20 40,30 25,40 Z" fill="none" stroke="currentColor" stroke-width="2" class="text-black"/></svg>`,
		circle: `<svg viewBox="0 0 50 50" class="w-full h-full"><circle cx="25" cy="25" r="20" fill="none" stroke="currentColor" stroke-width="2" class="text-black" stroke-dasharray="2,3"/></svg>`,
		arrow: `<svg viewBox="0 0 50 50" class="w-full h-full"><path d="M5,25 Q15,20 25,25 T45,25 M35,15 L45,25 L35,35" fill="none" stroke="currentColor" stroke-width="2" class="text-black"/></svg>`,
		squiggle: `<svg viewBox="0 0 50 50" class="w-full h-full"><path d="M5,25 Q10,15 15,25 T25,25 Q30,35 35,25 T45,25" fill="none" stroke="currentColor" stroke-width="2" class="text-black"/></svg>`
	};
</script>

<div {...restProps}>
	{@html doodles[type] || ''}
</div>
