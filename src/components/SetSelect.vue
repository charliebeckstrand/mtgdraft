<script setup>
import { ref, computed, reactive, onMounted } from 'vue'
import { useSetsStore } from '@/stores/sets'

// const emit = defineEmits(['change'])

const sets = useSetsStore()

const state = reactive({
	loading: false,
	sets: [],
	selectedSet: null,
})

const fetchSets = async () => {
	try {
		const response = await fetch('https://api.scryfall.com/sets')
		const data = await response.json()

		if (response.ok) {
			const coreSets = data.data.filter(
				(set) => set.set_type == 'core' || set.set_type == 'expansion'
			)
			return coreSets
		} else {
			throw new Error(data.details || 'Error fetching core sets')
		}
	} catch (error) {
		console.error('Error fetching core sets:', error)
		return []
	}
}

onMounted(async () => {
	if (sets.sets.length) {
		state.sets = sets.sets
		return false
	}

	state.loading = true

	const response = await fetchSets()

	state.sets = response

	sets.setSets(response)

	state.loading = false
})
</script>

<template>
	<select
		v-model="state.selectedSet"
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
			w-64
			text-ellipsis
		"
		:disabled="state.loading"
		@change="$emit('change', state.selectedSet)"
	>
		<option selected disabled value="null">
			{{ state.loading ? 'Loading...' : 'Select Set' }}
		</option>
		<option
			v-for="(set, index) in state.sets"
			:key="index"
			:value="set.code"
		>
			{{ set.name }}
		</option>
	</select>
</template>

<style scoped></style>
