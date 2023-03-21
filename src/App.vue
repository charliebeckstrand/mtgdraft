<script setup>
import Header from '@/components/Header.vue'
</script>

<template>
	<div
		class="
			flex flex-col
			h-screen
			min-h-full
			dark:bg-gray-900
			dark:text-white
		"
	>
		<div id="container" class="flex flex-col grow overflow-hidden">
			<Header />

			<div class="px-5 pb-5 overflow-scroll">
				<suspense>
					<router-view v-slot="{ Component }">
						<component :is="Component" />
					</router-view>
				</suspense>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
