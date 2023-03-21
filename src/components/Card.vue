<script setup>
import { reactive } from 'vue'

import Button from '@/components/Button.vue'

const props = defineProps({
	card: {
		type: Object,
		default() {
			return {}
		},
	},
})

const emit = defineEmits(['esc'])

function pickCard() {}
</script>

<template>
	<div
		v-if="props.card.image_uris"
		:ref="`card-${card.id}`"
		:id="`card-${card.id}`"
		class="card relative transition"
	>
		<img
			tabindex="0"
			:src="
				props.card.image_uris && props.card.image_uris.border_crop
					? props.card.image_uris.border_crop
					: props.card.image_uris && props.card.image_uris.large
					? props.card.image_uris.large
					: props.card.image_uris && props.card.image_uris.normal
					? props.card.image_uris.normal
					: props.card.image_uris && props.card.image_uris.small
					? props.card.image_uris.small
					: null
			"
			class="w-full transition cursor z-10 outline-0 cursor-pointer"
			@keydown.esc="$emit('esc')"
		/>
	</div>
</template>

<style scoped></style>
