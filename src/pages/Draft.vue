<script setup>
import { onMounted, ref, reactive, watch, watchEffect } from 'vue'
import { findIndex } from 'lodash'

import SetSelect from '@/components/SetSelect.vue'
import Button from '@/components/Button.vue'
import HeroIcon from '@/components/HeroIcon.vue'
import Card from '@/components/Card.vue'

import { useRoute, useRouter } from 'vue-router'

const route = useRoute()

async function getCards(setCode) {
	const response = await fetch(
		`https://api.scryfall.com/cards/search?q=set:${setCode}`
	)

	const data = await response.json()

	return data.data
}

const Cards = reactive(await getCards(route.params.set))
const SortedCards = sortByProperty(Cards, 'color_identity')

function sortByProperty(array, property) {
	return array.sort((a, b) => {
		if (a[property] < b[property]) {
			return -1
		}
		if (a[property] > b[property]) {
			return 1
		}
		return 0
	})
}

let pickedCard = reactive({})

function selectCard(card) {
	pickedCard.id = pickedCard.id !== card.id ? card.id : null
}

const Deck = reactive([])

function pickCard(card) {
	const cardId = card && card.id ? card.id : pickedCard.id
	const cardIndex = findIndex(Cards, { id: cardId })

	Deck.push(cardId)
	Cards.splice(cardIndex, 1)

	pickedCard.id = null
}
</script>

<template>
	<div class="flex flex-col space-y-5 overflow-scroll grow">
		<div class="grid flex-grow">
			<div
				class="
					cards
					grid
					xl:grid-cols-6
					lg:grid-cols-5
					md:grid-cols-4
					sm:grid-cols-3
					grid-cols-2
					gap-4
				"
			>
				<template v-for="(card, index) in SortedCards" :key="index">
					<Card
						:card="card"
						class="border-4"
						:class="{
							'selected hover:grayscale-0 grayscale-0 border-white':
								pickedCard.id == card.id,
							'border-transparent': pickedCard.id !== card.id,
							'opacity-20 hover:opacity-100 grayscale hover:grayscale-0':
								pickedCard.id && pickedCard.id !== card.id,
						}"
						@click="selectCard(card)"
						@esc="pickedCard.id = null"
					/>
				</template>
			</div>
		</div>
	</div>

	<div
		class="fixed bottom-7 right-7 z-30 transition duration-100 origin-right"
		:class="{
			'scale-100': pickedCard.id,
			'scale-0': !pickedCard.id,
		}"
	>
		<Button color="white" class="font-bold shadow-xl" @click="pickCard">
			<span>Pick Card</span>
			<HeroIcon icon="ChevronRightIcon" />
		</Button>
	</div>
</template>

<style lang="scss" scoped></style>
