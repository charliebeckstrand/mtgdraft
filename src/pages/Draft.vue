<script setup>
import { onMounted, ref, reactive } from 'vue'
import { findIndex } from 'lodash'

import Header from '@/components/Header.vue'
import Button from '@/components/Button.vue'
import HeroIcon from '@/components/HeroIcon.vue'
import Card from '@/components/Card.vue'

import { useRoute, useRouter } from 'vue-router'

const route = useRoute()

const state = reactive({
	cards: [],
	deck: [],
	pickedCard: {},
})

const getCards = async (setCode) => {
	const response = await fetch(
		`https://api.scryfall.com/cards/search?q=set:${setCode}`
	)

	const data = await response.json()

	return data.data
}

const sortByProperty = (array, property) => {
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

const selectCard = (card) => {
	state.pickedCard.id = state.pickedCard.id !== card.id ? card.id : null
}

const pickCard = (card) => {
	const cardId = card && card.id ? card.id : state.pickedCard.id
	const cardIndex = findIndex(state.cards, { id: cardId })

	state.deck.push(cardId)
	state.cards.splice(cardIndex, 1)

	state.pickedCard.id = null
}

onMounted(async () => {
	const response = await getCards(route.params.set)

	state.cards = sortByProperty(response, 'color_identity')
})
</script>

<template>
	<div class="flex flex-col grow overflow-hidden">
		<Header />

		<div class="px-5 pb-5 overflow-scroll">
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
						<template
							v-for="(card, index) in state.cards"
							:key="index"
						>
							<Card
								:card="card"
								:class="{
									'selected hover:grayscale-0 grayscale-0':
										state.pickedCard.id == card.id,
									'': state.pickedCard.id !== card.id,
									'opacity-20 hover:opacity-100 grayscale hover:grayscale-0':
										state.pickedCard.id &&
										state.pickedCard.id !== card.id,
								}"
								@click="selectCard(card)"
								@esc="state.pickedCard.id = null"
							/>
						</template>
					</div>
				</div>
			</div>

			<div
				class="
					fixed
					bottom-7
					right-7
					z-30
					transition
					duration-100
					origin-right
				"
				:class="{
					'scale-100': state.pickedCard.id,
					'scale-0': !state.pickedCard.id,
				}"
			>
				<Button
					color="white"
					class="font-bold shadow-xl"
					@click="pickCard"
				>
					<span>Pick Card</span>
					<HeroIcon icon="ChevronRightIcon" />
				</Button>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
