<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

import SetSelect from '@/components/SetSelect.vue'
import Button from '@/components/Button.vue'

const router = useRouter()
const form = reactive({})

const draftSet = () => {
	router.push(`/draft/${form.selectedSet}`)
}
</script>

<template>
	<div class="h-screen flex items-center">
		<div class="m-auto space-y-5">
			<SetSelect v-model="form.selectedSet" />
			<Button
				color="success"
				:disabled="!form.selectedSet"
				@click="draftSet"
			>
				Draft Set
			</Button>
		</div>
	</div>
</template>
