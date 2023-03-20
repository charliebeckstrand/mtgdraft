<script setup></script>

<template>
	<button
		type="button"
		class="
			flex
			items-center
			space-x-2
			bg-transparent
			hover:bg-gray-100
			hover:dark:bg-gray-800
			text-white
			ring-0
			outline-0
			focus:outline-none
			focus:ring-0
			rounded-full
			px-5
			py-2.5
			transition-colors
		"
	>
		<slot />
	</button>
</template>

<style scoped></style>
