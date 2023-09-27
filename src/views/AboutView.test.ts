import { createTestingPinia } from '@pinia/testing'
import { VueWrapper, mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { useCounterStore } from '@/store/counter'
import AboutView from '@/views/AboutView.vue'

describe('AboutView.vue', () => {
  let wrapper: VueWrapper
  beforeEach(() => {
    wrapper = mount(AboutView, { global: {
      plugins: [createTestingPinia({
        createSpy: vi.fn,
        initialState: {
          counter: 15
        }
      })]
    }, 
    props: { msg: 'Hello Vitest' } })
  })

  it('should call the increment action', async () => {
    const store = useCounterStore()
    vi.spyOn(store, 'increment')
    expect(store.count).toBe(0)
    const button = wrapper.find('button')
    await button.trigger('click')
    expect(store.increment).toHaveBeenCalledOnce()
  })
})
