<script setup lang="ts">
import { ref, computed } from 'vue'
import { useCounterStore } from '@/store/counter'

const counterStore = useCounterStore()

defineProps<{ msg: string }>()

const count = ref(0)
const doubleCount = computed(() => count.value * 2)
const increment = () => count.value++
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="increment">count is {{ count }}</button>
    <h3>count doubled is: {{ doubleCount }}</h3>
    <h3>Store counter: {{ counterStore.count }}</h3>
    <p>
      Edit
      <code>components/HelloWorldCompositionAPI.vue</code> to test HMR
    </p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
