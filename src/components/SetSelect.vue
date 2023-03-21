<script setup>
import { computed } from 'vue'

const props = defineProps({
	modelValue: {
		type: String,
		default: null,
	},
})

const emit = defineEmits(['update:modelValue'])

const selectedSet = computed({
	get() {
		return props.modelValue
	},
	set(newValue) {
		emit('update:modelValue', newValue)
	},
})

async function getSets(setCode) {
	const response = await fetch(`https://api.scryfall.com/sets`)
	const data = await response.json()

	return data.data
}

// const Sets = await getSets()
const Sets = [
	{ code: 'one', name: 'Phrexia: All Will Be One' },
	{ code: 'mom', name: 'March of the Machines' },
]
</script>

<template>
	<select
		v-model="selectedSet"
		class="
			bg-gray-50
			border border-gray-300
			text-gray-900
			rounded-lg
			focus:ring-0
			outline-0
			block
			w-full
			p-2.5
			dark:bg-gray-700
			dark:border-gray-600
			dark:placeholder-gray-400
			dark:text-white
		"
	>
		<option selected disabled>Select Set</option>
		<option v-for="(set, index) in Sets" :key="index" :value="set.code">
			{{ set.name }}
		</option>
	</select>
</template>

<style scoped></style>
