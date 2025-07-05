<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <img src="https://avatars.githubusercontent.com/u/69723789?s=400&u=a0fadd40fce3bb53f5e4c210c055605f1716ff06&v=4" class="logo" alt="Vue logo" />
  </div>



</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
