import { createPinia, setActivePinia } from 'pinia'
import { describe, it, expect } from 'vitest'
import { useCounterStore } from '@/store/counter'

describe('Counter', () => {
  it('increments count', () => {
    // Destructuring refs and computed props breaks reactivity but actions can be safely extracted
    // https://pinia.vuejs.org/core-concepts/#using-the-store
    setActivePinia(createPinia())
    const counterStore = useCounterStore()
    const { increment } = counterStore
    expect(counterStore.count).toBe(0)
    increment()
    expect(counterStore.count).toBe(1)
  })
  it('doubles count with doubleCount computed property', () => {
    // Destructuring refs and computed props breaks reactivity but actions can be safely extracted
    // https://pinia.vuejs.org/core-concepts/#using-the-store
    setActivePinia(createPinia())
    const counterStore = useCounterStore()
    const { count, doubleCount, increment } = counterStore
    expect(count).toBe(0)
    expect(doubleCount).toBe(0)
    increment()
    expect(counterStore.count).toBe(1)
    expect(counterStore.doubleCount).toBe(2)
  })
  it('decrement count', () => {
    // Destructuring refs and computed props breaks reactivity but actions can be safely extracted
    // https://pinia.vuejs.org/core-concepts/#using-the-store
    setActivePinia(createPinia())
    const counterStore = useCounterStore()
    const { decrement } = counterStore
    expect(counterStore.count).toBe(0)
    decrement()
    expect(counterStore.count).toBe(-1)
  })
})
