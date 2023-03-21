<script setup>
import { ref, reactive } from 'vue'
import { faker } from '@faker-js/faker'

import Logo from '@/components/Logo.vue'
import Button from '@/components/Button.vue'
import HeroIcon from '@/components/HeroIcon.vue'

const randomName = faker.name.fullName()
const randomEmail = faker.internet.email()
const user = reactive({ name: randomName, email: randomEmail })

const deckShown = ref(false)

function login() {
	user.id = 1
}

function toggleDeckPanel() {
	deckShown.value = !deckShown.value
}
</script>

<template>
	<div class="header flex items-center justify-between p-5">
		<Logo />

		<div class="flex items-center space-x-2">
			<!-- <Button icon @click="toggleDeckPanel">
				<span>{{ deckShown ? 'Hide' : 'Show' }} Deck</span>
			</Button> -->

			<Button v-if="!user.id" @click="login">
				<HeroIcon icon="ArrowDownLeftIcon" /> <span>Login</span>
			</Button>
			<Button v-else>
				<div class="text-right">
					<div class="font-black leading-none">{{ randomName }}</div>
					<div class="text-sm text-gray-900 dark:text-gray-100">
						{{ randomEmail }}
					</div>
				</div>
				<HeroIcon icon="ChevronDownIcon" size="sm" />
			</Button>
		</div>
	</div>
</template>

<style scoped>
.header {
	min-height: 90px;
}
</style>
