import { createTestingPinia } from '@pinia/testing'
import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import HelloWorld from '@/components/HelloWorldOptionsAPI.vue'

describe('HelloWorldOptionsAPI', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
            initialState: {
              counter: {
                count: 15
              }
            }
          })
        ]
      },
      props: { msg: 'Hello Vitest' }
    })
    expect(wrapper.text()).toContain('Hello Vitest')
    expect(wrapper.text()).toContain('count is 0')
    expect(wrapper.text()).toContain('Store counter: 15')
  })
  it('increment', async () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('count is 0')
    const button = wrapper.find('button')
    await button.trigger('click')
    expect(wrapper.text()).toContain('count is 1')
  })
})
