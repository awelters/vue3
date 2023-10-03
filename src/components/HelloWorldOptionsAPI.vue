<script lang="ts">
import { defineComponent } from 'vue'
import { mapStores } from 'pinia'
import { useCounterStore } from '@/store/counter'

export default defineComponent({
  // type inference enabled beccause of using defineComponent
  props: {
    msg: { type: String, required: true }
  },
  data() {
    return {
      count: 0
    }
  },
  computed: {
    ...mapStores(useCounterStore),

    // explicitly annotate return type
    doubleCount(): number {
      return this.count * 2
    }
  },
  methods: {
    // implicit return type
    increment(): number {
      return this.count++
    }
  }
})
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="increment">count is {{ count }}</button>
    <h3>count doubled is: {{ doubleCount }}</h3>
    <h3>Store counter: {{ counterStore.count }}</h3>
    <p>
      Edit
      <code>components/HelloWorldOptionsAPI.vue</code> to test HMR
    </p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
