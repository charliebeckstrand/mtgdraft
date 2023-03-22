<script setup>
const props = defineProps({
	color: {
		type: String,
		default: null,
	},
	icon: {
		type: Boolean,
		default: false,
	},
	block: {
		type: Boolean,
		default: false,
	},
})

const colorVariants = {
	primary: 'bg-primary text-white',
	success: 'bg-success text-white',
	warning: 'bg-warning text-black',
	white: 'bg-white text-black',
}
</script>

<template>
	<button
		type="button"
		class="
			px-5
			py-2.5
			rounded-full
			space-x-2
			ring-0
			outline-0
			focus:outline-none
			focus:ring-0
			transition-colors transition-transform
		"
		:class="[
			{
				'px-5': !props.icon,
				'px-2.5': props.icon,
				'hover:bg-gray-100 dark:hover:bg-gray-800': !props.color,
				'block w-full': props.block,
				'flex items-center': !props.block,
			},
			colorVariants[props.color],
		]"
	>
		<slot />
	</button>
</template>

<style scoped>
button[disabled] {
	@apply bg-gray-500 opacity-50;
}
button:not([disabled]) {
	@apply hover:scale-105;
}
</style>
