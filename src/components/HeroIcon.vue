<script setup>
import * as Icons from '@heroicons/vue/24/solid'

const props = defineProps({
	icon: {
		type: String,
		default: null,
	},
	size: {
		type: String,
		default: null,
	},
})
</script>

<template>
	<component
		:is="Icons[props.icon]"
		:class="{
			'h-4 w-4': props.size == 'sm',
			'h-5 w-5': !props.size || props.size == 'md',
			'h-6 w-6': props.size == 'lg',
		}"
	/>
</template>

<style scoped></style>
