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
		<router-view />
	</div>
</template>

<style scoped></style>
