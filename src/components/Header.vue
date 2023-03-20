<script setup>
import { faker } from '@faker-js/faker'

import Logo from '@/components/Logo.vue'
import Button from '@/components/Button.vue'
import HeroIcon from '@/components/HeroIcon.vue'

const randomEmail = faker.internet.email()
const user = { id: 1, name: 'John Doe' }
</script>

<template>
	<div class="flex items-center justify-between">
		<Logo />

		<Button v-if="!user.id">Login</Button>
		<Button v-else>
			<span>{{ randomEmail }}</span>
			<HeroIcon icon="ChevronDownIcon" size="sm" />
		</Button>
	</div>
</template>

<style scoped></style>
