import { defineStore } from 'pinia'

export const useSetsStore = defineStore('sets', {
	state: () => ({
		sets: [],
	}),
	actions: {
		setSets(value) {
			this.sets = value
		},
	},
})
