<script setup>
import Animals from '@/common/animals'

const randomNumber = (Math.random() * (Animals.length - 1)).toFixed()

const Animal = `/animals/${Animals[randomNumber]}.png`

const favicon = document.getElementById('favicon')

if (Animal) {
	favicon.href = Animal
}
</script>

<template>
	<img :src="Animal" class="w-12" />
</template>

<style scoped></style>
