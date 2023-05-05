<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>{{ counterStore.doubleCount }}</h1>
    <h1>{{ counterStore.doubleCountAddOne }}</h1>
    <h1>{{ counterStore.getFriendById(111) }}</h1>
    <h1>{{ counterStore.getFriendById(222) }}</h1>
    <h1>{{ counterStore.showMessage }}</h1>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia"
import { useCounterStore } from "@/stores/counter"

const counterStore = useCounterStore()
</script>

<style scoped></style>
