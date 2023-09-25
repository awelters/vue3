import { createTestingPinia } from '@pinia/testing'
import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, { global: {
      plugins: [createTestingPinia({
        createSpy: vi.fn
      })]
    }, 
    props: { msg: 'Hello Vitest' } })

    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
