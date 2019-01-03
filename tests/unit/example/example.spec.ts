import { shallowMount } from '@vue/test-utils';
import { default as Example } from '@/pages/example/components/Example.vue';

describe('分页/example/Example组件', () => {
  it('能够渲染message', () => {
    const message = 'Hello world!';
    const wrapper = shallowMount(Example, {
      propsData: {
        message
      }
    });
    expect(wrapper.html()).toMatch(message);
  });
});
