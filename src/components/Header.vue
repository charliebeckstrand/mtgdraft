<script setup>
import { reactive } from 'vue'
import { faker } from '@faker-js/faker'

import Logo from '@/components/Logo.vue'
import Button from '@/components/Button.vue'
import HeroIcon from '@/components/HeroIcon.vue'

const randomName = faker.name.fullName()
const randomEmail = faker.internet.email()
const user = reactive({ name: randomName, email: randomEmail })

function login() {
	user.id = 1
}
</script>

<template>
	<div class="flex items-center justify-between">
		<Logo />

		<Button v-if="!user.id" @click="login">
			<HeroIcon icon="ArrowDownLeftIcon" /> <span>Login</span>
		</Button>
		<Button v-else>
			<div class="text-right">
				<div class="font-black">{{ randomName }}</div>
				<div class="text-sm text-gray-900 dark:text-gray-100">
					{{ randomEmail }}
				</div>
			</div>
			<HeroIcon icon="ChevronDownIcon" size="sm" />
		</Button>
	</div>
</template>

<style scoped></style>
